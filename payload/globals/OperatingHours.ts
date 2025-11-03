import type { GlobalConfig } from "payload";

export const OperatingHours: GlobalConfig = {
  slug: "operating-hours",
  access: {
    read: () => true, // CRITICAL: Allows public read for the frontend
    update: () => true, // Allows admin users to edit/update data
  },
  label: "Operating Hours",
  fields: [
    { name: "title", type: "text", localized: true },
    { name: "slot1", type: "text", localized: true },
    { name: "slot1time", type: "text" },
    { name: "slot2", type: "text", localized: true },
    { name: "slot2time", type: "text" },
    { name: "slot3", type: "text", localized: true },
    { name: "slot3time", type: "text" },
    { name: "disclaimer", type: "text", localized: true },
  ],
};
