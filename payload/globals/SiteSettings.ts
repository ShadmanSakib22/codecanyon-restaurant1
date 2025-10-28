import { GlobalConfig } from "payload";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  fields: [
    {
      name: "logoType",
      type: "select",
      options: [
        { label: "Image", value: "image" },
        { label: "Text", value: "text" },
      ],
      defaultValue: "image",
    },
    {
      name: "logoImage",
      type: "upload",
      relationTo: "media",
      admin: {
        condition: (_, siblingData) => siblingData.logoType === "image",
      },
    },
    {
      name: "logoText",
      type: "text",
      admin: { condition: (_, siblingData) => siblingData.logoType === "text" },
    },
    { name: "companyName", type: "text", localized: true },
    {
      name: "metadata",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
      ],
      localized: true,
    },
  ],
};
