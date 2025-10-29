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

  // If it's a protected path and user is not logged in, redirect to signin
  if (!isPublicPath && !isLoggedIn) {
    const signinUrl = new URL("/auth/signin", request.url)
    signinUrl.searchParams.set("callbackUrl", request.url)
    return NextResponse.redirect(signinUrl)
  }

  // If user is logged in and trying to access auth pages, redirect to home
  if (isLoggedIn && pathname.startsWith("/auth/")) {
    return NextResponse.redirect(new URL("/", request.url))
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