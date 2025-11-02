// payload/globals/CommonUI.ts
import type { GlobalConfig } from "payload";

export const CommonUI: GlobalConfig = {
  slug: "common-ui",
  label: "Common UI Texts",
  fields: [
    {
      name: "common",
      type: "group",
      localized: true,
      admin: {
        description:
          "⚠️ These texts are used throughout the website interface. Changing them may affect UI labels, buttons, and links. Proceed carefully!",
      },
      fields: [
        { name: "contactUs", type: "text", localized: true },
        { name: "viewMenu", type: "text", localized: true },
        { name: "reserveNow", type: "text", localized: true },
        { name: "social", type: "text", localized: true },
        { name: "location", type: "text", localized: true },
        { name: "review", type: "text", localized: true },
        { name: "reviews", type: "text", localized: true },
        { name: "menu", type: "text", localized: true },
        { name: "specials", type: "text", localized: true },
        { name: "openOn", type: "text", localized: true },
      ],
    },
  ],
};
