import type { Config } from "tailwindcss";

/**
 * Design system — the brand's 7-core color system (navy · ivory · amber).
 * Reference colors semantically (background, foreground, primary, link, accent);
 * the raw token names exist for the rare case a literal hex name reads clearer.
 * Amber splits by use: `amber` (#B45309) for text/labels/rules (AA on paper),
 * `amber-bright` (#D97706) for solid fills / icons / CTAs with dark text on top.
 * Do NOT introduce colors outside this set.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Raw tokens (exact hex from the brand color system — 7 core colors)
        ink: "#111827", // Headline / near-black — TEXT/contrast + dark surfaces
        signature: "#1B3A6B", // Primary navy — the brand heart, deep + calm
        "blue-lift": "#3D6491", // lighter navy — interactive/links only
        paper: "#FAFAF8", // background — soft off-white, never pure white
        amber: "#B45309", // warm accent for TEXT/labels/rules — AA on paper
        "amber-bright": "#D97706", // warm accent for FILLS/icons/CTAs (dark text on top)
        body: "#4B5563", // Body text — muted slate
        hairline: "#E5E7EB", // Border — quiet hairlines

        // Semantic aliases
        background: "#FAFAF8",
        foreground: "#111827",
        primary: {
          DEFAULT: "#1B3A6B",
          foreground: "#FAFAF8",
        },
        link: "#3D6491",
        accent: {
          DEFAULT: "#B45309",
          foreground: "#FAFAF8",
        },
      },
      fontFamily: {
        // Headlines/display carry gravitas + warmth; body carries clarity.
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Tight type scale — ~5 sizes only. Emphasis comes from size + space.
        small: ["0.875rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        h2: ["clamp(1.75rem, 3.5vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h1: ["clamp(2.5rem, 6vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        display: ["clamp(3rem, 8vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      letterSpacing: {
        kicker: "0.18em", // small-caps kickers/labels — slightly open
      },
      maxWidth: {
        prose: "65ch",
        content: "72rem",
      },
      transitionTimingFunction: {
        // ease-out / ease-in-out only. No spring, no bounce.
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        reveal: "700ms",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "hero-rise": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "hero-rise": "hero-rise 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
