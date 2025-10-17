// /sanity/schemaTypes/i18n.ts

import { defineType, defineField } from "sanity";

export const i18n = defineType({
  name: "i18n",
  title: "Internationalization (General Text)",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language Code",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Japanese", value: "jp" },
        ],
      },
      validation: (Rule) => Rule.required().error("Language code is required."),
    }),
    defineField({
      name: "translations",
      title: "Translation JSON",
      type: "text",
      description:
        'Paste the JSON key/value pairs for general site text (e.g., {"home_title": "Welcome"}).',
      validation: (Rule) => Rule.required().error("JSON content is required."),
      // Note: You may want to use a custom component here for JSON validation
    }),
  ],
  // Singleton view suggestion: Use a list of languages instead of a free-form list of documents
  preview: {
    select: {
      title: "language",
    },
  },
});
