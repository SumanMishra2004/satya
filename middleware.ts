import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = request.nextUrl
  const isLoggedIn = !!token

  // Define public paths that don't require authentication
  const publicPaths = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/configuration",
  ]

  // Auth pages that should be accessible when not logged in
  const authPages = [
    "/auth/signin",
    "/auth/signup", 
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify-email",
  ]

  // Check if the current path starts with any public path
  const isPublicPath = publicPaths.some(path => 
    pathname === path || pathname.startsWith(path + "/")
  )

  // Check if it's an auth page
  const isAuthPage = authPages.some(path => 
    pathname === path || pathname.startsWith(path + "/")
  )

  // Special handling for profile page
  if (pathname === "/profile") {
    if (!isLoggedIn) {
      const signinUrl = new URL("/auth/signin", request.url)
      signinUrl.searchParams.set("callbackUrl", request.url)
      return NextResponse.redirect(signinUrl)
    }
    // Allow access to profile if logged in, regardless of email verification status
    // The profile page itself can handle showing verification status
    return NextResponse.next()
  }

  // If it's a protected path (not public, not auth) and user is not logged in
  if (!isPublicPath && !isAuthPage && !isLoggedIn) {
    const signinUrl = new URL("/auth/signin", request.url)
    signinUrl.searchParams.set("callbackUrl", request.url)
    return NextResponse.redirect(signinUrl)
  }

  // If user is logged in and trying to access auth pages (except verify-email)
  // Allow access to verify-email even when logged in for the verification flow
  if (isLoggedIn && isAuthPage && !pathname.startsWith("/auth/verify-email")) {
    // Redirect to profile after successful authentication instead of home
    return NextResponse.redirect(new URL("/profile", request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Protect all routes except public ones
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}