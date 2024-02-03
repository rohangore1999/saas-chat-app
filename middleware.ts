import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = {
  // Below are the protected routes
  matcher: ["/chat", "/chat/:id*", "/register"],
};
