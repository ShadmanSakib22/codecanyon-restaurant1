// payload/payload.config.ts
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { uploadthingStorage } from "@payloadcms/storage-uploadthing";
import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
// collections
import { Users } from "./collections/Users.ts";
import { Reservations } from "./collections/Reservations.ts";
import { MenuItems } from "./collections/MenuItems.ts";
import { Specials } from "./collections/Specials.ts";
import { Testimonials } from "./collections/Testimonials.ts";
import { Media } from "./collections/Media.ts";
// globals
import { SiteSettings } from "./globals/SiteSettings.ts";
import { Hero } from "./globals/Hero.ts";
import { MenuUI } from "./globals/MenuUI.ts";
import { Contact } from "./globals/Contact.ts";
import { OperatingHours } from "./globals/OperatingHours.ts";
import { ReservationUI } from "./globals/ReservationUI.ts";
import { CommonUI } from "./globals/CommonUI.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const dbFilename = process.env.DATABASE_FILENAME || "payload.sqlite";
// const absolutePath = path.join(process.cwd(), "payload", dbFilename);
// const posixPath = absolutePath.replace(/\\/g, "/");

export default buildConfig({
  editor: lexicalEditor(),

  db: sqliteAdapter({
    client: {
      // url: `file:${posixPath}`,
      url: process.env.DATABASE_URL || "",
      authToken: process.env.DATABASE_TOKEN || "",
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
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || "",
        acl: "public-read",
      },
    }),
  ],

  sharp,

  collections: [Users, Media, MenuItems, Specials, Testimonials, Reservations],

  globals: [
    SiteSettings,
    Hero,
    MenuUI,
    Contact,
    OperatingHours,
    ReservationUI,
    CommonUI,
  ],

  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"],

  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
