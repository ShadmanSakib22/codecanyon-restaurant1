// lib/locales.ts
// Lightweight locale configuration - safe for edge runtime
export const locales = ["en", "jp"] as const;
export type Locale = (typeof locales)[number];
