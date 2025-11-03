import type { CollectionConfig } from "payload";

export const Specials: CollectionConfig = {
  slug: "specials",
  // admin: { useAsTitle: "name" },
  access: {
    create: () => true, // Allows creation (e.g., reservations form, admin adding data)
    read: () => true, // CRITICAL: Allows public read for the frontend
    update: () => true, // Allows admin users to edit/update data
    delete: () => true, // Allows admin users to delete data
  },
  fields: [
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
