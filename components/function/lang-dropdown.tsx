"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface LanguageDropdownProps {
  isTop: boolean;
  languages?: { code: string; name: string }[];
}

const defaultLanguages = [
  { code: "en", name: "English" },
  { code: "jp", name: "日本語" },
];

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isTop,
  languages = defaultLanguages,
}) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
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

  // Close on Escape key
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  const baseClasses = {
    trigger: isTop
      ? "text-secondary hover:bg-secondary/10 focus:ring-secondary/50"
      : "text-primary hover:bg-primary/10 focus:ring-primary/50",
    activeItem: "bg-accent text-accent-foreground",
    inactiveItem: "text-foreground hover:bg-muted/50",
  };

  const currentLanguageName =
    languages.find((lang) => lang.code === locale)?.name || "English";

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false);
    if (langCode !== locale) {
      // Split pathname: first segment is current locale
      const segments = pathname.split("/").slice(2);
      const newPath = `/${langCode}/${segments.join("/")}`;

      // Preserve query params
      const query = searchParams.toString();
      router.push(query ? `${newPath}?${query}` : newPath);
    }
  };

  return (
    <div className="relative inline-block text-left w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="language-menu"
        className={`flex items-center justify-between gap-1 md:w-28 px-3 py-2 rounded-md font-medium
          transition-all duration-200 focus:outline-none focus:ring-1 w-full
          ${baseClasses.trigger}`}
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
          }`}
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`flex w-full items-center justify-between px-4 py-2 text-sm rounded-md
              transition-colors duration-150
              ${
                locale === lang.code
                  ? baseClasses.activeItem
                  : baseClasses.inactiveItem
              }`}
          >
            {lang.name}
            {locale === lang.code && (
              <span className="text-xs opacity-70">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropdown;
