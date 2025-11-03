import type { GlobalConfig } from "payload";

export const Hero: GlobalConfig = {
  slug: "hero",
  access: {
    read: () => true, // CRITICAL: Allows public read for the frontend
    update: () => true, // Allows admin users to edit/update data
  },
  label: "Hero Section",
  fields: [
    {
      name: "backgroundImage",
      type: "upload",
      relationTo: "media",
    },
    { name: "badge", type: "text", localized: true },
    { name: "title", type: "text", localized: true },
    { name: "subtitle", type: "textarea", localized: true },
    { name: "socialUrl", type: "text" },
    { name: "mapUrl", type: "text" },
    { name: "reviewUrl", type: "text" },
  ],
};
