// /sanity/schemaTypes/localeString.ts

import { defineType, defineField } from "sanity";

export const supportedLanguages = [
  { id: "en", title: "English" },
  { id: "jp", title: "Japanese" },
];

// Reusable type for fields that need to be translated
export const localeString = defineType({
  title: "Localized String",
  name: "localeString",
  type: "object",
  // This array defines the fields of this object type
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: "string",
    })
  ),
});
