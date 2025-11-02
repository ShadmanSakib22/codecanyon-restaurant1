// middleware.ts
import createMiddleware from "next-intl/middleware";
import { locales } from "@/lib/locales";

export default createMiddleware({
  locales,
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    "/((?!admin|api|_next|uploads|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
