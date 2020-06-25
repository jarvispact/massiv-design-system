import React from 'react';
import { ColorProps, MarginProps, PaddingProps, PositionProps, OverflowProps, DisplayProps, FontProps, BorderProps } from '../config';
declare type Props = ColorProps & MarginProps & PaddingProps & PositionProps & OverflowProps & DisplayProps & FontProps & BorderProps & {
    as?: React.ElementType;
    loading?: boolean;
    children?: React.ReactNode;
    [x: string]: unknown;
};
export declare const Icon: React.FC<Props>;
export {};
