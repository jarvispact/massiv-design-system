import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp, ResponsiveProp } from '../utils/types';
export declare type FontProps<T extends Theme> = {
    fontFamily?: ResponsiveThemeProp<T, 'fontFamily'>;
    fontSize?: ResponsiveThemeProp<T, 'fontSize'>;
    fontWeight?: ResponsiveThemeProp<T, 'fontWeight'>;
    lineHeight?: ResponsiveThemeProp<T, 'lineHeight'>;
    letterSpacing?: ResponsiveThemeProp<T, 'letterSpacing'>;
    textOverflow?: ResponsiveProp;
    whiteSpace?: ResponsiveProp;
    textAlign?: ResponsiveProp;
    verticalAlign?: ResponsiveProp;
    textTransform?: ResponsiveProp;
};
export declare const fontConfig: CssPropertyConfig[];
