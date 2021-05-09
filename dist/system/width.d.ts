import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';
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
declare type WidthValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'width'>>;
export declare type WidthObj<T extends Theme> = Partial<Record<WidthKey, WidthValue<T> | CssValueObject<T, WidthValue<T>>>>;
export {};
