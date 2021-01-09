import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';
export declare type PaddingProps<T extends Theme> = {
    padding?: ResponsiveThemeProp<T, 'spacing'>;
    p?: ResponsiveThemeProp<T, 'spacing'>;
    paddingTop?: ResponsiveThemeProp<T, 'spacing'>;
    pt?: ResponsiveThemeProp<T, 'spacing'>;
    paddingLeft?: ResponsiveThemeProp<T, 'spacing'>;
    pl?: ResponsiveThemeProp<T, 'spacing'>;
    paddingBottom?: ResponsiveThemeProp<T, 'spacing'>;
    pb?: ResponsiveThemeProp<T, 'spacing'>;
    paddingRight?: ResponsiveThemeProp<T, 'spacing'>;
    pr?: ResponsiveThemeProp<T, 'spacing'>;
};
export declare const paddingConfig: CssPropertyConfig[];
