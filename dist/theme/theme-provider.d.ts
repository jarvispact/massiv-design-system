import React from 'react';
import { Theme } from './default-theme';
declare type Ctx<T extends Theme> = {
    theme: T;
    setTheme: React.Dispatch<React.SetStateAction<T>>;
};
export declare const ThemeContext: React.Context<Ctx<{
    breakpoint: {
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
    color: {
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
        error50: string;
        error100: string;
        error200: string;
        error300: string;
        error400: string;
        error500: string;
        error600: string;
        error700: string;
        error800: string;
        error900: string;
        warning50: string;
        warning100: string;
        warning200: string;
        warning300: string;
        warning400: string;
        warning500: string;
        warning600: string;
        warning700: string;
        warning800: string;
        warning900: string;
        success50: string;
        success100: string;
        success200: string;
        success300: string;
        success400: string;
        success500: string;
        success600: string;
        success700: string;
        success800: string;
        success900: string;
        primary50: string;
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary900: string;
        secondary50: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
    };
    spacing: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    width: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    height: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontFamily: {
        sans: string;
        serif: string;
        mono: string;
    };
    fontSize: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    fontWeight: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    lineHeight: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    letterSpacing: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
    };
    radii: {
        s: string;
        m: string;
        l: string;
        xl: string;
        circle: string;
    };
    shadow: {
        s: string;
        m: string;
        l: string;
    };
    zIndex: {
        '0': number;
        '10': number;
        '20': number;
        '30': number;
        '40': number;
        '50': number;
    };
    components: {
        Heading: (variant?: import("..").HeadingVariant | undefined) => string;
        Text: (variant?: import("..").TextVariant | undefined) => string;
    };
}>>;
declare type Props<T extends Theme> = {
    theme: T;
    children: React.ReactNode;
};
export declare const ThemeProvider: <T extends {
    breakpoint: {
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
    color: {
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
        error50: string;
        error100: string;
        error200: string;
        error300: string;
        error400: string;
        error500: string;
        error600: string;
        error700: string;
        error800: string;
        error900: string;
        warning50: string;
        warning100: string;
        warning200: string;
        warning300: string;
        warning400: string;
        warning500: string;
        warning600: string;
        warning700: string;
        warning800: string;
        warning900: string;
        success50: string;
        success100: string;
        success200: string;
        success300: string;
        success400: string;
        success500: string;
        success600: string;
        success700: string;
        success800: string;
        success900: string;
        primary50: string;
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary900: string;
        secondary50: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
    };
    spacing: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    width: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    height: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontFamily: {
        sans: string;
        serif: string;
        mono: string;
    };
    fontSize: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    fontWeight: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    lineHeight: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    letterSpacing: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
    };
    radii: {
        s: string;
        m: string;
        l: string;
        xl: string;
        circle: string;
    };
    shadow: {
        s: string;
        m: string;
        l: string;
    };
    zIndex: {
        '0': number;
        '10': number;
        '20': number;
        '30': number;
        '40': number;
        '50': number;
    };
    components: {
        Heading: (variant?: import("..").HeadingVariant | undefined) => string;
        Text: (variant?: import("..").TextVariant | undefined) => string;
    };
}>({ theme, children }: Props<T>) => JSX.Element;
export declare const useTheme: <T extends {
    breakpoint: {
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
    color: {
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        gray600: string;
        gray700: string;
        gray800: string;
        gray900: string;
        error50: string;
        error100: string;
        error200: string;
        error300: string;
        error400: string;
        error500: string;
        error600: string;
        error700: string;
        error800: string;
        error900: string;
        warning50: string;
        warning100: string;
        warning200: string;
        warning300: string;
        warning400: string;
        warning500: string;
        warning600: string;
        warning700: string;
        warning800: string;
        warning900: string;
        success50: string;
        success100: string;
        success200: string;
        success300: string;
        success400: string;
        success500: string;
        success600: string;
        success700: string;
        success800: string;
        success900: string;
        primary50: string;
        primary100: string;
        primary200: string;
        primary300: string;
        primary400: string;
        primary500: string;
        primary600: string;
        primary700: string;
        primary800: string;
        primary900: string;
        secondary50: string;
        secondary100: string;
        secondary200: string;
        secondary300: string;
        secondary400: string;
        secondary500: string;
        secondary600: string;
        secondary700: string;
        secondary800: string;
        secondary900: string;
    };
    spacing: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    width: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    height: {
        xxxs: string;
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontFamily: {
        sans: string;
        serif: string;
        mono: string;
    };
    fontSize: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    fontWeight: {
        xxs: string;
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    lineHeight: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
    };
    letterSpacing: {
        xs: string;
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
    };
    radii: {
        s: string;
        m: string;
        l: string;
        xl: string;
        circle: string;
    };
    shadow: {
        s: string;
        m: string;
        l: string;
    };
    zIndex: {
        '0': number;
        '10': number;
        '20': number;
        '30': number;
        '40': number;
        '50': number;
    };
    components: {
        Heading: (variant?: import("..").HeadingVariant | undefined) => string;
        Text: (variant?: import("..").TextVariant | undefined) => string;
    };
}>() => Ctx<T>;
export {};
