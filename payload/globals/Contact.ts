import { GlobalConfig } from "payload";

export const Contact: GlobalConfig = {
  slug: "contact",
  label: "Contact Info",
  fields: [
    { name: "phone", type: "text" },
    { name: "email", type: "text" },
    { name: "address", type: "text", localized: true },
  ],
};
