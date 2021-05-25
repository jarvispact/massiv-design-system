import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
export declare const gridSystemDef: {
    gridTemplateColumns: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateColumns: string;
        };
    };
    gridTemplateRows: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateRows: string;
        };
    };
    gridTemplateAreas: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateAreas: string;
        };
    };
    columnGap: {
        themeScope: string;
        getCSS: (v: string) => {
            columnGap: string;
        };
    };
    rowGap: {
        themeScope: string;
        getCSS: (v: string) => {
            rowGap: string;
        };
    };
    gap: {
        themeScope: string;
        getCSS: (v: string) => {
            gap: string;
        };
    };
    justifyItems: {
        themeScope: null;
        getCSS: (v: string) => {
            justifyItems: string;
        };
    };
    gridColumnStart: {
        themeScope: null;
        getCSS: (v: string) => {
            gridColumnStart: string;
        };
    };
    gridColumnEnd: {
        themeScope: null;
        getCSS: (v: string) => {
            gridColumnEnd: string;
        };
    };
    gridRowStart: {
        themeScope: null;
        getCSS: (v: string) => {
            gridRowStart: string;
        };
    };
    gridRowEnd: {
        themeScope: null;
        getCSS: (v: string) => {
            gridRowEnd: string;
        };
    };
    gridArea: {
        themeScope: null;
        getCSS: (v: string) => {
            gridArea: string;
        };
    };
    justifySelf: {
        themeScope: null;
        getCSS: (v: string) => {
            justifySelf: string;
        };
    };
    placeSelf: {
        themeScope: null;
        getCSS: (v: string) => {
            placeSelf: string;
        };
    };
};
declare type UnThemedGridObj = Partial<{
    gridTemplateColumns: CSSProperties['gridTemplateColumns'];
    gridTemplateRows: CSSProperties['gridTemplateRows'];
    gridTemplateAreas: CSSProperties['gridTemplateAreas'];
    justifyItems: CSSProperties['justifyItems'];
    gridColumnStart: CSSProperties['gridColumnStart'];
    gridColumnEnd: CSSProperties['gridColumnEnd'];
    gridRowStart: CSSProperties['gridRowStart'];
    gridRowEnd: CSSProperties['gridRowEnd'];
    gridArea: CSSProperties['gridArea'];
    justifySelf: CSSProperties['justifySelf'];
    placeSelf: CSSProperties['placeSelf'];
}>;
export declare type GridSystemObj<T extends Theme> = UnThemedGridObj & Partial<{
    columnGap: ResponsiveThemedValue<T, 'spacing'>;
    rowGap: ResponsiveThemedValue<T, 'spacing'>;
    gap: ResponsiveThemedValue<T, 'spacing'>;
}>;
export declare type CustomGridSystemObj<T extends Theme> = UnThemedGridObj & Partial<{
    columnGap: LiteralUnion<UnpackThemeScope<T, 'spacing'>>;
    rowGap: LiteralUnion<UnpackThemeScope<T, 'spacing'>>;
    gap: LiteralUnion<UnpackThemeScope<T, 'spacing'>>;
}>;
export {};
