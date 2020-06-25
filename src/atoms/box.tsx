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

export type BoxProps = ColorProps &
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

export const Box: React.FC<BoxProps> = styled.div.withConfig({
    shouldForwardProp: shouldForwardProp(),
})`
    ${buildCss<WithTheme<BoxProps>>(propertyConfigList)}
`;
