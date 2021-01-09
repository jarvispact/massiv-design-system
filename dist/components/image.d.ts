import React from 'react';
import { Theme } from '../theme/default-theme';
import { ResponsiveThemeProp } from '../utils/types';
import { BoxProps } from './box';
declare type Props = BoxProps<Theme, HTMLImageElement> & {
    cssWidth?: ResponsiveThemeProp<Theme, 'width'>;
    cssHeight?: ResponsiveThemeProp<Theme, 'height'>;
};
export declare const Image: React.FC<Props>;
export {};
