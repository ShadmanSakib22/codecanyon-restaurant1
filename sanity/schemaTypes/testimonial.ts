// /sanity/schemaTypes/testimonial.ts

import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Customer Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "review",
      title: "Review Text",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5."),
    }),
    defineField({
      name: "mainImage",
      title: "Testimonial Background Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "customerImage",
      title: "Customer Photo",
      type: "image",
      description: "Optional. Use for a profile picture.",
    }),
  ],
});
