import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
export declare const typographySystemDef: {
    fontFamily: {
        themeScope: string;
        getCSS: (v: string) => {
            fontFamily: string;
        };
    };
    fontSize: {
        themeScope: string;
        getCSS: (v: string) => {
            fontSize: string;
        };
    };
    fontWeight: {
        themeScope: string;
        getCSS: (v: string) => {
            fontWeight: string;
        };
    };
    lineHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            lineHeight: string;
        };
    };
    letterSpacing: {
        themeScope: string;
        getCSS: (v: string) => {
            letterSpacing: string;
        };
    };
    textOverflow: {
        themeScope: null;
        getCSS: (v: string) => {
            textOverflow: string;
        };
    };
    whiteSpace: {
        themeScope: null;
        getCSS: (v: string) => {
            whiteSpace: string;
        };
    };
    verticalAlign: {
        themeScope: null;
        getCSS: (v: string) => {
            verticalAlign: string;
        };
    };
    textTransform: {
        themeScope: null;
        getCSS: (v: string) => {
            textTransform: string;
        };
    };
};
declare type UnThemedMiscObj = Partial<{
    textOverflow: CSSProperties['textOverflow'];
    whiteSpace: CSSProperties['whiteSpace'];
    verticalAlign: CSSProperties['verticalAlign'];
    textTransform: CSSProperties['textTransform'];
}>;
export declare type TypographySystemObj<T extends Theme> = UnThemedMiscObj & Partial<{
    fontFamily: ResponsiveThemedValue<T, 'fontFamily'>;
    fontSize: ResponsiveThemedValue<T, 'fontSize'>;
    fontWeight: ResponsiveThemedValue<T, 'fontWeight'>;
    lineHeight: ResponsiveThemedValue<T, 'lineHeight'>;
    letterSpacing: ResponsiveThemedValue<T, 'letterSpacing'>;
}>;
export declare type CustomTypographySystemObj<T extends Theme> = UnThemedMiscObj & Partial<{
    fontFamily: LiteralUnion<UnpackThemeScope<T, 'fontFamily'>>;
    fontSize: LiteralUnion<UnpackThemeScope<T, 'fontSize'>>;
    fontWeight: LiteralUnion<UnpackThemeScope<T, 'fontWeight'>>;
    lineHeight: LiteralUnion<UnpackThemeScope<T, 'lineHeight'>>;
    letterSpacing: LiteralUnion<UnpackThemeScope<T, 'letterSpacing'>>;
}>;
export {};
