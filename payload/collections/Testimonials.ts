import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  // admin: { useAsTitle: "user" },
  fields: [
    { name: "title", type: "text", localized: true },
    { name: "subtitle", type: "text", localized: true },
    {
      name: "mainImg",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "userImg",
      type: "upload",
      relationTo: "media",
    },
    { name: "user", type: "text" },
    { name: "feedback", type: "textarea" },
  ],
};
