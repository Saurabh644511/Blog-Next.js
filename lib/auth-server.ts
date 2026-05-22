// import { createAuth } from "@/convex/auth";
import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";

export const { handler, getToken } = convexBetterAuthNextJs({
  // createAuth,

  convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL!,

  convexSiteUrl: process.env.NEXT_PUBLIC_CONVEX_SITE_URL!,
});
