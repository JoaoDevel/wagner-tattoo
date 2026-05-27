/**
 * Paleta central del estudio. Edita aquí para cambiar el tema global.
 */
export const colors = {
  background: "#000000",
  foreground: "#ffffff",
  muted: "#a3a3a3",
  mutedForeground: "#737373",
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayStrong: "rgba(0, 0, 0, 0.72)",
  border: "#ffffff",
  borderMuted: "rgba(255, 255, 255, 0.35)",
  accent: "#ffffff",
  accentForeground: "#000000",
  navbarScrolled: "rgba(0, 0, 0, 0.65)",
} as const;

export type Colors = typeof colors;
