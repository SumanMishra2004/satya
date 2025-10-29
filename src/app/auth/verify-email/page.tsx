"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import toast from "react-hot-toast"
import { Loader2, CheckCircle, XCircle } from "lucide-react"

export default function VerifyEmailPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [success, setSuccess] = useState<boolean | null>(null)
  const [message, setMessage] = useState("")
  
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setSuccess(false)
        setMessage("Verification token is missing")
        setIsLoading(false)
        return
      }

      try {
        const response = await fetch(`/api/auth/verify-email?token=${encodeURIComponent(token)}`)
        const result = await response.json()

        if (response.ok) {
          setSuccess(true)
          setMessage(result.message)
          toast.success(result.message)
        } else {
          setSuccess(false)
          setMessage(result.error || "Verification failed")
          toast.error(result.error || "Verification failed")
        }
      } catch (error) {
        setSuccess(false)
        setMessage("An error occurred during verification")
        toast.error("An error occurred during verification")
      } finally {
        setIsLoading(false)
      }
    }

    verifyEmail()
  }, [token])

  const resendVerification = async () => {
    if (!token) {
      toast.error("No token available")
      return
    }

    try {
      // You might want to implement a way to get the email from the token
      // For now, we'll direct users to the forgot password page
      toast.success("Please use the forgot password link to get a new verification email")
    } catch (error) {
      toast.error("Failed to resend verification email")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
            <CardTitle className="text-2xl font-bold text-blue-800">Verifying Email</CardTitle>
            <CardDescription>
              Please wait while we verify your email address...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4">
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-green-800">Email Verified!</CardTitle>
            <CardDescription>
              {message}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Your email has been successfully verified. You can now sign in to your account.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/auth/signin" className="w-full">
              <Button className="w-full">
                Continue to Sign In
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-rose-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-red-800">Verification Failed</CardTitle>
          <CardDescription>
            {message}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            The verification link may be invalid or expired. You can request a new verification email.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link href="/auth/forgot-password" className="w-full">
            <Button className="w-full">
              Request New Verification
            </Button>
          </Link>
          <Link href="/auth/signin" className="w-full">
            <Button variant="outline" className="w-full">
              Back to Sign In
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}