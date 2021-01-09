import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';
export declare type WidthProps<T extends Theme> = {
    width?: ResponsiveThemeProp<T, 'width'>;
    w?: ResponsiveThemeProp<T, 'width'>;
    minWidth?: ResponsiveThemeProp<T, 'width'>;
    minW?: ResponsiveThemeProp<T, 'width'>;
    maxWidth?: ResponsiveThemeProp<T, 'width'>;
    maxW?: ResponsiveThemeProp<T, 'width'>;
};
export declare const widthConfig: CssPropertyConfig[];
