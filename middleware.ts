import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
      Match all request paths except for:
      1. Static files (_next, images, fonts, etc.)
      2. Files with extensions (e.g., .html, .css, .js, .png, etc.)
    */
    '/((?!_next|.*\\..*).*)',
    // Always match for API routes
    '/(api|trpc)(.*)',
  ],
};
