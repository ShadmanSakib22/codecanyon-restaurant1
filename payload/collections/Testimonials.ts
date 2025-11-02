import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  // admin: { useAsTitle: "user" },
  fields: [
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
