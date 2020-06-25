import React from 'react';
import { styled, WithTheme } from '../theme';
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
import { buildCss } from '../utils/build-css';
import { shouldForwardProp } from '../utils';

type Props = ColorProps &
    MarginProps &
    PaddingProps &
    PositionProps &
    OverflowProps &
    DisplayProps &
    FontProps &
    BorderProps & {
        as?: React.ElementType;
        loading?: boolean;
        children?: React.ReactNode;
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

export const Icon: React.FC<Props> = styled.i
    .withConfig({ shouldForwardProp: shouldForwardProp() })
    .attrs((props) => ({ className: props.theme.icon.className }))`
    ${buildCss<WithTheme<Props>>(propertyConfigList)}
`;
