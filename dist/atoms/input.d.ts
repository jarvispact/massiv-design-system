import React from 'react';
import { ColorProps, MarginProps, PaddingProps, WidthProps, HeightProps, PositionProps, OverflowProps, DisplayProps, FontProps, BorderProps, BoxShadowProps, FlexProps, GridProps } from '../config';
declare type Props = ColorProps & MarginProps & PaddingProps & WidthProps & HeightProps & PositionProps & OverflowProps & DisplayProps & FontProps & BorderProps & BoxShadowProps & FlexProps & GridProps & {
    name: string;
    value?: unknown;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    as?: React.ElementType;
    children?: React.ReactNode;
    disabled?: boolean;
    [x: string]: unknown;
};
export declare const Input: React.FC<Props>;
export {};
