import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "liquid-page": "var(--liquid-page)",
        "liquid-surface": "var(--liquid-surface)",
        "liquid-muted": "var(--liquid-muted)",
        "liquid-ink": "var(--liquid-ink)",
        "liquid-subtle": "var(--liquid-subtle)",
        "liquid-accent": "var(--liquid-accent)",
        "liquid-danger": "var(--liquid-danger)",
        "liquid-ring": "var(--liquid-ring)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "monospace"],
      },
    },
  },
};

export default config;
