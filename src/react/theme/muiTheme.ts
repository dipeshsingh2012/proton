import { createTheme, ThemeOptions } from '@mui/material';
import { colors } from '../../tokens/colors';
import { typography } from '../../tokens/typography';
import { radii } from '../../tokens/radii';

export const protonThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: colors.amber[700],
      light: colors.amber[500],
      dark: colors.amber[900],
      contrastText: '#ffffff',
    },
    secondary: {
      main: colors.coffee[900],
      light: colors.coffee[700],
      dark: colors.coffee[950],
      contrastText: '#ffffff',
    },
    background: {
      default: colors.slate[50],
      paper: '#ffffff',
    },
    text: {
      primary: colors.slate[900],
      secondary: colors.slate[500],
    },
    success: {
      main: colors.status.success.main,
      light: colors.status.success.light,
      dark: colors.status.success.dark,
    },
    warning: {
      main: colors.status.warning.main,
      light: colors.status.warning.light,
      dark: colors.status.warning.dark,
    },
    error: {
      main: colors.status.error.main,
      light: colors.status.error.light,
      dark: colors.status.error.dark,
    },
  },
  typography: {
    fontFamily: typography.fonts.sans,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: parseInt(radii.md, 10),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radii.lg,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: radii['2xl'],
          borderColor: colors.slate[200],
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: radii['2xl'],
        },
      },
    },
  },
};

export const protonMuiTheme = createTheme(protonThemeOptions);
export default protonMuiTheme;
