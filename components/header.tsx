"use client";

import { useState, useEffect } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import ThemeToggle from "./theme-toggle";
import { useTranslations } from "next-intl";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Translation hook for Header namespace
  const t = useTranslations("Header");

  // Pages must match keys in your messages JSON
  const pages: { id: string; label: any }[] = [
    { id: "about", label: "about" },
    { id: "experience", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "contact", label: "contact" },
  ];

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
          {/* Site title */}
          <div className="text-xl font-bold text-[var(--color-text)] cursor-pointer">
            {t("contact")}
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => scrollToSection(page.id)}
                className="text-[var(--color-text)] hover:text-[var(--color-text)] hover:underline cursor-pointer transition-colors"
              >
                {t(page.label)}
              </button>
            ))}
          </div>

          {/* Theme toggle & language switcher */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
