import React from 'react';
import { protonMuiTheme } from './muiTheme';
export interface ProtonThemeProviderProps {
    children: React.ReactNode;
    theme?: typeof protonMuiTheme;
}
/**
 * Wraps your application or fragment in the Proton Design System theme.
 * Can be swapped to another provider (e.g. Radix or custom) without modifying fragment code.
 */
export declare const ProtonThemeProvider: React.FC<ProtonThemeProviderProps>;
export default ProtonThemeProvider;
