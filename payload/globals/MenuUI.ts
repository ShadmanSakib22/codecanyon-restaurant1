import type { GlobalConfig } from "payload";

export const MenuUI: GlobalConfig = {
  slug: "menu-ui",
  label: "Special Menu UI",
  admin: {
    description:
      "⚠️ These texts are used in the UI of featured/specials part of the website. Proceed carefully!",
  },
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
      name: "menuCard",
      type: "text",
      localized: true,
    },
  ],
};
