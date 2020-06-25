import React from 'react';
import { ColorProps, MarginProps, PaddingProps, PositionProps, OverflowProps, DisplayProps, FontProps, BorderProps } from '../config';
export declare type TextProps = ColorProps & MarginProps & PaddingProps & PositionProps & OverflowProps & DisplayProps & FontProps & BorderProps & {
    as?: React.ElementType;
    children?: React.ReactNode;
    inline?: boolean;
    [x: string]: unknown;
};
export declare const Text: React.FC<TextProps>;
