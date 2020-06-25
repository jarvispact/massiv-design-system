import React from 'react';
import { ColorProps, MarginProps, PaddingProps, WidthProps, HeightProps, PositionProps, OverflowProps, DisplayProps, FontProps, BorderProps, BoxShadowProps, FlexProps, GridProps } from '../config';
export declare type ButtonVariant = 'primary' | 'secondary' | 'error' | 'warning' | 'success';
declare type Props = ColorProps & MarginProps & PaddingProps & WidthProps & HeightProps & PositionProps & OverflowProps & DisplayProps & FontProps & BorderProps & BoxShadowProps & FlexProps & GridProps & {
    as?: React.ElementType;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    disabled?: boolean;
    [x: string]: unknown;
};
export declare const Button: React.FC<Props>;
export {};
