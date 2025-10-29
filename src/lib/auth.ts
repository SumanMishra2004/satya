import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import { z } from "zod"
import type { Adapter } from "next-auth/adapters"

const prisma = new PrismaClient()

// Validation schemas
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const validatedFields = loginSchema.safeParse(credentials)
          
          if (!validatedFields.success) {
            return null
          }

          const { email, password } = validatedFields.data

          const user = await prisma.user.findUnique({
            where: { email }
          })

          if (!user || !user.password) {
            return null
          }

          // Check if email is verified
          if (!user.emailVerified) {
            throw new Error("Please verify your email before signing in")
          }

          const passwordsMatch = await bcrypt.compare(password, user.password)

          if (!passwordsMatch) {
            return null
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            image: user.image,
          }
        } catch (error) {
          console.error("Authorization error:", error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        // Debug logging for production
        if (process.env.NODE_ENV === 'production') {
          console.log('🔑 JWT Callback - User signed in:', {
            userId: user.id,
            userEmail: user.email,
            userName: user.name,
            userRole: user.role,
            timestamp: new Date().toISOString()
          })
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role
        // Debug logging for production
        if (process.env.NODE_ENV === 'production') {
          console.log('📋 Session Callback:', {
            sessionUserId: session.user.id,
            sessionUserEmail: session.user.email,
            sessionUserName: session.user.name,
            sessionUserRole: session.user.role,
            tokenSub: token.sub,
            timestamp: new Date().toISOString()
          })
        }
      }
      return session
    },
    async signIn({ user, account }) {
      // Debug logging for production
      if (process.env.NODE_ENV === 'production') {
        console.log('🚪 SignIn Callback:', {
          provider: account?.provider,
          userEmail: user.email,
          userName: user.name,
          userId: user.id,
          timestamp: new Date().toISOString()
        })
      }

      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true
      }

      // For credentials, check if email is verified
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! }
      })

      if (!existingUser?.emailVerified) {
        console.log('❌ SignIn denied - email not verified:', { userEmail: user.email })
        return false
      }

      return true
    },
    async redirect({ url, baseUrl }) {
      // Debug logging for production
      if (process.env.NODE_ENV === 'production') {
        console.log('🔄 Redirect Callback:', {
          url,
          baseUrl,
          timestamp: new Date().toISOString()
        })
      }

      // Handle redirects after successful authentication
      // If the url is a relative path, prepend baseUrl
      if (url.startsWith("/")) {
        const finalUrl = `${baseUrl}${url}`
        console.log('🔄 Relative redirect:', { originalUrl: url, finalUrl })
        return finalUrl
      }
      // If the url is a callback URL on the same origin, allow it
      if (new URL(url).origin === baseUrl) {
        console.log('🔄 Same origin redirect:', { url, baseUrl })
        return url
      }
      // Default redirect to profile after successful authentication
      const defaultUrl = `${baseUrl}/profile`
      console.log('🔄 Default redirect to profile:', { originalUrl: url, defaultUrl })
      return defaultUrl
    },
  },
  events: {
    async linkAccount({ user }) {
      // Debug logging for production
      if (process.env.NODE_ENV === 'production') {
        console.log('🔗 LinkAccount Event:', {
          userId: user.id,
          userEmail: user.email,
          userName: user.name,
          timestamp: new Date().toISOString()
        })
      }
      
      // Auto-verify email for OAuth accounts
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    },
    async signIn({ user, account, isNewUser }) {
      // Debug logging for production
      if (process.env.NODE_ENV === 'production') {
        console.log('✅ SignIn Event:', {
          userId: user.id,
          userEmail: user.email,
          userName: user.name,
          provider: account?.provider,
          isNewUser,
          timestamp: new Date().toISOString()
        })
      }
    },
    async signOut() {
      // Debug logging for production
      if (process.env.NODE_ENV === 'production') {
        console.log('🚪 SignOut Event:', {
          timestamp: new Date().toISOString()
        })
      }
    },
  },
})