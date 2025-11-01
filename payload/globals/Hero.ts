import type { GlobalConfig } from "payload";

export const Hero: GlobalConfig = {
  slug: "hero",
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
