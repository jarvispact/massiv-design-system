import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';
export declare type MarginProps<T extends Theme> = {
    margin?: ResponsiveThemeProp<T, 'spacing'>;
    m?: ResponsiveThemeProp<T, 'spacing'>;
    marginTop?: ResponsiveThemeProp<T, 'spacing'>;
    mt?: ResponsiveThemeProp<T, 'spacing'>;
    marginLeft?: ResponsiveThemeProp<T, 'spacing'>;
    ml?: ResponsiveThemeProp<T, 'spacing'>;
    marginBottom?: ResponsiveThemeProp<T, 'spacing'>;
    mb?: ResponsiveThemeProp<T, 'spacing'>;
    marginRight?: ResponsiveThemeProp<T, 'spacing'>;
    mr?: ResponsiveThemeProp<T, 'spacing'>;
};
export declare const marginConfig: CssPropertyConfig[];
