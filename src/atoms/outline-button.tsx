/* eslint-disable react/prop-types */

import React from 'react';
import { styled } from '../theme/styled';
import { shouldForwardProp } from '../utils';
import { WithTheme } from '../theme';
import { buildCss } from '../utils/build-css';
import {
    colorConfig,
    marginConfig,
    paddingConfig,
    ColorProps,
    MarginProps,
    PaddingProps,
    WidthProps,
    HeightProps,
    widthConfig,
    heightConfig,
    PositionProps,
    positionConfig,
    OverflowProps,
    overflowConfig,
    displayConfig,
    DisplayProps,
    fontConfig,
    FontProps,
    borderConfig,
    BorderProps,
    boxShadowConfig,
    BoxShadowProps,
    FlexProps,
    flexConfig,
    GridProps,
    gridConfig,
} from '../config';
import { ButtonVariant } from './button';

type Props = ColorProps &
    MarginProps &
    PaddingProps &
    WidthProps &
    HeightProps &
    PositionProps &
    OverflowProps &
    DisplayProps &
    FontProps &
    BorderProps &
    BoxShadowProps &
    FlexProps &
    GridProps & {
        as?: React.ElementType;
        children?: React.ReactNode;
        variant?: ButtonVariant;
        disabled?: boolean;
        [x: string]: unknown;
    };

const propertyConfigList = [
    ...colorConfig,
    ...marginConfig,
    ...paddingConfig,
    ...widthConfig,
    ...heightConfig,
    ...positionConfig,
    ...overflowConfig,
    ...displayConfig,
    ...fontConfig,
    ...borderConfig,
    ...boxShadowConfig,
    ...flexConfig,
    ...gridConfig,
];

const getCursor = (props: Props) => {
    if (props.disabled) return 'not-allowed';
    return 'pointer';
};

const getVariantProps = (props: WithTheme<Props>) => {
    if (props.variant === 'secondary') {
        return `
            border-color: ${props.theme.color.secondary['500']};
            color: ${props.theme.color.secondary['500']};
        `;
    }

    if (props.variant === 'error') {
        return `
            border-color: ${props.theme.color.error['500']};
            color: ${props.theme.color.error['500']};
        `;
    }

    if (props.variant === 'warning') {
        return `
            border-color: ${props.theme.color.warning['500']};
            color: ${props.theme.color.warning['500']};
        `;
    }

    if (props.variant === 'success') {
        return `
            border-color: ${props.theme.color.success['500']};
            color: ${props.theme.color.success['500']};
        `;
    }

    return `
        border-color: ${props.theme.color.primary['500']};
        color: ${props.theme.color.primary['500']};
    `;
};

export const OutlineButton: React.FC<Props> = styled.button.withConfig({
    shouldForwardProp: shouldForwardProp(),
})`
    cursor: ${getCursor};
    opacity: ${(props) => props.disabled && '0.5'};
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    background-color: transparent;
    padding: ${(props) => props.theme.spacing.m};
    ${getVariantProps}
    ${buildCss<WithTheme<Props>>(propertyConfigList)}
`;
