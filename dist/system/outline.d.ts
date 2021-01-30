import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp, ResponsiveThemeProp } from '../utils/types';
export declare type OutlineProps<T extends Theme> = {
    outline?: ResponsiveProp;
    outlineColor?: ResponsiveThemeProp<T, 'color'>;
};
export declare const colorConfig: CssPropertyConfig[];
