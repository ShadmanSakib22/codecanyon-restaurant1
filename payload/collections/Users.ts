// payload/collections/Users.ts
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    // Temporarily set read access to true to rule out faulty custom logic
    read: () => true,
    // ...
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [],
};
