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
  skipVerification: z.boolean().optional() // Allow skipping verification for simpler flow
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

    const { name, email, password, skipVerification = false } = validatedFields.data

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user with or without verification based on skipVerification flag
    const userData: any = {
      name,
      email,
      password: hashedPassword,
    }

    // If we're skipping verification, verify the email immediately
    if (skipVerification) {
      userData.emailVerified = new Date()
    } else {
      // Generate verification token for email verification flow
      const verificationToken = crypto.randomBytes(32).toString('hex')
      const tokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
      userData.verificationToken = verificationToken
      userData.tokenExpires = tokenExpires
    }

    const user = await prisma.user.create({
      data: userData
    })

    // If not skipping verification, send verification email
    if (!skipVerification) {
      const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify-email?token=${userData.verificationToken}`
      
      try {
        await sendEmail({
          to: email,
          subject: 'Welcome! Verify Your Email Address',
          html: generateVerificationEmailHTML(verificationUrl, name)
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Don't fail the signup if email fails, just log it
        // User can request verification later
      }

      return NextResponse.json(
        { 
          message: 'Account created successfully! Please check your email and verify your account.',
          requiresVerification: true
        },
        { status: 201 }
      )
    }

    // If verification is skipped, user can sign in immediately
    return NextResponse.json(
      { 
        message: 'Account created successfully! You can now sign in.',
        requiresVerification: false
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