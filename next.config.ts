import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "careful-ladybug-821.convex.cloud",
        protocol: "https",
        port: "",
      },
    ],
  },

  
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  
};

export default nextConfig;