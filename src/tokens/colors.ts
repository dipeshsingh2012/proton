export const colors = {
  // Hiljhil Brand Espresso Tones
  coffee: {
    50: '#f7f4f2',
    100: '#ede6e1',
    200: '#daccc3',
    300: '#c1aba0',
    400: '#a38475',
    500: '#89695a',
    600: '#6f5244',
    700: '#583f34',
    800: '#422f27',
    900: '#2c1e19',
    950: '#1a110e',
  },

  // Warm Amber & Golden Crema Accents
  amber: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },

  // Cream & Milk Foam Neutral Surfaces
  cream: {
    50: '#fdfbf7',
    100: '#faf6ee',
    200: '#f4ede0',
    300: '#ece1ce',
    400: '#dfcfb6',
  },

  // Modern Neutral Slate (Structure & Borders)
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },

  // Semantic Status Tones
  status: {
    success: {
      light: '#ecfdf5',
      main: '#10b981',
      dark: '#047857',
      text: '#065f46',
      border: '#a7f3d0',
    },
    warning: {
      light: '#fffbeb',
      main: '#f59e0b',
      dark: '#b45309',
      text: '#92400e',
      border: '#fde68a',
    },
    error: {
      light: '#fef2f2',
      main: '#ef4444',
      dark: '#b91c1c',
      text: '#991b1b',
      border: '#fecaca',
    },
    info: {
      light: '#eff6ff',
      main: '#3b82f6',
      dark: '#1d4ed8',
      text: '#1e40af',
      border: '#bfdbfe',
    },
  },
} as const;

export type Colors = typeof colors;
