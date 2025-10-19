import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        elevated: "var(--elevated)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        border: "var(--border)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-contrast": "var(--color-primary-contrast)",
        secondary: "var(--secondary)",
        hover: "var(--hover)",
        success: "var(--success)",
        danger: "var(--danger)",
        warning: "var(--warning)",
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
