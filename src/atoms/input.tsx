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
        name: string;
        value?: unknown;
        onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
        as?: React.ElementType;
        children?: React.ReactNode;
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

export const Input: React.FC<Props> = styled.input.withConfig({
    shouldForwardProp: shouldForwardProp(),
})`
    cursor: ${(props) => props.disabled && 'not-allowed'};
    opacity: ${(props) => props.disabled && '0.5'};
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    border-color: white;
    background-color: white;
    color: ${(props) => props.theme.color.gray['900']};
    padding: ${(props) => props.theme.spacing.m};
    ${buildCss<WithTheme<Props>>(propertyConfigList)}
`;
