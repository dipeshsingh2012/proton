export * from './colors';
export * from './typography';
export * from './spacing';
export * from './radii';
export * from './shadows';
export declare const tokens: {
    readonly colors: {
        readonly coffee: {
            readonly 50: "#f7f4f2";
            readonly 100: "#ede6e1";
            readonly 200: "#daccc3";
            readonly 300: "#c1aba0";
            readonly 400: "#a38475";
            readonly 500: "#89695a";
            readonly 600: "#6f5244";
            readonly 700: "#583f34";
            readonly 800: "#422f27";
            readonly 900: "#2c1e19";
            readonly 950: "#1a110e";
        };
        readonly amber: {
            readonly 50: "#fffbeb";
            readonly 100: "#fef3c7";
            readonly 200: "#fde68a";
            readonly 300: "#fcd34d";
            readonly 400: "#fbbf24";
            readonly 500: "#f59e0b";
            readonly 600: "#d97706";
            readonly 700: "#b45309";
            readonly 800: "#92400e";
            readonly 900: "#78350f";
            readonly 950: "#451a03";
        };
        readonly cream: {
            readonly 50: "#fdfbf7";
            readonly 100: "#faf6ee";
            readonly 200: "#f4ede0";
            readonly 300: "#ece1ce";
            readonly 400: "#dfcfb6";
        };
        readonly slate: {
            readonly 50: "#f8fafc";
            readonly 100: "#f1f5f9";
            readonly 200: "#e2e8f0";
            readonly 300: "#cbd5e1";
            readonly 400: "#94a3b8";
            readonly 500: "#64748b";
            readonly 600: "#475569";
            readonly 700: "#334155";
            readonly 800: "#1e293b";
            readonly 900: "#0f172a";
            readonly 950: "#020617";
        };
        readonly status: {
            readonly success: {
                readonly light: "#ecfdf5";
                readonly main: "#10b981";
                readonly dark: "#047857";
                readonly text: "#065f46";
                readonly border: "#a7f3d0";
            };
            readonly warning: {
                readonly light: "#fffbeb";
                readonly main: "#f59e0b";
                readonly dark: "#b45309";
                readonly text: "#92400e";
                readonly border: "#fde68a";
            };
            readonly error: {
                readonly light: "#fef2f2";
                readonly main: "#ef4444";
                readonly dark: "#b91c1c";
                readonly text: "#991b1b";
                readonly border: "#fecaca";
            };
            readonly info: {
                readonly light: "#eff6ff";
                readonly main: "#3b82f6";
                readonly dark: "#1d4ed8";
                readonly text: "#1e40af";
                readonly border: "#bfdbfe";
            };
        };
    };
    readonly typography: {
        readonly fonts: {
            readonly sans: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif";
            readonly display: "\"Playfair Display\", Georgia, Cambria, \"Times New Roman\", Times, serif";
            readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", monospace";
        };
        readonly sizes: {
            readonly xs: {
                readonly fontSize: "0.75rem";
                readonly lineHeight: "1rem";
            };
            readonly sm: {
                readonly fontSize: "0.875rem";
                readonly lineHeight: "1.25rem";
            };
            readonly base: {
                readonly fontSize: "1rem";
                readonly lineHeight: "1.5rem";
            };
            readonly lg: {
                readonly fontSize: "1.125rem";
                readonly lineHeight: "1.75rem";
            };
            readonly xl: {
                readonly fontSize: "1.25rem";
                readonly lineHeight: "1.75rem";
            };
            readonly '2xl': {
                readonly fontSize: "1.5rem";
                readonly lineHeight: "2rem";
            };
            readonly '3xl': {
                readonly fontSize: "1.875rem";
                readonly lineHeight: "2.25rem";
            };
            readonly '4xl': {
                readonly fontSize: "2.25rem";
                readonly lineHeight: "2.5rem";
            };
            readonly '5xl': {
                readonly fontSize: "3rem";
                readonly lineHeight: "1";
            };
        };
        readonly weights: {
            readonly regular: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
            readonly extrabold: 800;
            readonly black: 900;
        };
    };
    readonly spacing: {
        readonly 0: "0px";
        readonly 1: "4px";
        readonly 1.5: "6px";
        readonly 2: "8px";
        readonly 2.5: "10px";
        readonly 3: "12px";
        readonly 3.5: "14px";
        readonly 4: "16px";
        readonly 5: "20px";
        readonly 6: "24px";
        readonly 7: "28px";
        readonly 8: "32px";
        readonly 9: "36px";
        readonly 10: "40px";
        readonly 12: "48px";
        readonly 14: "56px";
        readonly 16: "64px";
        readonly 20: "80px";
    };
    readonly radii: {
        readonly none: "0px";
        readonly sm: "6px";
        readonly md: "10px";
        readonly lg: "14px";
        readonly xl: "18px";
        readonly '2xl': "24px";
        readonly '3xl': "32px";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly none: "none";
        readonly xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
        readonly sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)";
        readonly md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)";
        readonly lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)";
        readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)";
        readonly warmGlow: "0 4px 20px -2px rgba(217, 119, 6, 0.2)";
    };
};
export type DesignTokens = typeof tokens;
export default tokens;
