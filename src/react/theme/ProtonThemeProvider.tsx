import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { protonMuiTheme } from './muiTheme';

export interface ProtonThemeProviderProps {
  children: React.ReactNode;
  theme?: typeof protonMuiTheme;
}

/**
 * Wraps your application or fragment in the Proton Design System theme.
 * Can be swapped to another provider (e.g. Radix or custom) without modifying fragment code.
 */
export const ProtonThemeProvider: React.FC<ProtonThemeProviderProps> = ({
  children,
  theme = protonMuiTheme,
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ProtonThemeProvider;
