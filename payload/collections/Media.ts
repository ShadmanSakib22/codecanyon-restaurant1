import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  // admin: { useAsTitle: "filename" },
  access: {
    // Allows anyone (public/logged-out users) to read the media file and its metadata.
    read: () => true,
  },
  fields: [],
};
