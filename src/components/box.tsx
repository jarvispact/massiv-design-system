import React from 'react';
import { styled } from '../styled';
import { borderConfig, BorderProps } from '../system/border';
import { colorConfig, ColorProps } from '../system/color';
import { displayConfig, DisplayProps } from '../system/display';
import { flexConfig, FlexProps } from '../system/flex';
import { FontProps, fontConfig } from '../system/font';
import { GridProps, gridConfig } from '../system/grid';
import { HeightProps, heightConfig } from '../system/height';
import { marginConfig, MarginProps } from '../system/margin';
import { OutlineProps } from '../system/outline';
import { overflowConfig, OverflowProps } from '../system/overflow';
import { paddingConfig, PaddingProps } from '../system/padding';
import { positionConfig, PositionProps } from '../system/position';
import { ShadowProps, shadowConfig } from '../system/shadow';
import { WidthProps, widthConfig } from '../system/width';
import { Theme } from '../theme/default-theme';
import { buildCss, CssPropertyConfig } from '../utils/build-css';
import { createShouldForwardProp, shouldForwardProp } from '../utils/should-forward-prop';

export type BoxSystemProps<T extends Theme> = ColorProps<T> &
    BorderProps<T> &
    PaddingProps<T> &
    MarginProps<T> &
    FontProps<T> &
    ShadowProps<T> &
    GridProps<T> &
    WidthProps<T> &
    HeightProps<T> &
    OutlineProps<T> &
    FlexProps &
    PositionProps &
    DisplayProps &
    OverflowProps;

type HTMLAttributesWithoutColor<HTMLElem = HTMLDivElement> = Omit<React.HTMLAttributes<HTMLElem>, 'color'>;

export type BoxProps<T extends Theme = Theme, HTMLElem = HTMLDivElement> = HTMLAttributesWithoutColor<HTMLElem> &
    BoxSystemProps<T> & {
        as?: React.ElementType;
        children?: React.ReactNode;
        [x: string]: unknown;
    };

export const boxConfig = [
    ...colorConfig,
    ...borderConfig,
    ...paddingConfig,
    ...marginConfig,
    ...flexConfig,
    ...positionConfig,
    ...displayConfig,
    ...overflowConfig,
    ...fontConfig,
    ...shadowConfig,
    ...gridConfig,
    ...widthConfig,
    ...heightConfig,
];

type CreateBoxOptions = {
    forwardPropertyBlacklist?: Array<string>;
    systemConfig?: CssPropertyConfig[];
};

export const createBox = (options: CreateBoxOptions = {}) => styled.div.withConfig({
    shouldForwardProp: options.forwardPropertyBlacklist ? createShouldForwardProp(options.forwardPropertyBlacklist) : shouldForwardProp,
})`
    ${buildCss(options.systemConfig || boxConfig)}
`;

export const Box: React.FC<BoxProps> = createBox();
