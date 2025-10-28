import path from "path";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
// collections
import { Users } from "@/payload/collections/Users";
import { Reservations } from "@/payload/collections/Reservations";
import { MenuItems } from "@/payload/collections/MenuItems";
import { Specials } from "@/payload/collections/Specials";
import { Testimonials } from "@/payload/collections/Testimonials";
import { Media } from "@/payload/collections/Media";
// globals
import { SiteSettings } from "@/payload/globals/SiteSettings";
import { Hero } from "@/payload/globals/Hero";
import { Contact } from "@/payload/globals/Contact";
import { OperatingHours } from "@/payload/globals/OperatingHours";
import { CommonUI } from "@/payload/globals/CommonUI";

export default buildConfig({
  db: sqliteAdapter({
    client: {
      url: `./${process.env.DATABASE_FILENAME}`,
    },
  }),
  secret: process.env.PAYLOAD_SECRET || "dev-key",

  localization: {
    locales: ["en", "jp"],
    defaultLocale: "en",
    fallback: true,
  },

  plugins: [
    uploadthingStorage({
      options: {
        token: process.env.UPLOADTHING_TOKEN || "",
        acl: "public-read",
      },
      collections: {
        media: true,
      },
    }),
  ],

  collections: [Users, Media, MenuItems, Specials, Testimonials, Reservations],

  globals: [SiteSettings, Hero, Contact, OperatingHours, CommonUI],

  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
