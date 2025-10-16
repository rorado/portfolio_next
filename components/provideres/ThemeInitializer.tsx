"use client";
import { useEffect } from "react";

export default function ThemeInitializer() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("eliteshop-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme =
        saved === "light" || saved === "dark"
          ? saved
          : prefersDark
          ? "dark"
          : "light";
      document.documentElement.setAttribute("data-theme", theme);
    } catch (e) {
      console.error("Theme init failed:", e);
    }
  }, []);

  return null;
}
