import { cx } from '@emotion/css';
import React from 'react';
import { Theme } from '../theme/default-theme';
import { typographySystemDef, TypographyObj } from '../system/typography';
import { omit } from '../utils/omit';
import { useCSS } from '../hooks/use-css';
import { HTMLAttributesWithoutColor } from '../utils/types';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const omitProps = Object.keys(typographySystemDef);

export type HeadingProps<T extends Theme = Theme> = HTMLAttributesWithoutColor<HTMLHeadingElement> &
    TypographyObj<T> & {
        as?: HeadingElement;
        children: React.ReactNode;
        [x: string]: unknown;
    };

export const Heading = <T extends Theme>({ as = 'h1', children, className, ...props }: HeadingProps<T>) => {
    const { css, theme } = useCSS<T>();
    const defaultStyle = css({ fontFamily: theme.fontFamily.serif });
    const dynamicStyle = css(props);
    const newClassName = cx(defaultStyle, dynamicStyle, className);
    return React.createElement(as, { ...omit(omitProps, props), className: newClassName }, children);
};

export const getHeadingWithTheme = <T extends Theme>() => Heading as React.FC<HeadingProps<T>>;
