/**
 * Familias y escalas tipográficas. Las variables CSS se aplican en layout.tsx.
 */
export const fonts = {
  families: {
    display: "var(--font-display)",
    sans: "var(--font-sans)",
    mono: "var(--font-mono)",
  },
  sizes: {
    nav: "0.625rem",
    caption: "0.6875rem",
    body: "0.875rem",
    headingSm: "clamp(2.5rem, 8vw, 4.5rem)",
    headingMd: "clamp(3rem, 10vw, 6rem)",
    headingLg: "clamp(3.5rem, 12vw, 8.5rem)",
  },
  weights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    black: "800",
  },
  letterSpacing: {
    nav: "0.2em",
    display: "-0.02em",
    wide: "0.15em",
  },
  lineHeights: {
    tight: "0.95",
    snug: "1.1",
    relaxed: "1.65",
  },
} as const;

export type Fonts = typeof fonts;
