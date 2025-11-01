import type { CollectionConfig } from "payload";

export const MenuItems: CollectionConfig = {
  slug: "menu-items",
  // admin: { useAsTitle: "name" },
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
