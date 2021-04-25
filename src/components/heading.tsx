import { css, cx } from '@emotion/css';
import React from 'react';
import { Theme } from '../default-theme';
import { useTheme } from '../theme-provider';
import { omit } from '../utils/omit';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const stylingProps = ['fontFamily', 'fontWeight', 'lineHeight', 'letterSpacing'];

type LiteralUnion<T extends U, U = string> = T | (U & { __literal_union__?: never });
type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;

export type ResponsiveProp<T extends string = string> = LiteralUnion<T> | Array<LiteralUnion<T>>;
export type ResponsiveThemeProp<T extends Theme, K extends keyof T> = ResponsiveProp<UnpackThemeScope<T, K>>;

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    element?: HeadingElement;
    fontFamily?: ResponsiveThemeProp<Theme, 'fontFamily'>;
    fontWeight?: ResponsiveThemeProp<Theme, 'fontWeight'>;
    lineHeight?: ResponsiveThemeProp<Theme, 'lineHeight'>;
    letterSpacing?: ResponsiveThemeProp<Theme, 'letterSpacing'>;
    children: React.ReactNode;
    [x: string]: unknown;
};

const getValueFromThemeSectionOrFallbackToProp = <T extends Theme = Theme, K extends keyof T = keyof Theme>(prop: unknown, theme: T, themeKey: K, idx = 0) => {
    if (!prop) return undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!Array.isArray(prop)) return theme[themeKey][prop] || prop;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return theme[themeKey][prop[idx]] || prop[idx];
};

export const Heading = ({ element = 'h1', children, ...props }: HeadingProps) => {
    const { theme } = useTheme();
    const defaultStyle = css({ fontFamily: theme.fontFamily.serif });
    // const stylesFromProps = css({
    //     fontFamily: props.fontFamily ? theme.fontFamily[props.fontFamily as FontFamilyKey] || props.fontFamily : undefined,
    //     fontWeight: props.fontWeight ? theme.fontWeight[props.fontWeight as FontWeightKey] || props.fontWeight : undefined,
    //     // fontWeight: 'bold' as React.CSSProperties['fontWeight'],
    // });
    const stylesFromProps = css({
        fontFamily: getValueFromThemeSectionOrFallbackToProp(props.fontFamily, theme, 'fontFamily'),
        fontWeight: getValueFromThemeSectionOrFallbackToProp(props.fontWeight, theme, 'fontWeight'),
        lineHeight: getValueFromThemeSectionOrFallbackToProp(props.lineHeight, theme, 'lineHeight'),
        letterSpacing: getValueFromThemeSectionOrFallbackToProp(props.letterSpacing, theme, 'letterSpacing'),
        [`@media(min-width: ${theme.breakpoint.xs})`]: {
            fontFamily: getValueFromThemeSectionOrFallbackToProp(props.fontFamily, theme, 'fontFamily', 1),
            fontWeight: getValueFromThemeSectionOrFallbackToProp(props.fontWeight, theme, 'fontWeight', 1),
            lineHeight: getValueFromThemeSectionOrFallbackToProp(props.lineHeight, theme, 'lineHeight', 1),
            letterSpacing: getValueFromThemeSectionOrFallbackToProp(props.letterSpacing, theme, 'letterSpacing', 1),
        },
        [`@media(min-width: ${theme.breakpoint.s})`]: {
            fontFamily: getValueFromThemeSectionOrFallbackToProp(props.fontFamily, theme, 'fontFamily', 2),
            fontWeight: getValueFromThemeSectionOrFallbackToProp(props.fontWeight, theme, 'fontWeight', 2),
            lineHeight: getValueFromThemeSectionOrFallbackToProp(props.lineHeight, theme, 'lineHeight', 2),
            letterSpacing: getValueFromThemeSectionOrFallbackToProp(props.letterSpacing, theme, 'letterSpacing', 2),
        },
        [`@media(min-width: ${theme.breakpoint.m})`]: {
            fontFamily: getValueFromThemeSectionOrFallbackToProp(props.fontFamily, theme, 'fontFamily', 3),
            fontWeight: getValueFromThemeSectionOrFallbackToProp(props.fontWeight, theme, 'fontWeight', 3),
            lineHeight: getValueFromThemeSectionOrFallbackToProp(props.lineHeight, theme, 'lineHeight', 3),
            letterSpacing: getValueFromThemeSectionOrFallbackToProp(props.letterSpacing, theme, 'letterSpacing', 3),
        },
    });

    const className = cx(defaultStyle, stylesFromProps, props.className);
    return React.createElement(element, { ...omit(stylingProps, props), className }, children);
};
