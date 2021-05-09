import { cx } from '@emotion/css';
import React from 'react';
import { useCSS } from '../hooks/use-css';
import { TypographyObj, typographySystemDef } from '../system/typography';
import { Theme } from '../theme/default-theme';
import { omit } from '../utils/omit';
import { HTMLAttributesWithoutColor } from '../utils/types';

type TextElement = 'div' | 'span' | 'p' | 'label' | 'a';

type TextHTMLElement = HTMLDivElement | HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement | HTMLAnchorElement;

const omitProps = Object.keys(typographySystemDef);

export type TextProps<T extends Theme = Theme, HTMLElem extends TextHTMLElement = TextHTMLElement> = HTMLAttributesWithoutColor<HTMLElem> &
    TypographyObj<T> & {
        as?: TextElement;
        children: React.ReactNode;
        [x: string]: unknown;
    };

export const Text = <T extends Theme>({ as = 'p', children, className, ...props }: TextProps<T>) => {
    const { css, theme } = useCSS<T>();
    const defaultStyle = css({ fontFamily: theme.fontFamily.sans });
    const dynamicStyle = css(props);
    const newClassName = cx(defaultStyle, dynamicStyle, className);
    return React.createElement(as, { ...omit(omitProps, props), className: newClassName }, children);
};

export const getTextWithTheme = <T extends Theme, HTMLElem extends TextHTMLElement = TextHTMLElement>() => Text as React.FC<TextProps<T, HTMLElem>>;
