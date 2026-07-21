import type { Config } from "tailwindcss";

/**
 * Design system — midnight · cloud · teal · ember (the reference-site palette).
 * The historical token names are kept so every page keeps compiling, but they
 * now resolve to the new palette: `signature` is Midnight #1E2D40, `paper` is
 * Cloud #F7F8FA, `amber` is Teal #1A8B8B (labels/links), `amber-bright` is
 * Ember #F0684C (fills/CTAs). Do NOT introduce colors outside this set.
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
        // Raw tokens (reference-site palette behind the legacy names)
        ink: "#2C2C2C", // Graphite — primary text
        signature: "#1E2D40", // Midnight — dark surfaces, headings, active tabs
        "blue-lift": "#1A8B8B", // Teal — interactive/links
        paper: "#F7F8FA", // Cloud — page background
        amber: "#1A8B8B", // Teal accent for TEXT/labels/rules
        "amber-bright": "#F0684C", // Ember accent for FILLS/icons/CTAs
        ember: "#F0684C", // Ember by its own name (Operations accent)
        teal: "#1A8B8B", // Teal by its own name (Analytics accent)
        body: "#64748B", // Body text — muted slate
        hairline: "#E2E6EB", // Border — quiet hairlines

        // Semantic aliases
        background: "#F7F8FA",
        foreground: "#2C2C2C",
        primary: {
          DEFAULT: "#1E2D40",
          foreground: "#F7F8FA",
        },
        link: "#1A8B8B",
        accent: {
          DEFAULT: "#F0684C",
          foreground: "#FFFFFF",
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
