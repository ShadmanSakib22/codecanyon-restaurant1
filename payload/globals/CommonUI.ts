import { GlobalConfig } from "payload";

export const CommonUI: GlobalConfig = {
  slug: "common-texts",
  label: "Common UI Texts",
  fields: [
    {
      name: "common",
      type: "group",
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
        { name: "person", type: "text" },
        { name: "people", type: "text" },
      ],
    },
  ],
};
