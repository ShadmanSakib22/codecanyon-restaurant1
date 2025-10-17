// /sanity/schemaTypes/menuItem.ts

import { defineType, defineField } from "sanity";
import { localeString, supportedLanguages } from "./localeString";

// Define a localized text type (for longer descriptions)
const localeText = defineType({
  title: "Localized Text",
  name: "localeText",
  type: "object",
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: "text",
      rows: 3,
    })
  ),
});

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item & Specials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Item Name",
      type: localeString.name, // Using the localized type
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: localeText.name, // Using the localized type
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) =>
        Rule.required().positive().error("Price must be a positive number."),
    }),
    defineField({
      name: "image",
      title: "Item Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isSpecial",
      title: "Special Item (Featured)",
      type: "boolean",
      description: "Check to feature this item on the specials section.",
      initialValue: false,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Appetizer", value: "appetizer" },
          { title: "Main Course", value: "main" },
          { title: "Dessert", value: "dessert" },
          { title: "Beverage", value: "beverage" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
