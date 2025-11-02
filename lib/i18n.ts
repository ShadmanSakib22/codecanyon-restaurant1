import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getPayloadClient } from "@/lib/payloadClient";
import { locales, type Locale } from "@/lib/locales";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  const safeLocale = (locale ?? "en") as Locale;

  if (!locales.includes(safeLocale)) {
    console.error("Invalid locale:", safeLocale);
    notFound();
  }

  try {
    const payload = await getPayloadClient();

    // Fetch all globals (localized)
    const [
      siteSettings,
      hero,
      contact,
      operatingHours,
      reservationUI,
      commonUI,
    ] = await Promise.all([
      payload.findGlobal({
        slug: "site-settings",
        locale: safeLocale,
      }),
      payload.findGlobal({
        slug: "hero",
        locale: safeLocale,
      }),
      payload.findGlobal({
        slug: "contact",
        locale: safeLocale,
      }),
      payload.findGlobal({
        slug: "operating-hours",
        locale: safeLocale,
      }),
      payload.findGlobal({
        slug: "reservation-ui",
        locale: safeLocale,
      }),
      payload.findGlobal({
        slug: "common-ui",
        locale: safeLocale,
      }),
    ]);

    // Fetch localized collections
    const [menuItems, specials, testimonials] = await Promise.all([
      payload.find({
        collection: "menu-items",
        locale: safeLocale,
        depth: 1,
      }),
      payload.find({
        collection: "specials",
        locale: safeLocale,
        depth: 1,
      }),
      payload.find({
        collection: "testimonials",
        locale: safeLocale,
        depth: 1,
      }),
    ]);

    // Construct your translation-like object for NextIntl
    const messages = {
      common: commonUI?.common || {},
      hero: hero || {},
      menu: {
        items: menuItems?.docs || [],
        specials: specials?.docs || [],
      },
      contact: contact || {},
      operatingHours: operatingHours || {},
      testimonials: testimonials?.docs || [],
      reservation: reservationUI || [],
      site: siteSettings || {},
    };

    return {
      locale: safeLocale,
      messages,
    };
  } catch (error) {
    console.error("Error loading messages from Payload:", error);
    return {
      locale: safeLocale,
      messages: {},
    };
  }
});
