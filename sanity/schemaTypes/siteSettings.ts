// /sanity/schemaTypes/siteSettings.ts

import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings & Global Assets",
  type: "document",
  fields: [
    defineField({
      name: "logoImage",
      title: "Restaurant Logo (Image)",
      type: "image",
      description: "Upload the main restaurant logo.",
    }),
    defineField({
      name: "logoText",
      title: "Logo Text (or alternative for SEO)",
      type: "string",
      description:
        "Used for logo text or Alt-text if an image is provided. Mandatory.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Section Background Image",
      type: "image",
      options: { hotspot: true },
      description: "The main background image for the top/hero section.",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
