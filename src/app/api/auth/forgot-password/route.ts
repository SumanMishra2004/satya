import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { z } from 'zod'
import { sendEmail, generatePasswordResetEmailHTML } from '@/lib/email'

const prisma = new PrismaClient()

const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
})

// Forgot password - send reset email
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedFields = forgotPasswordSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validatedFields.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { email } = validatedFields.data

    const user = await prisma.user.findUnique({
      where: { email }
    })

    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json(
        { message: 'If an account with that email exists, a password reset link has been sent.' },
        { status: 200 }
      )
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const tokenExpires = new Date(Date.now() + 60 * 60 * 1000) // 1 hour

    await prisma.user.update({
      where: { id: user.id },
      data: {
        verificationToken: resetToken,
        tokenExpires,
      }
    })

    // Send reset email
    const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`
    
    const emailResult = await sendEmail({
      to: email,
      subject: 'Reset Your Password',
      html: generatePasswordResetEmailHTML(resetUrl, user.name || undefined)
    })

    if (!emailResult.success) {
      console.error('Failed to send reset email:', emailResult.error)
    }

    return NextResponse.json(
      { message: 'If an account with that email exists, a password reset link has been sent.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Forgot password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Reset password with token
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedFields = resetPasswordSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validatedFields.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { token, password } = validatedFields.data

    // Find user with valid reset token
    const user = await prisma.user.findFirst({
      where: {
        verificationToken: token,
        tokenExpires: {
          gte: new Date() // Token hasn't expired
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid or expired reset token' },
        { status: 400 }
      )
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Update user password and clear reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        verificationToken: null,
        tokenExpires: null,
      }
    })

    return NextResponse.json(
      { message: 'Password reset successfully. You can now sign in with your new password.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Reset password error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}