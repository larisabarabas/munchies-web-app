import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request:NextRequest) {
    const userAgent = request.headers.get('user-agent') || '';
    const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);

     // Redirect mobile users from "/" to "/splash-screen"
    if (isMobile && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/splash-screen', request.url));
    }

    // Redirect desktop users from "/" to "/restaurants"
    if (!isMobile && request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/restaurants', request.url));
    }

    // Redirect desktop users trying to access "/mobile-only"
    if (!isMobile && request.nextUrl.pathname === '/splash-screen') {
        return NextResponse.redirect(new URL('/restaurants', request.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/','/splash-screen', '/restaurants']
}