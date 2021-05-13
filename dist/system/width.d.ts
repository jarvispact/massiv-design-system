import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';
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
export declare type WidthSystemObj<T extends Theme> = Partial<Record<WidthKey, ScopedThemeKeyOrStringValue<T, 'width'>>>;
export {};
