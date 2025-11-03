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
        protocol: "http",
        hostname: "localhost",
      },
      { protocol: "https", hostname: "placehold.co" },
      {
        // Your Preview URL Domain
        protocol: "https",
        hostname: "codecanyon-restaurant1-7ug1yllkw.vercel.app",
      },
      {
        // Your Production/Custom Domain
        protocol: "https",
        hostname: "codecanyon-restaurant1.vercel.app",
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
