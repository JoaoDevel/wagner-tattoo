/**
 * Espaciado y contenedores reutilizables en toda la landing.
 */
export const spacing = {
  section: {
    y: "clamp(4rem, 10vh, 8rem)",
    x: "clamp(1rem, 4vw, 3rem)",
  },
  container: {
    maxWidth: "90rem",
    paddingX: "clamp(1.25rem, 5vw, 3rem)",
  },
  navbar: {
    height: "4.5rem",
    heightMobile: "4rem",
  },
  gap: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
} as const;

export type Spacing = typeof spacing;
