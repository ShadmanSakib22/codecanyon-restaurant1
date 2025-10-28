import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "jp"] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  //console.log(`i18n.ts log - ${locale}`);
  const safeLocale = (locale ?? "en") as Locale;

  if (!locales.includes(safeLocale)) {
    console.error("Invalid locale:", safeLocale);
    notFound();
  }

  // const messages = await import(`@/lib/messages/${safeLocale}.json`).then(
  //   (mod) => mod.default
  // );

  return {
    locale: safeLocale,
    // messages,
  };
});
