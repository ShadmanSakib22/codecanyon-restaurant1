import type { GlobalConfig } from "payload";

export const CommonUI: GlobalConfig = {
  slug: "common-ui",
  label: "Common UI Texts",
  fields: [
    {
      name: "common",
      type: "group",
      admin: {
        description:
          "⚠️ These texts are used throughout the website interface. Changing them may affect UI labels, buttons, and links. Proceed carefully!",
      },
      fields: [
        { name: "contactUs", type: "text" },
        { name: "viewMenu", type: "text" },
        { name: "reserveNow", type: "text" },
        { name: "social", type: "text" },
        { name: "location", type: "text" },
        { name: "review", type: "text" },
        { name: "reviews", type: "text" },
        { name: "menu", type: "text" },
        { name: "specials", type: "text" },
        { name: "openOn", type: "text" },
      ],
    },
  ],
};
