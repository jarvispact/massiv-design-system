import React from 'react';
import { ResponsiveProp } from '../types';
import { BoxProps } from '../atoms';
declare type Props = BoxProps & {
    spacing?: ResponsiveProp;
    inline?: boolean;
};
export declare const Stack: React.FC<Props>;
export {};
