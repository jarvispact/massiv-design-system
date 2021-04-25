import { css } from '@emotion/css';
import React from 'react';
import { useTheme } from '../theme-provider';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type BodyElement = 'p' | 'span' | 'label';
type TypographyElement = HeadingElement | BodyElement;

type Props = {
    element?: TypographyElement;
    children: React.ReactNode;
    [x: string]: unknown;
};

export const Typography = ({ element = 'p', children, ...props }: Props) => {
    const { theme } = useTheme();
    const className = css({ fontFamily: theme.fontFamily.sans });
    return React.createElement(element, { ...props, className }, children);
};
