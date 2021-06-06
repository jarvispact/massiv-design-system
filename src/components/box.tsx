import { cx } from '@emotion/css';
import React from 'react';
import { useCss } from '../hooks/use-css';
import { allSystemDefinitions, SystemObj } from '../system/system';
import { Theme } from '../theme/default-theme';
import { omit } from '../utils/omit';
import { HTMLAttributesWithoutStyleProps } from '../utils/types';

const omitProps = [...Object.keys(allSystemDefinitions), 'customSelectors'];

export type BoxProps<T extends Theme = Theme, HTMLAttributes = React.HTMLAttributes<HTMLDivElement>> =
    HTMLAttributesWithoutStyleProps<HTMLAttributes> &
        SystemObj<T> & {
            as?: React.ElementType;
            children?: React.ReactNode;
            [x: string]: unknown;
        };

export const Box = React.forwardRef(
    <T extends Theme, HTMLElem = HTMLDivElement>(
        { as = 'div', children, className, ...props }: BoxProps<T>,
        ref: React.ForwardedRef<HTMLElem>,
    ) => {
        const { css } = useCss<T>();
        const dynamicStyle = css(props);
        const newClassName = cx(dynamicStyle, className);
        return React.createElement(as, { ...omit(omitProps, props), className: newClassName, ref }, children);
    },
);

Box.displayName = 'Box';
