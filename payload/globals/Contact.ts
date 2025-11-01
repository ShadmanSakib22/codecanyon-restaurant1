import type { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: "contact",
  label: "Contact Info",
  fields: [
    { name: "title", type: "text", localized: true },
    { name: "phone", type: "text" },
    { name: "email", type: "text" },
    { name: "address", type: "text", localized: true },
  ],
};
