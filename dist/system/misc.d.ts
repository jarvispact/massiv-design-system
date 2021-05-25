import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
export declare const miscSystemDef: {
    display: {
        themeScope: null;
        getCSS: (v: string) => {
            display: string;
        };
    };
    clipPath: {
        themeScope: null;
        getCSS: (v: string) => {
            clipPath: string;
        };
    };
    listStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            listStyle: string;
        };
    };
    textDecoration: {
        themeScope: null;
        getCSS: (v: string) => {
            textDecoration: string;
        };
    };
    resize: {
        themeScope: null;
        getCSS: (v: string) => {
            resize: string;
        };
    };
    position: {
        themeScope: null;
        getCSS: (v: string) => {
            position: string;
        };
    };
    top: {
        themeScope: null;
        getCSS: (v: string) => {
            top: string;
        };
    };
    left: {
        themeScope: null;
        getCSS: (v: string) => {
            left: string;
        };
    };
    bottom: {
        themeScope: null;
        getCSS: (v: string) => {
            bottom: string;
        };
    };
    right: {
        themeScope: null;
        getCSS: (v: string) => {
            right: string;
        };
    };
    zIndex: {
        themeScope: null;
        getCSS: (v: string) => {
            zIndex: string;
        };
    };
    boxShadow: {
        themeScope: string;
        getCSS: (v: string) => {
            boxShadow: string;
        };
    };
    outline: {
        themeScope: null;
        getCSS: (v: string) => {
            outline: string;
        };
    };
    outlineColor: {
        themeScope: string;
        getCSS: (v: string) => {
            outlineColor: string;
        };
    };
    overflow: {
        themeScope: string;
        getCSS: (v: string) => {
            overflow: string;
        };
    };
    overflowX: {
        themeScope: string;
        getCSS: (v: string) => {
            overflowX: string;
        };
    };
    overflowY: {
        themeScope: string;
        getCSS: (v: string) => {
            overflowY: string;
        };
    };
};
declare type UnThemedMiscObj = Partial<{
    display: CSSProperties['display'];
    clipPath: CSSProperties['clipPath'];
    listStyle: CSSProperties['listStyle'];
    textDecoration: CSSProperties['textDecoration'];
    resize: CSSProperties['resize'];
    position: CSSProperties['position'];
    top: CSSProperties['top'];
    left: CSSProperties['left'];
    bottom: CSSProperties['bottom'];
    right: CSSProperties['right'];
    outline: CSSProperties['outline'];
    overflow: CSSProperties['overflow'];
    overflowX: CSSProperties['overflowX'];
    overflowY: CSSProperties['overflowY'];
}>;
export declare type MiscSystemObj<T extends Theme> = UnThemedMiscObj & Partial<{
    zIndex: ResponsiveThemedValue<T, 'zIndex'>;
    boxShadow: ResponsiveThemedValue<T, 'shadow'>;
    outlineColor: ResponsiveThemedValue<T, 'color'>;
}>;
export declare type CustomMiscSystemObj<T extends Theme> = UnThemedMiscObj & Partial<{
    zIndex: LiteralUnion<UnpackThemeScope<T, 'zIndex'>>;
    boxShadow: LiteralUnion<UnpackThemeScope<T, 'shadow'>>;
    outlineColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
}>;
export {};
