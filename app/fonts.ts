import { DM_Serif_Display, DM_Sans } from "next/font/google";

/**
 * Headlines / display — DM Serif Display, the portfolio's editorial serif.
 * Used mostly italic for the name and section titles.
 * Exposed as `--font-serif` (kept as the CSS variable Tailwind reads).
 */
export const playfair = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

/**
 * Body / UI / labels — DM Sans. Clean, geometric, gets out of the way.
 */
export const inter = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "800"],
  variable: "--font-inter",
});
