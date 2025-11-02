export const revalidate = 3600;
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { Locale } from "@/lib/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = locale as Locale;
  const title = safeLocale === "jp" ? "レストラン名" : "Restaurant Name";

  return {
    title,
    description:
      locale === "jp" ? "レストランの説明" : "Restaurant Description",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  );
}
