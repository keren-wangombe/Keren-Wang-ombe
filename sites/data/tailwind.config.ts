import type { Config } from "tailwindcss";
import preset from "../../shared/tailwind-preset";

/**
 * Site-level Tailwind config. The design tokens live in the shared preset so
 * both portfolios stay visually identical; this file only declares where to
 * scan for class names (this site's app + the shared components/lib).
 */
const config: Config = {
  presets: [preset as Partial<Config>],
  content: [
    "./app/**/*.{ts,tsx}",
    "../../shared/components/**/*.{ts,tsx}",
    "../../shared/lib/**/*.{ts,tsx}",
  ],
};

export default config;
