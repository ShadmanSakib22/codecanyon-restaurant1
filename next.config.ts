import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";

// --- Initialize Plugins ---
const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

// --- Base Next.js Config ---
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io", // Older UploadThing domain
      },
      {
        protocol: "https",
        hostname: "**.ufs.sh", // New UploadThing domain (App-specific subdomains)
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app", // This covers all Vercel preview/branch URLs
      },
    ],
  },
  experimental: {
    reactCompiler: false,
  },
};

// --- Chain the Wrappers ---
const config = withNextIntl(nextConfig);
export default withPayload(config);
