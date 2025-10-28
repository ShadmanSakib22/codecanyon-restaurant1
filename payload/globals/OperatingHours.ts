import { GlobalConfig } from "payload";

export const OperatingHours: GlobalConfig = {
  slug: "operating-hours",
  label: "Operating Hours",
  fields: [
    { name: "slot1", type: "text", localized: true },
    { name: "slot1time", type: "text" },
    { name: "slot2", type: "text", localized: true },
    { name: "slot2time", type: "text" },
    { name: "slot3", type: "text", localized: true },
    { name: "slot3time", type: "text" },
  ],
};
