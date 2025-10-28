import { CollectionConfig } from "payload";

export const MenuItems: CollectionConfig = {
  slug: "menu-items",
  admin: { useAsTitle: "name" },
  fields: [
    { name: "name", type: "text", required: true, localized: true },
    { name: "shortdesc", type: "text", localized: true },
    { name: "price", type: "text" },
    { name: "category", type: "text", defaultValue: "Items", localized: true },
  ],
};
