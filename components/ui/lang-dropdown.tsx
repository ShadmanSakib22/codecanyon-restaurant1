"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe } from "lucide-react";

interface LanguageDropdownProps {
  isTop: boolean;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ isTop }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "EN", name: "English" },
    { code: "JP", name: "Japanese" },
  ];

  // Function to handle clicking outside the dropdown to close it
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
      {/* Trigger Button */}
      <button
        type="button"
        className={`
          flex w-20 items-center gap-1 p-2 h-auto rounded-md transition-colors duration-200 
          ${textClass} ${hoverClass} 
          focus:outline-none focus:ring-1 ${focusClass} focus:ring-opacity-50
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="w-4 h-4" />
        <span className="font-medium">{language}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu Content */}
      <div
        className={`
          absolute right-0 mt-2 w-36 origin-top-right rounded-md 
          bg-background ring ring-foreground/50 transition-opacity duration-150 ease-out z-10
          ${
            isOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }
        `}
        style={{ transformOrigin: "top right" }}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-1" role="none">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelectLanguage(lang.code)}
              className={`
                block w-full text-left px-4 py-2 text-sm transition-colors duration-150
                ${
                  language === lang.code
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-background"
                }
              `}
              role="menuitem"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
