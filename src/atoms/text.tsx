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
} from '../config';

export type TextProps = ColorProps &
    MarginProps &
    PaddingProps &
    PositionProps &
    OverflowProps &
    DisplayProps &
    FontProps &
    BorderProps & {
        as?: React.ElementType;
        children?: React.ReactNode;
        inline?: boolean;
        [x: string]: unknown;
    };

const propertyConfigList = [
    ...colorConfig,
    ...marginConfig,
    ...paddingConfig,
    ...positionConfig,
    ...overflowConfig,
    ...displayConfig,
    ...fontConfig,
    ...borderConfig,
];

export const Text: React.FC<TextProps> = styled.p.withConfig({
    shouldForwardProp: shouldForwardProp(),
})`
    ${buildCss<WithTheme<TextProps>>(propertyConfigList)}
`;
