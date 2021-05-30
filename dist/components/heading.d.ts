import React from 'react';
import { Theme } from '../theme/default-theme';
import { TypographySystemObj } from '../system/typography';
import { HTMLAttributesWithoutColor } from '../utils/types';
import { HeadingVariant } from '../system/variant';
import { ColorSystemObj } from '../system/color';
declare type SystemObj<T extends Theme> = TypographySystemObj<T> & ColorSystemObj<T>;
declare type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare type HeadingProps<T extends Theme = Theme> = HTMLAttributesWithoutColor<HTMLHeadingElement> & SystemObj<T> & {
    as?: HeadingElement;
    variant?: HeadingVariant;
    children: React.ReactNode;
    [x: string]: unknown;
};
export declare const Heading: <T extends {
    breakpoint: {
        s: string;
        m: string;
        l: string;
        xl: string;
        xxl: string;
        xxxl: string;
    };
    color: {
        background: string;
        heading: string;
        text: string;
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
        px: string;
        '0.5': string;
        '1': string;
        '1.5': string;
        '2': string;
        '2.5': string;
        '3': string;
        '3.5': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '14': string;
        '16': string;
        '20': string;
        '24': string;
        '28': string;
        '32': string;
        '36': string;
        '40': string;
        '44': string;
        '48': string;
        '52': string;
        '56': string;
        '60': string;
        '64': string;
        '72': string;
        '80': string;
        '96': string;
    };
    width: {
        px: string;
        '0.5': string;
        '1': string;
        '1.5': string;
        '2': string;
        '2.5': string;
        '3': string;
        '3.5': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '14': string;
        '16': string;
        '20': string;
        '24': string;
        '28': string;
        '32': string;
        '36': string;
        '40': string;
        '44': string;
        '48': string;
        '52': string;
        '56': string;
        '60': string;
        '64': string;
        '72': string;
        '80': string;
        '96': string;
    };
    height: {
        px: string;
        '0.5': string;
        '1': string;
        '1.5': string;
        '2': string;
        '2.5': string;
        '3': string;
        '3.5': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '14': string;
        '16': string;
        '20': string;
        '24': string;
        '28': string;
        '32': string;
        '36': string;
        '40': string;
        '44': string;
        '48': string;
        '52': string;
        '56': string;
        '60': string;
        '64': string;
        '72': string;
        '80': string;
        '96': string;
    };
    fontFamily: {
        sans: string;
        serif: string;
        mono: string;
    };
    fontSize: {
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
        '0': string;
        '10': string;
        '20': string;
        '30': string;
        '40': string;
        '50': string;
    };
    components: {
        Heading: (variant?: HeadingVariant | undefined) => string;
        Text: (variant?: import("../system/variant").TextVariant | undefined) => string;
    };
}>({ as, variant, children, className, ...props }: HeadingProps<T>) => React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export {};
