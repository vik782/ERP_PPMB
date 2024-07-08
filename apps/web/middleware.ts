import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  
  if (!token) {
    // Redirect to login page if no token is found
    return NextResponse.redirect(new URL('/login', request.url));
  }


  // Continue with the request if the token is present
  return NextResponse.next();
}

// Define routes to apply middleware
export const config = {
  matcher: ['/dashboard/:path*', '/protected-route/:path*'], // Add other protected routes as needed
};

