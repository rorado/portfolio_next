import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'], // correct array form
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        elevated: "var(--color-elevated)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-contrast": "var(--color-primary-contrast)",
        secondary: "var(--color-secondary)",
        hover: "var(--color-hover)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
        warning: "var(--color-warning)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
