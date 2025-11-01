import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";

// --- Initialize Plugins ---
const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

// --- Base Next.js Config ---
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  experimental: {
    reactCompiler: false,
  },
};

// --- Chain the Wrappers ---
const config = withNextIntl(nextConfig);
export default withPayload(config);
