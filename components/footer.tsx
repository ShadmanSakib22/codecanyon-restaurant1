"use client";
import React from "react";
import { useTranslation } from "@/lib/i18n/translation-context";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-t from-foreground to-foreground/95 text-background backdrop-blur-sm py-3 text-center text-sm">
      {t("footer.copyright")}{" "}
      <a
        href="https://shadman-portfolio-2024.vercel.app/"
        className="hover:underline underline-offset-4 text-nowrap"
      >
        {t("footer.developer")}
      </a>
    </footer>
  );
};

export default Footer;
