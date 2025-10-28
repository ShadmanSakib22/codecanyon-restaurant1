import { CollectionConfig } from "payload";

export const Reservations: CollectionConfig = {
  slug: "reservations",
  admin: { useAsTitle: "name" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "phone", type: "text", required: true },
    { name: "guests", type: "number", required: true },
    { name: "date", type: "date", required: true },
    { name: "time", type: "text", required: true },
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
