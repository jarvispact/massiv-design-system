import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';
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
export declare type HeightObj<T extends Theme> = Partial<Record<HeightKey, ScopedThemeKeyOrStringValue<T, 'height'>>>;
export {};
