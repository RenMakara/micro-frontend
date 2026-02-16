import type { NextConfig } from "next";

const normalizeBaseUrl = (url: string) => url.replace(/\/$/, "");

const ROOT_BASE_URL = normalizeBaseUrl(process.env.ROOT_BASE_URL || "http://localhost:3000");
const IPAD_BASE_URL = normalizeBaseUrl(process.env.IPAD_BASE_URL || "http://localhost:3002");
const MAC_BASE_URL = normalizeBaseUrl(process.env.MAC_BASE_URL || "http://localhost:3003");
const IPHONE_BASE_URL = normalizeBaseUrl(process.env.IPHONE_BASE_URL || "http://localhost:3001");


const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/",
        destination: `${ROOT_BASE_URL}/`,
      },
      {
        source: "/ipad",
        destination: `${IPAD_BASE_URL}/ipad`,
      },
      {
        source: "/ipad/:path*",
        destination: `${IPAD_BASE_URL}/ipad/:path*`,
      },
      {
        source: "/ipad-static",
        destination: `${IPAD_BASE_URL}/ipad-static`,
      },
      {
        source: "/ipad-static/:path*",
        destination: `${IPAD_BASE_URL}/ipad-static/:path*`,
      },
      {
        source: "/mac",
        destination: `${MAC_BASE_URL}/mac`,
      },
      {
        source: "/mac/:path*",
        destination: `${MAC_BASE_URL}/mac/:path*`,
      },
      {
        source: "/mac-static",
        destination: `${MAC_BASE_URL}/mac-static`,
      },
      {
        source: "/mac-static/:path*",
        destination: `${MAC_BASE_URL}/mac-static/:path*`,
      },
      {
        source: "/iphone",
        destination: `${IPHONE_BASE_URL}/iphone`,
      },
      {
        source: "/iphone/:path*",
        destination: `${IPHONE_BASE_URL}/iphone/:path*`,
      },
      {
        source: "/iphone-static",
        destination: `${IPHONE_BASE_URL}/iphone-static`,
      },
      {
        source: "/iphone-static/:path*",
        destination: `${IPHONE_BASE_URL}/iphone-static/:path*`,
      },
    ];
  },
};

export default nextConfig;
