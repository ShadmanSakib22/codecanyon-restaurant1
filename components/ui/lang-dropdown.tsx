"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n/translation-context";

interface LanguageDropdownProps {
  isTop: boolean;
  languages?: { code: string; nameKey: string }[];
}

const defaultLanguages = [
  { code: "en", nameKey: "language.english" },
  { code: "jp", nameKey: "language.japanese" },
];

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isTop,
  languages = defaultLanguages,
}) => {
  // Use the translation hook to access context values
  const { language, setLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectLanguage = useCallback(
    (code: string) => {
      setLanguage(code as "en" | "jp");
      setIsOpen(false);
    },
    [setLanguage]
  );

  // --- Handlers for Closing Dropdown ---
  // Handle closing on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  // Handle closing on Escape key press (Accessibility improvement)
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  // --- Dynamic Classes for Styling ---
  const baseClasses = {
    trigger: isTop
      ? "text-secondary hover:bg-secondary/10 focus:ring-secondary/50"
      : "text-primary hover:bg-primary/10 focus:ring-primary/50",
    activeItem: "bg-accent text-accent-foreground",
    inactiveItem: "text-foreground hover:bg-muted/50",
  };

  const currentLanguageName = t(
    languages.find((lang) => lang.code === language)?.nameKey ||
      "language.english"
  );

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="language-menu"
        className={`flex items-center justify-between gap-1 md:w-28 px-3 py-2 rounded-md font-medium
          transition-all duration-200 focus:outline-none focus:ring-1 
          ${baseClasses.trigger}
        `}
      >
        <Globe className="w-4 h-4" />
        <span className="text-nowrap">{currentLanguageName}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <div
        id="language-menu"
        role="menu"
        aria-orientation="vertical"
        className={`absolute right-0 mt-2 w-40 p-1 rounded-lg shadow-xl ring-1 ring-border bg-background z-30 
          transition-all duration-200 origin-top-right
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelectLanguage(lang.code)}
            aria-checked={language === lang.code}
            role="menuitemradio"
            className={`flex w-full items-center justify-between px-4 py-2 text-sm rounded-md
              transition-colors duration-150
              ${
                language === lang.code
                  ? baseClasses.activeItem
                  : baseClasses.inactiveItem
              }
            `}
          >
            {t(lang.nameKey)}
            {language === lang.code && (
              <span className="text-xs opacity-70">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
