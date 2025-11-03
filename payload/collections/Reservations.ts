import type { CollectionConfig } from "payload";

export const Reservations: CollectionConfig = {
  slug: "reservations",
  // admin: { useAsTitle: "name" },

  access: {
    create: () => true, // allow anyone to submit
    read: () => true, // optionally allow public read
    update: ({ req }) => !!req.user, // only authenticated users
    delete: ({ req }) => !!req.user, // only authenticated users
  },

  fields: [
    // Reservation form submissions
    { name: "name", type: "text", required: true },
    { name: "phone", type: "text", required: true },
    { name: "guests", type: "number", required: true },
    { name: "date", type: "date", required: true },
    { name: "time", type: "text", required: true },
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "status",
      type: "select",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Confirmed", value: "confirmed" },
        { label: "Checked-In", value: "checked-in" },
        { label: "Cancelled", value: "cancelled" },
      ],
      defaultValue: "pending",
    },
  ],
};
