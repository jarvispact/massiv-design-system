import React from 'react';
import { ColorProps, MarginProps, PaddingProps, WidthProps, HeightProps, PositionProps, OverflowProps, DisplayProps, FontProps, BorderProps, BoxShadowProps, FlexProps, GridProps } from '../config';
import { ButtonVariant } from './button';
declare type Props = ColorProps & MarginProps & PaddingProps & WidthProps & HeightProps & PositionProps & OverflowProps & DisplayProps & FontProps & BorderProps & BoxShadowProps & FlexProps & GridProps & {
    as?: React.ElementType;
    children?: React.ReactNode;
    variant?: ButtonVariant;
    disabled?: boolean;
    [x: string]: unknown;
};
export declare const GhostButton: React.FC<Props>;
export {};
