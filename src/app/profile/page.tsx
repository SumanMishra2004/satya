"use client"

import { useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRequireAuth } from "@/hooks/useAuth"
import { Loader2, User, Mail, Shield, Calendar, LogOut } from "lucide-react"
import toast from "react-hot-toast"

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const { isLoading } = useRequireAuth()

  // Debug logging for production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      console.log('👤 Profile Page - Session State:', {
        status,
        hasSession: !!session,
        sessionUser: session?.user,
        isLoading,
        timestamp: new Date().toISOString()
      })
    }
  }, [session, status, isLoading])

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" })
      toast.success("Signed out successfully")
    } catch (error) {
      toast.error("Failed to sign out")
    }
  }

  if (isLoading || status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Loading profile...</p>
          {process.env.NODE_ENV === 'production' && (
            <p className="text-xs text-gray-500 mt-2">
              Session status: {status}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (!session && status === "unauthenticated") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You need to be signed in to view this page.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button 
                onClick={() => window.location.href = '/auth/signin'} 
                className="w-full"
              >
                Go to Sign In
              </Button>
              {process.env.NODE_ENV === 'production' && (
                <div className="text-xs text-gray-500">
                  <p>Debug info:</p>
                  <p>Status: {status}</p>
                  <p>Session: {session ? 'exists' : 'null'}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // At this point, we should have a valid session
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Session Error</CardTitle>
            <CardDescription>There was an issue loading your session. Please try signing in again.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => window.location.href = '/auth/signin'} 
              className="w-full"
            >
              Sign In Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto space-y-6 pt-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                {session.user?.image ? (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 text-blue-600" />
                )}
              </div>
              <div>
                <CardTitle className="text-xl">{session.user?.name || "User"}</CardTitle>
                <CardDescription className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{session.user?.email}</span>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <User className="w-4 h-4 text-gray-500" />
                  <span>{session.user?.name || "Not provided"}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{session.user?.email}</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Role</label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <Badge variant={session.user?.role === "ADMIN" ? "default" : "secondary"}>
                    {session.user?.role || "USER"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Account Type</label>
                <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <Badge variant="outline">
                    {session.user?.image ? "OAuth Account" : "Email Account"}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => toast.success("Profile editing coming soon!")}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Status</CardTitle>
            <CardDescription>Your account verification status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className={`flex items-center justify-between p-4 border rounded-lg ${
                session.user?.emailVerified ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    session.user?.emailVerified ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <span className="text-sm font-medium">Email Verification</span>
                </div>
                <Badge variant="outline" className={
                  session.user?.emailVerified 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }>
                  {session.user?.emailVerified ? 'Verified' : 'Not Verified'}
                </Badge>
              </div>

              {!session.user?.emailVerified && (
                <div className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
                  <p>Your email is not verified. Some features may be limited.</p>
                  <Button 
                    variant="link" 
                    className="h-auto p-0 text-yellow-700 underline"
                    onClick={() => toast("Contact support to verify your email")}
                  >
                    Need help with verification?
                  </Button>
                </div>
              )}

              <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Two-Factor Authentication</span>
                </div>
                <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                  Not Enabled
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}