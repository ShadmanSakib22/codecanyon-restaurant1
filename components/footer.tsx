// components/footer
import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="bg-gradient-to-t from-foreground to-foreground/95 text-background backdrop-blur-sm py-3 px-4 text-center text-sm">
      {t("site.copyright")}
    </footer>
  );
};

export default Footer;
