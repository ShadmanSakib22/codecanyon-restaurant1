import type { GlobalConfig } from "payload";

export const ReservationUI: GlobalConfig = {
  slug: "reservation-ui",
  access: {
    read: () => true, // CRITICAL: Allows public read for the frontend
    update: () => true, // Allows admin users to edit/update data
  },
  label: "Reservation UI Texts",
  fields: [
    {
      name: "bookTable",
      type: "text",
      localized: true,
    },
    {
      name: "bookTableSubtitle",
      type: "text",
      localized: true,
    },
    {
      name: "fullName",
      type: "text",
      localized: true,
    },
    {
      name: "phone",
      type: "text",
      localized: true,
    },
    {
      name: "namePlaceholder",
      type: "text",
      localized: true,
    },
    {
      name: "numberOfGuests",
      type: "text",
      localized: true,
    },
    {
      name: "person",
      type: "text",
      localized: true,
    },
    {
      name: "people",
      type: "text",
      localized: true,
    },
    {
      name: "largerPartyNote",
      type: "text",
      localized: true,
    },
    {
      name: "date",
      type: "text",
      localized: true,
    },
    {
      name: "time",
      type: "text",
      localized: true,
    },
    {
      name: "specialRequests",
      type: "text",
      localized: true,
    },
    {
      name: "specialRequestsPlaceholder",
      type: "text",
      localized: true,
    },
    {
      name: "submitting",
      type: "text",
      localized: true,
    },
    {
      name: "confirmReservation",
      type: "text",
      localized: true,
    },
    {
      name: "confirmationNote",
      type: "text",
      localized: true,
    },
    // Error/Success messages
    {
      name: "validation",
      type: "group",
      localized: true,
      fields: [
        {
          name: "missingFields",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      name: "success",
      type: "group",
      localized: true,
      fields: [
        {
          name: "message",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      name: "error",
      type: "group",
      localized: true,
      fields: [
        {
          name: "message",
          type: "text",
          localized: true,
        },
      ],
    },
  ],
};
