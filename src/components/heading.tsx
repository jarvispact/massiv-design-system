import { cx } from '@emotion/css';
import React from 'react';
import { Theme } from '../theme/default-theme';
import { typographySystemDef, TypographySystemObj } from '../system/typography';
import { omit } from '../utils/omit';
import { useCss } from '../hooks/use-css';
import { HTMLAttributesWithoutColor } from '../utils/types';
import { HeadingVariant } from '../system/variant';
import { ColorSystemObj, colorSystemDef } from '../system/color';

const systemDefinitions = {
    ...typographySystemDef,
    ...colorSystemDef,
};

type SystemObj<T extends Theme> = TypographySystemObj<T> & ColorSystemObj<T>;

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const omitProps = Object.keys(systemDefinitions);

export type HeadingProps<T extends Theme = Theme> = HTMLAttributesWithoutColor<HTMLHeadingElement> &
    SystemObj<T> & {
        as?: HeadingElement;
        variant?: HeadingVariant;
        children: React.ReactNode;
        [x: string]: unknown;
    };

export const Heading = <T extends Theme>({ as = 'h1', variant, children, className, ...props }: HeadingProps<T>) => {
    const { css, theme } = useCss<T>();
    const defaultStyle = theme.components.Heading(variant);
    const dynamicStyle = css(props, systemDefinitions);
    const newClassName = cx(defaultStyle, dynamicStyle, className);
    return React.createElement(as, { ...omit(omitProps, props), className: newClassName }, children);
};
