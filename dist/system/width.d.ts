import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
export declare const widthSystemDef: {
    width: {
        themeScope: string;
        getCSS: (v: string) => {
            width: string;
        };
    };
    w: {
        themeScope: string;
        getCSS: (v: string) => {
            width: string;
        };
    };
    minWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            minWidth: string;
        };
    };
    minW: {
        themeScope: string;
        getCSS: (v: string) => {
            minWidth: string;
        };
    };
    maxWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            maxWidth: string;
        };
    };
    maxW: {
        themeScope: string;
        getCSS: (v: string) => {
            maxWidth: string;
        };
    };
};
declare type WidthKey = keyof typeof widthSystemDef;
export declare type WidthSystemObj<T extends Theme> = Partial<Record<WidthKey, ResponsiveThemedValue<T, 'width'>>>;
export declare type CustomWidthSystemObj<T extends Theme> = Partial<Record<WidthKey, LiteralUnion<UnpackThemeScope<T, 'width'>>>>;
export {};
