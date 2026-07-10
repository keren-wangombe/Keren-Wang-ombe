import { Playfair_Display, Inter } from "next/font/google";

/**
 * Headlines / display — Playfair Display, an editorial high-contrast serif.
 * Restrained weights only. Optical/italic used sparingly for emphasis.
 * Exposed as `--font-serif` (kept as the CSS variable Tailwind reads).
 */
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

/**
 * Body / UI / labels, Inter. Clean, neutral, gets out of the way.
 * Regular + emphasis weights.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});
