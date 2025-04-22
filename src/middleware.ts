import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Check for authentication using cookies/headers
  const isAuthenticated = true; // Replace with actual auth check

  // Protect dashboard route
  if (request.nextUrl.pathname.startsWith('/dashboard') && !isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// See: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ['/dashboard/:path*'],
};
