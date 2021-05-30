import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
export declare const heightSystemDef: {
    height: {
        themeScope: string;
        getCSS: (v: string) => {
            height: string;
        };
    };
    h: {
        themeScope: string;
        getCSS: (v: string) => {
            height: string;
        };
    };
    minHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            minHeight: string;
        };
    };
    minH: {
        themeScope: string;
        getCSS: (v: string) => {
            minHeight: string;
        };
    };
    maxHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            maxHeight: string;
        };
    };
    maxH: {
        themeScope: string;
        getCSS: (v: string) => {
            maxHeight: string;
        };
    };
};
declare type HeightKey = keyof typeof heightSystemDef;
export declare type HeightSystemObj<T extends Theme> = Partial<Record<HeightKey, ResponsiveThemedValue<T, 'height'>>>;
export declare type CustomHeightSystemObj<T extends Theme> = Partial<Record<HeightKey, LiteralUnion<UnpackThemeScope<T, 'height'>>>>;
export {};
