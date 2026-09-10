export declare const typography: {
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
export type Typography = typeof typography;
