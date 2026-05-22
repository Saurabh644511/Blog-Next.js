import { handler } from "@/lib/auth-server";

export const { GET, POST } = handler;
// import { convexBetterAuthNextJs } from "@convex-dev/better-auth/nextjs";

// const auth = convexBetterAuthNextJs({
//   convexUrl: process.env.NEXT_PUBLIC_CONVEX_URL!,
//   convexSiteUrl: process.env.NEXT_PUBLIC_SITE_URL!,
// });

// export const GET = auth.handler.GET;
// export const POST = auth.handler.POST;