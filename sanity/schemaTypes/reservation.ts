// /sanity/schemaTypes/reservation.ts

import { defineType, defineField } from "sanity";

export const reservation = defineType({
  name: "reservation",
  title: "Reservation",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "guestCount",
      title: "Number of Guests",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).error("Must have at least 1 guest."),
    }),
    defineField({
      name: "date",
      title: "Reservation Date & Time",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending 📝", value: "pending" },
          { title: "Confirmed ✅", value: "confirmed" },
          { title: "Checked In 🧑‍🤝‍🧑", value: "checked_in" },
          { title: "Cancelled ❌", value: "cancelled" },
        ],
      },
      initialValue: "pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "specialRequests",
      title: "Special Requests/Notes",
      type: "text",
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: "Date, Newest",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
