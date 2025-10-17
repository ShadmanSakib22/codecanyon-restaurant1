import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Restaurant Admin")
    .items([
      // Site Configuration Section
      S.listItem()
        .title("Site Configuration")
        .child(
          S.list()
            .title("Configuration")
            .items([
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Translation Files")
                .child(
                  S.documentTypeList("i18nFile").title("Translation Management")
                ),
              S.listItem()
                .title("General Translations")
                .child(
                  S.documentTypeList("i18n").title("General Translations")
                ),
            ])
        ),

      S.divider(),

      // Content Management Section
      S.listItem()
        .title("Content Management")
        .child(
          S.list()
            .title("Content")
            .items([
              S.listItem()
                .title("Menu Items & Specials")
                .child(S.documentTypeList("menuItem").title("Menu Management")),
              S.listItem()
                .title("Customer Testimonials")
                .child(S.documentTypeList("testimonial").title("Testimonials")),
            ])
        ),

      S.divider(),

      // Operations Section
      S.listItem()
        .title("Operations")
        .child(
          S.list()
            .title("Operations")
            .items([
              S.listItem()
                .title("Reservations")
                .child(
                  S.documentTypeList("reservation")
                    .title("All Reservations")
                    .filter('_type == "reservation"')
                    .defaultOrdering([{ field: "date", direction: "desc" }])
                ),
              S.listItem()
                .title("Pending Reservations")
                .child(
                  S.documentList()
                    .title("Pending Reservations")
                    .filter('_type == "reservation" && status == "pending"')
                    .defaultOrdering([{ field: "date", direction: "asc" }])
                ),
            ])
        ),

      // Fallback for any other document types
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "siteSettings",
            "i18nFile",
            "i18n",
            "menuItem",
            "testimonial",
            "reservation",
          ].includes(item.getId() || "")
      ),
    ]);
