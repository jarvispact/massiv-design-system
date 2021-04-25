import { css, cx } from '@emotion/css';
import React from 'react';
import { Theme } from '../default-theme';
import { useTheme } from '../theme-provider';
import { omit } from '../utils/omit';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const stylingProps = ['fontFamily', 'fontWeight', 'lineHeight', 'letterSpacing'];
type FontFamilyKey = keyof Theme['fontFamily'];
type FontWeightKey = keyof Theme['fontWeight'];
type LineHeightKey = keyof Theme['lineHeight'];
type LetterSpacingKey = keyof Theme['letterSpacing'];
type LiteralUnion<T extends U, U = string> = T | (U & { __literal_union__?: never });

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
    element?: HeadingElement;
    fontFamily?: LiteralUnion<FontFamilyKey>;
    fontWeight?: LiteralUnion<FontWeightKey>;
    lineHeight?: LiteralUnion<LineHeightKey>;
    letterSpacing?: LiteralUnion<LetterSpacingKey>;
    children: React.ReactNode;
    [x: string]: unknown;
};

const getValueFromThemeSectionOrFallbackToProp = <T extends Theme = Theme, K extends keyof T = keyof Theme>(prop: unknown, theme: T, themeKey: K) => {
    if (!prop) return undefined;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return theme[themeKey][prop] || prop;
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
        [`@media(min-width: ${theme.breakpoint.s})`]: {
            letterSpacing: '0.1em',
        },
    });

    const className = cx(defaultStyle, stylesFromProps, props.className);
    return React.createElement(element, { ...omit(stylingProps, props), className }, children);
};
