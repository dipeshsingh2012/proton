const e = {
  // Hiljhil Brand Espresso Tones
  coffee: {
    50: "#f7f4f2",
    100: "#ede6e1",
    200: "#daccc3",
    300: "#c1aba0",
    400: "#a38475",
    500: "#89695a",
    600: "#6f5244",
    700: "#583f34",
    800: "#422f27",
    900: "#2c1e19",
    950: "#1a110e"
  },
  // Warm Amber & Golden Crema Accents
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  // Cream & Milk Foam Neutral Surfaces
  cream: {
    50: "#fdfbf7",
    100: "#faf6ee",
    200: "#f4ede0",
    300: "#ece1ce",
    400: "#dfcfb6"
  },
  // Modern Neutral Slate (Structure & Borders)
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  // Semantic Status Tones
  status: {
    success: {
      light: "#ecfdf5",
      main: "#10b981",
      dark: "#047857",
      text: "#065f46",
      border: "#a7f3d0"
    },
    warning: {
      light: "#fffbeb",
      main: "#f59e0b",
      dark: "#b45309",
      text: "#92400e",
      border: "#fde68a"
    },
    error: {
      light: "#fef2f2",
      main: "#ef4444",
      dark: "#b91c1c",
      text: "#991b1b",
      border: "#fecaca"
    },
    info: {
      light: "#eff6ff",
      main: "#3b82f6",
      dark: "#1d4ed8",
      text: "#1e40af",
      border: "#bfdbfe"
    }
  }
}, f = {
  fonts: {
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    display: '"Playfair Display", Georgia, Cambria, "Times New Roman", Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
  },
  sizes: {
    xs: { fontSize: "0.75rem", lineHeight: "1rem" },
    // 12px
    sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
    // 14px
    base: { fontSize: "1rem", lineHeight: "1.5rem" },
    // 16px
    lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
    // 18px
    xl: { fontSize: "1.25rem", lineHeight: "1.75rem" },
    // 20px
    "2xl": { fontSize: "1.5rem", lineHeight: "2rem" },
    // 24px
    "3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
    // 30px
    "4xl": { fontSize: "2.25rem", lineHeight: "2.5rem" },
    // 36px
    "5xl": { fontSize: "3rem", lineHeight: "1" }
    // 48px
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  }
}, a = {
  0: "0px",
  1: "4px",
  1.5: "6px",
  2: "8px",
  2.5: "10px",
  3: "12px",
  3.5: "14px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  12: "48px",
  14: "56px",
  16: "64px",
  20: "80px"
}, x = {
  none: "0px",
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "18px",
  "2xl": "24px",
  "3xl": "32px",
  full: "9999px"
}, p = {
  none: "none",
  xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
  warmGlow: "0 4px 20px -2px rgba(217, 119, 6, 0.2)"
}, r = {
  colors: e,
  typography: f,
  spacing: a,
  radii: x,
  shadows: p
};
export {
  e as colors,
  r as default,
  x as radii,
  p as shadows,
  a as spacing,
  r as tokens,
  f as typography
};
