import type { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  // admin: { useAsTitle: "user" },
  access: {
    create: () => true, // Allows creation (e.g., reservations form, admin adding data)
    read: () => true, // CRITICAL: Allows public read for the frontend
    update: () => true, // Allows admin users to edit/update data
    delete: () => true, // Allows admin users to delete data
  },
  fields: [
    {
      name: "mainImg",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "userImg",
      type: "upload",
      relationTo: "media",
    },
    { name: "user", type: "text" },
    { name: "feedback", type: "textarea" },
  ],
};
