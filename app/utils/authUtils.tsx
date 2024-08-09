import { auth } from '@clerk/nextjs/server';


//Protected Route
export function protectRoute() {
  auth().protect();
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not logged in");
  }
}
