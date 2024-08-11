import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware((auth, req) => {
  // Add any custom logic here, if needed.
  // Example: Check if the user is authenticated before accessing the route.
});

export const config = {
  matcher: ['/translate', '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
