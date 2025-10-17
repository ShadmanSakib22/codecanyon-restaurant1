// /sanity/schemaTypes/i18nFile.ts

import { defineType, defineField } from "sanity";

export const i18nFile = defineType({
  name: "i18nFile",
  title: "Translation File Management",
  type: "document",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Japanese", value: "jp" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fileName",
      title: "File Name",
      type: "string",
      readOnly: true,
      initialValue: (document) =>
        document?.language ? `${document.language}.json` : "en.json",
    }),
    defineField({
      name: "jsonContent",
      title: "Translation JSON Content",
      type: "text",
      description:
        "Paste the complete JSON content for this language translation file",
      validation: (Rule) =>
        Rule.required().custom((value) => {
          if (!value) return true;
          try {
            JSON.parse(value);
            return true;
          } catch (e) {
            console.log(e);
            return "Invalid JSON format";
          }
        }),
    }),
    defineField({
      name: "isActive",
      title: "Active Translation File",
      type: "boolean",
      description: "Only one file per language should be active at a time",
      initialValue: false,
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "language",
      subtitle: "fileName",
      isActive: "isActive",
    },
    prepare({ title, subtitle, isActive }) {
      return {
        title: `${title.toUpperCase()} Translations`,
        subtitle: `${subtitle} ${isActive ? "✓ Active" : ""}`,
      };
    },
  },
});
