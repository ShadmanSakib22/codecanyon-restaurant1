// /sanity/schemaTypes/index.ts

import { type SchemaTypeDefinition } from "sanity";

// Import all document and reusable types
import { supportedLanguages, localeString } from "./localeString";
import { i18n } from "./i18n";
import { i18nFile } from "./i18nFile";
import { menuItem } from "./menuItem";
import { testimonial } from "./testimonial";
import { reservation } from "./reservation";
import { siteSettings } from "./siteSettings";

const localeText = {
  title: "Localized Text",
  name: "localeText",
  type: "object",
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "text",
    rows: 3,
  })),
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString as SchemaTypeDefinition,
    localeText as SchemaTypeDefinition,

    // Document Types
    i18n,
    i18nFile,
    menuItem,
    testimonial,
    reservation,
    siteSettings,
  ],
};
