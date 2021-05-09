import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';
export declare const colorSystemDef: {
    backgroundColor: {
        themeScope: string;
        getCSS: (v: string) => {
            backgroundColor: string;
        };
    };
    bg: {
        themeScope: string;
        getCSS: (v: string) => {
            backgroundColor: string;
        };
    };
    color: {
        themeScope: string;
        getCSS: (v: string) => {
            color: string;
        };
    };
};
declare type ColorKey = keyof typeof colorSystemDef;
export declare type ColorObj<T extends Theme> = Partial<Record<ColorKey, ScopedThemeKeyOrStringValue<T, 'color'>>>;
export {};
