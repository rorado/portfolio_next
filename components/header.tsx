"use client";

import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import ThemeToggle from "./theme-toggle";
import { useTranslations } from "next-intl";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">{t("name")}</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("about")}
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("experience")}
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("projects")}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("contact")}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {t("contact")}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
