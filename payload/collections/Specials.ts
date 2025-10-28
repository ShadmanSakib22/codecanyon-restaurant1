import { CollectionConfig } from "payload";

export const Specials: CollectionConfig = {
  slug: "specials",
  admin: { useAsTitle: "name" },
  fields: [
    { name: "name", type: "text", required: true, localized: true },
    { name: "description", type: "textarea", localized: true },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    { name: "imgalt", type: "text", localized: true },
    { name: "price", type: "text" },
    { name: "rating", type: "number" },
  ],
};
