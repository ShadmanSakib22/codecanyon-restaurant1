export const revalidate = 3600;
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getPayloadClient } from "@/lib/payloadClient";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const title = locale === "jp" ? "レストラン名" : "Restaurant Name";

  return {
    title,
    description:
      locale === "jp" ? "レストランの説明" : "Restaurant Description",
  };
}

async function getMessagesFromPayload(locale: string) {
  try {
    const payload = await getPayloadClient();

    // Fetch all globals (localized)
    const [siteSettings, hero, contact, operatingHours, commonUI] =
      await Promise.all([
        payload.findGlobal({
          slug: "site-settings",
          locale,
        }),
        payload.findGlobal({
          slug: "hero",
          locale,
        }),
        payload.findGlobal({
          slug: "contact",
          locale,
        }),
        payload.findGlobal({
          slug: "operating-hours",
          locale,
        }),
        payload.findGlobal({
          slug: "common-ui",
          locale,
        }),
      ]);

    // Fetch localized collections
    const [menuItems, specials, testimonials, reservationUI] =
      await Promise.all([
        payload.find({
          collection: "menu-items",
          locale,
          depth: 1,
        }),
        payload.find({
          collection: "specials",
          locale,
          depth: 1,
        }),
        payload.find({
          collection: "testimonials",
          locale,
          depth: 1,
        }),
        payload.find({
          collection: "reservation-ui",
          locale,
          depth: 1,
        }),
      ]);

    // Construct your translation-like object for NextIntl
    const messages = {
      common: commonUI || {},
      hero: hero || {},
      menu: {
        items: menuItems?.docs || [],
        specials: specials?.docs || [],
      },
      contact: {
        ...contact,
        operatingHours: operatingHours,
      },
      testimonials: testimonials?.docs || [],
      reservation: reservationUI?.docs || [],
      site: siteSettings || {},
    };

    return messages;
  } catch (error) {
    console.error("Error loading messages from Payload:", error);
    return {};
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  const messages = await getMessagesFromPayload(locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
