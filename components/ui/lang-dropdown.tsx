"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageDropdownProps {
  isTop: boolean;
  languages?: { code: string; name: string }[];
  defaultLang?: string;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  isTop,
  languages = [
    { code: "EN", name: "English" },
    { code: "JP", name: "Japanese" },
  ],
  defaultLang = "EN",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(defaultLang);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
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

  const handleSelectLanguage = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
  };

  const textClass = isTop ? "text-secondary" : "text-primary";
  const hoverClass = isTop ? "hover:bg-secondary/10" : "hover:bg-primary/10";
  const focusClass = isTop
    ? "focus:ring-secondary/50"
    : "focus:ring-primary/50";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center justify-between gap-1 w-[270px] md:w-24 px-3 py-2 rounded-md font-medium
          transition-all duration-200 ${textClass} ${hoverClass}
          focus:outline-none focus:ring-1 ${focusClass}
        `}
      >
        <Globe className="w-4 h-4" />
        <span>{language}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 w-40 rounded-lg shadow-lg ring-1 ring-border bg-background z-20
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
            className={`flex w-full items-center justify-between px-4 py-2 text-sm rounded-md
              transition-colors duration-150
              ${
                language === lang.code
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground hover:bg-muted/50"
              }
            `}
          >
            {lang.name}
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
