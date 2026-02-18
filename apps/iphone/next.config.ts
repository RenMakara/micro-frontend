import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },

      {
        protocol: "https",
        hostname: "www.apple.com",
      },

      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
  },
  basePath: "/iphone",
  assetPrefix: "/iphone-static",
};

export default nextConfig;
