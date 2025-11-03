import type { CollectionConfig } from "payload";

export const MenuItems: CollectionConfig = {
  slug: "menu-items",
  // admin: { useAsTitle: "name" },
  access: {
    create: () => true, // Allows creation (e.g., reservations form, admin adding data)
    read: () => true, // CRITICAL: Allows public read for the frontend
    update: () => true, // Allows admin users to edit/update data
    delete: () => true, // Allows admin users to delete data
  },
  fields: [
    {
      name: "category",
      type: "text",
      required: true,
      localized: true,
      defaultValue: "Items",
    },
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "shortdesc",
      type: "text",
      localized: true,
    },
    {
      name: "price",
      type: "text",
    },
  ],
};
