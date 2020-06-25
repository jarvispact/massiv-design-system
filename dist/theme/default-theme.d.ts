declare const screen: {
    readonly s: "640px";
    readonly m: "768px";
    readonly l: "1024px";
    readonly xl: "1280px";
    readonly '2xl': "1600px";
    readonly '3xl': "1920px";
};
declare const color: {
    readonly gray: {
        readonly 100: "#f7fafc";
        readonly 200: "#edf2f7";
        readonly 300: "#e2e8f0";
        readonly 400: "#cbd5e0";
        readonly 500: "#a0aec0";
        readonly 600: "#718096";
        readonly 700: "#4a5568";
        readonly 800: "#2d3748";
        readonly 900: "#1a202c";
    };
    readonly error: {
        readonly 100: "#fff5f5";
        readonly 200: "#fed7d7";
        readonly 300: "#feb2b2";
        readonly 400: "#fc8181";
        readonly 500: "#f56565";
        readonly 600: "#e53e3e";
        readonly 700: "#c53030";
        readonly 800: "#9b2c2c";
        readonly 900: "#742a2a";
    };
    readonly warning: {
        readonly 100: "#fffff0";
        readonly 200: "#fefcbf";
        readonly 300: "#faf089";
        readonly 400: "#f6e05e";
        readonly 500: "#ecc94b";
        readonly 600: "#d69e2e";
        readonly 700: "#b7791f";
        readonly 800: "#975a16";
        readonly 900: "#744210";
    };
    readonly success: {
        readonly 100: "#f0fff4";
        readonly 200: "#c6f6d5";
        readonly 300: "#9ae6b4";
        readonly 400: "#68d391";
        readonly 500: "#48bb78";
        readonly 600: "#38a169";
        readonly 700: "#2f855a";
        readonly 800: "#276749";
        readonly 900: "#22543d";
    };
    readonly primary: {
        readonly 100: "#ebf8ff";
        readonly 200: "#bee3f8";
        readonly 300: "#90cdf4";
        readonly 400: "#63b3ed";
        readonly 500: "#4299e1";
        readonly 600: "#3182ce";
        readonly 700: "#2b6cb0";
        readonly 800: "#2c5282";
        readonly 900: "#2a4365";
    };
    readonly secondary: {
        readonly 100: "#fff5f7";
        readonly 200: "#fed7e2";
        readonly 300: "#fbb6ce";
        readonly 400: "#f687b3";
        readonly 500: "#ed64a6";
        readonly 600: "#d53f8c";
        readonly 700: "#b83280";
        readonly 800: "#97266d";
        readonly 900: "#702459";
    };
};
declare const spacing: {
    readonly xs: "0.15rem";
    readonly s: "0.25rem";
    readonly m: "0.5rem";
    readonly l: "0.75rem";
    readonly xl: "1rem";
    readonly '2xl': "2rem";
    readonly '3xl': "3rem";
    readonly '4xl': "4rem";
    readonly '5xl': "5rem";
    readonly '6xl': "6rem";
};
declare const boxShadow: {
    readonly xs: "0 0 0 1px rgba(0, 0, 0, 0.05)";
    readonly s: "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
    readonly m: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    readonly l: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
    readonly xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
    readonly '2xl': "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
    readonly inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)";
    readonly outline: "0 0 0 3px rgba(66, 153, 225, 0.5)";
};
declare const width: {
    readonly '1/2': "50%";
    readonly xs: "0.15rem";
    readonly s: "0.25rem";
    readonly m: "0.5rem";
    readonly l: "0.75rem";
    readonly xl: "1rem";
    readonly '2xl': "2rem";
    readonly '3xl': "3rem";
    readonly '4xl': "4rem";
    readonly '5xl': "5rem";
    readonly '6xl': "6rem";
};
declare const height: {
    readonly '1/2': "50%";
    readonly xs: "0.15rem";
    readonly s: "0.25rem";
    readonly m: "0.5rem";
    readonly l: "0.75rem";
    readonly xl: "1rem";
    readonly '2xl': "2rem";
    readonly '3xl': "3rem";
    readonly '4xl': "4rem";
    readonly '5xl': "5rem";
    readonly '6xl': "6rem";
};
declare const fontFamily: {
    readonly sans: string;
    readonly serif: string;
    readonly mono: string;
};
declare const fontSize: {
    readonly xs: "0.75rem";
    readonly s: "0.875rem";
    readonly m: "1rem";
    readonly l: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '3xl': "1.875rem";
    readonly '4xl': "2.25rem";
    readonly '5xl': "3rem";
    readonly '6xl': "4rem";
};
declare const fontWeight: {
    readonly xxs: "100";
    readonly xs: "200";
    readonly s: "300";
    readonly m: "400";
    readonly l: "500";
    readonly xl: "600";
    readonly '2xl': "700";
    readonly '3xl': "800";
    readonly '4xl': "900";
};
declare const lineHeight: {
    readonly xs: "0.75rem";
    readonly s: "0.875rem";
    readonly m: "1rem";
    readonly l: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '3xl': "1.875rem";
    readonly '4xl': "2.25rem";
    readonly '5xl': "3rem";
    readonly '6xl': "4rem";
};
declare const letterSpacing: {
    readonly tighter: "-0.05em";
    readonly tight: "-0.025em";
    readonly normal: "0";
    readonly wide: "0.025em";
    readonly wider: "0.05em";
    readonly widest: "0.1em";
};
declare const textShadow: {};
declare const radii: {
    readonly s: "2px";
    readonly m: "4px";
    readonly l: "8px";
};
declare const icon: {
    readonly className: "";
};
export declare type Theme = {
    screen: typeof screen;
    color: typeof color;
    spacing: typeof spacing;
    boxShadow: typeof boxShadow;
    width: typeof width;
    height: typeof height;
    fontFamily: typeof fontFamily;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    lineHeight: typeof lineHeight;
    letterSpacing: typeof letterSpacing;
    textShadow: typeof textShadow;
    radii: typeof radii;
    icon: typeof icon;
};
export declare type ThemeScope = keyof Theme;
export declare type WithTheme<T> = T & {
    theme: Theme;
};
export declare const defaultTheme: Theme;
export {};
