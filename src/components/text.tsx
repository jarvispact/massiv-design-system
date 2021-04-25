import { css } from '@emotion/css';
import React from 'react';
import { useTheme } from '../theme-provider';

export type TextElement = 'div' | 'span' | 'p' | 'label' | 'a';

export type TextProps = React.HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement | HTMLAnchorElement> & {
    element?: TextElement;
    children: React.ReactNode;
    [x: string]: unknown;
};

export const Text = ({ element = 'p', children, ...props }: TextProps) => {
    const { theme } = useTheme();
    const className = css({ fontFamily: theme.fontFamily.sans });
    return React.createElement(element, { ...props, className }, children);
};
