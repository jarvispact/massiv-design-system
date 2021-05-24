import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
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
export declare type ColorSystemObj<T extends Theme> = Partial<Record<ColorKey, ResponsiveThemedValue<T, 'color'>>>;
export declare type CustomColorSystemObj<T extends Theme> = Partial<Record<ColorKey, LiteralUnion<UnpackThemeScope<T, 'color'>>>>;
export {};
