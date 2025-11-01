import type { CollectionConfig } from "payload";

export const Specials: CollectionConfig = {
  slug: "specials",
  // admin: { useAsTitle: "name" },
  fields: [
    {
      name: "badge",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subtitle",
      type: "textarea",
      localized: true,
    },
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "desc",
      type: "textarea",
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "price",
      type: "text",
    },
    {
      name: "rating",
      type: "number",
    },
  ],
};
