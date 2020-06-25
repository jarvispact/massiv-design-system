import React from 'react';
import { ColorProps, MarginProps, PaddingProps, WidthProps, HeightProps, PositionProps, OverflowProps, DisplayProps, FontProps, BorderProps, BoxShadowProps, FlexProps, GridProps } from '../config';
export declare type BoxProps = ColorProps & MarginProps & PaddingProps & WidthProps & HeightProps & PositionProps & OverflowProps & DisplayProps & FontProps & BorderProps & BoxShadowProps & FlexProps & GridProps & {
    as?: React.ElementType;
    children?: React.ReactNode;
    [x: string]: unknown;
};
export declare const Box: React.FC<BoxProps>;
