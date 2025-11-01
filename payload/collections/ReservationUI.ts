import type { CollectionConfig } from "payload";

export const ReservationUI: CollectionConfig = {
  slug: "reservation-ui",
  // admin: { useAsTitle: "name" },
  fields: [
    {
      name: "validation",
      type: "group",
      fields: [{ name: "missingFields", type: "text" }],
    },
    {
      name: "success",
      type: "group",
      fields: [{ name: "message", type: "text" }],
    },
    {
      name: "error",
      type: "group",
      fields: [{ name: "message", type: "text" }],
    },
    { name: "bookTable", type: "text" },
    { name: "bookTableSubtitle", type: "text" },
    { name: "fullName", type: "text" },
    { name: "namePlaceholder", type: "text" },
    { name: "numberOfGuests", type: "text" },
    { name: "person", type: "text" },
    { name: "people", type: "text" },
    { name: "largerPartyNote", type: "text" },
    { name: "date", type: "text" },
    { name: "time", type: "text" },
    { name: "specialRequests", type: "text" },
    { name: "specialRequestsPlaceholder", type: "text" },
    { name: "submitting", type: "text" },
    { name: "confirmReservation", type: "text" },
    { name: "confirmationNote", type: "text" },
  ],
};
