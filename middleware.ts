// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "@/lib/i18n";

export default createMiddleware({
  locales, // A list of all locales that are supported
  defaultLocale: "en", // Match your fallback in i18n.ts

  // Optional: Locale prefix (e.g. "always" or "never")
  localePrefix: "as-needed",
});

export const config = {
  // Matcher for all paths except API routes, static files, and _next
  matcher: ["/", "/(en|jp)/:path*"],
};
