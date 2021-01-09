import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';
export declare type ColorProps<T extends Theme> = {
    backgroundColor?: ResponsiveThemeProp<T, 'color'>;
    bg?: ResponsiveThemeProp<T, 'color'>;
    color?: ResponsiveThemeProp<T, 'color'>;
    outlineColor?: ResponsiveThemeProp<T, 'color'>;
};
export declare const colorConfig: CssPropertyConfig[];