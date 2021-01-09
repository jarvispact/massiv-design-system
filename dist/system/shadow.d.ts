import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';
export declare type ShadowProps<T extends Theme> = {
    boxShadow?: ResponsiveThemeProp<T, 'boxShadow'>;
    textShadow?: ResponsiveThemeProp<T, 'textShadow'>;
};
export declare const shadowConfig: CssPropertyConfig[];
