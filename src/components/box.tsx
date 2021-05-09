import { cx } from '@emotion/css';
import React from 'react';
import { useCSS } from '../hooks/use-css';
import { systemDefinitions, SystemObj } from '../system/system';
import { Theme } from '../theme/default-theme';
import { omit } from '../utils/omit';
import { HTMLAttributesWithoutColor } from '../utils/types';

const omitProps = Object.keys(systemDefinitions);

export type BoxProps<T extends Theme = Theme, HTMLElem extends HTMLDivElement = HTMLDivElement> = HTMLAttributesWithoutColor<HTMLElem> &
    SystemObj<T> & {
        as?: React.ElementType;
        children?: React.ReactNode;
        [x: string]: unknown;
    };

export const Box = <T extends Theme>({ as = 'div', children, className, ...props }: BoxProps<T>) => {
    const { css } = useCSS<T>();
    const dynamicStyle = css(props);
    const newClassName = cx(dynamicStyle, className);
    return React.createElement(as, { ...omit(omitProps, props), className: newClassName }, children);
};

export const getBoxWithTheme = <T extends Theme, HTMLElem extends HTMLDivElement = HTMLDivElement>() => Box as React.FC<BoxProps<T, HTMLElem>>;
