import { cx } from '@emotion/css';
import React from 'react';
import { useCss } from '../hooks/use-css';
import { ColorSystemObj, colorSystemDef } from '../system/color';
import { TypographySystemObj, typographySystemDef } from '../system/typography';
import { TextVariant } from '../system/variant';
import { Theme } from '../theme/default-theme';
import { omit } from '../utils/omit';
import { HTMLAttributesWithoutColor } from '../utils/types';

const systemDefinitions = {
    ...typographySystemDef,
    ...colorSystemDef,
};

type SystemObj<T extends Theme> = TypographySystemObj<T> & ColorSystemObj<T>;

type TextHTMLElement = HTMLDivElement | HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement | HTMLAnchorElement;

const omitProps = Object.keys(systemDefinitions);

export type TextProps<T extends Theme = Theme, HTMLElem extends TextHTMLElement = TextHTMLElement> =
    HTMLAttributesWithoutColor<HTMLElem> &
        SystemObj<T> & {
            as?: React.ElementType;
            variant?: TextVariant;
            children: React.ReactNode;
            [x: string]: unknown;
        };

export const Text = <T extends Theme>({ as = 'p', variant, children, className, ...props }: TextProps<T>) => {
    const { css, theme } = useCss<T>();
    const defaultStyle = theme.components.Text(variant);
    const dynamicStyle = css(props, systemDefinitions);
    const newClassName = cx(defaultStyle, dynamicStyle, className);
    return React.createElement(as, { ...omit(omitProps, props), className: newClassName }, children);
};
