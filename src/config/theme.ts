// TypeScript mirror of CSS design tokens for use in JS contexts
// The source of truth is globals.css — keep these in sync when rebranding

export const themeTokens = {
  primary: {
    50: "#f0f4f8",
    100: "#d9e2ec",
    200: "#bcccdc",
    300: "#9fb3c8",
    400: "#6e8faa",
    500: "#3e6b89",
    600: "#2a5070",
    700: "#1f3d5a",
    800: "#1b2a4a",
    900: "#121d33",
  },
  foreground: "#1a1a2e",
  muted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f8fafc",
  background: "#ffffff",
} as const;
