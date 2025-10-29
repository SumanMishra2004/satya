import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import crypto from 'crypto'
import { sendEmail, generateVerificationEmailHTML } from '@/lib/email'

const prisma = new PrismaClient()

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedFields = signupSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validatedFields.error.flatten().fieldErrors 
        },
        { status: 400 }
      )
    }

    const { name, email, password } = validatedFields.data

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      if (existingUser.emailVerified) {
        return NextResponse.json(
          { error: 'User already exists with this email' },
          { status: 400 }
        )
      } else {
        // User exists but email not verified, resend verification
        const verificationToken = crypto.randomBytes(32).toString('hex')
        const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            verificationToken,
            tokenExpires,
          }
        })

        const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`
        
        const emailResult = await sendEmail({
          to: email,
          subject: 'Verify Your Email Address',
          html: generateVerificationEmailHTML(verificationUrl, name)
        })

        if (!emailResult.success) {
          return NextResponse.json(
            { error: 'Failed to send verification email' },
            { status: 500 }
          )
        }

        return NextResponse.json(
          { 
            message: 'Verification email resent. Please check your inbox and verify your email.',
            requiresVerification: true 
          },
          { status: 200 }
        )
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex')
    const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        verificationToken,
        tokenExpires,
      }
    })

    // Send verification email
    const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${verificationToken}`
    
    const emailResult = await sendEmail({
      to: email,
      subject: 'Welcome! Verify Your Email Address',
      html: generateVerificationEmailHTML(verificationUrl, name)
    })

    if (!emailResult.success) {
      // Delete user if email fails to send
      await prisma.user.delete({
        where: { id: user.id }
      })
      
      return NextResponse.json(
        { error: 'Failed to send verification email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Account created successfully! Please check your email and verify your account before signing in.',
        requiresVerification: true
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}