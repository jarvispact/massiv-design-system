import { css, cx } from '@emotion/css';
import React from 'react';
import { Theme } from '../theme/default-theme';
import { textSystemConfig, TextSystemProps } from '../system/typography';
import { useTheme } from '../theme/theme-provider';
import { omit } from '../utils/omit';
import { createCssObj } from '../utils/create-css-obj';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const omitProps = textSystemConfig.map((cfg) => cfg.componentProp);

export type HeadingProps<T extends Theme = Theme> = React.HTMLAttributes<HTMLHeadingElement> &
    TextSystemProps<T> & {
        as?: HeadingElement;
        children: React.ReactNode;
        [x: string]: unknown;
    };

export const Heading = ({ as = 'h1', children, ...props }: HeadingProps) => {
    const { theme } = useTheme();
    const defaultStyle = css({ fontFamily: theme.fontFamily.serif });
    const dynamicStyle = css(createCssObj(textSystemConfig, props, theme));
    const className = cx(defaultStyle, dynamicStyle, props.className);
    return React.createElement(as, { ...omit(omitProps, props), className }, children);
};
