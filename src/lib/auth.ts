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
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role
      }
      return session
    },
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") {
        return true
      }

      // For credentials, check if email is verified
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! }
      })

      if (!existingUser?.emailVerified) {
        return false
      }

      return true
    },
    async redirect({ url, baseUrl }) {
      // Handle redirects after successful authentication
      // If the url is a relative path, prepend baseUrl
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      // If the url is a callback URL on the same origin, allow it
      if (new URL(url).origin === baseUrl) {
        return url
      }
      // Default redirect to profile after successful authentication
      return `${baseUrl}/profile`
    },
  },
  events: {
    async linkAccount({ user }) {
      // Auto-verify email for OAuth accounts
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    },
  },
})