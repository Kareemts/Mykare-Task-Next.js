import { NextResponse } from 'next/server'

 
export function middleware(request) {
    const path = request.nextUrl.pathname 
    const isPublicPath = path === '/login' || path === 'signup'
}
 
export const config = {
  matcher: [
    '/',
    '/login',
    '/signup',
    '/admin-dashboard'
  ]
}