"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "jp";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export function TranslationProvider({
  children,
  defaultLanguage = "en",
}: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [translations, setTranslations] = useState<Record<string, unknown>>({});

  useEffect(() => {
    // Load translations for the current language
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`./${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(
          `Failed to load translations for language: ${language}`,
          error
        );
        // Fallback to English if the language file doesn't exist
        if (language !== "en") {
          const englishModule = await import("./en.json");
          setTranslations(englishModule.default);
        }
      }
    };

    loadTranslations();
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return the key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  const value: TranslationContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
