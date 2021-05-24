import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';
export declare const borderSystemDef: {
    borderStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderStyle: string;
        };
    };
    bs: {
        themeScope: null;
        getCSS: (v: string) => {
            borderStyle: string;
        };
    };
    borderWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderWidth: string;
        };
    };
    bw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderWidth: string;
        };
    };
    borderColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderColor: string;
        };
    };
    bc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderColor: string;
        };
    };
    borderRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRadius: string;
        };
    };
    br: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRadius: string;
        };
    };
    borderTopStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderTopStyle: string;
        };
    };
    bts: {
        themeScope: null;
        getCSS: (v: string) => {
            borderTopStyle: string;
        };
    };
    borderTopWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopWidth: string;
        };
    };
    btw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopWidth: string;
        };
    };
    borderTopColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopColor: string;
        };
    };
    btc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopColor: string;
        };
    };
    borderBottomStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderBottomStyle: string;
        };
    };
    bbs: {
        themeScope: null;
        getCSS: (v: string) => {
            borderBottomStyle: string;
        };
    };
    borderBottomWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomWidth: string;
        };
    };
    bbw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomWidth: string;
        };
    };
    borderBottomColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomColor: string;
        };
    };
    bbc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomColor: string;
        };
    };
    borderLeftStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderLeftStyle: string;
        };
    };
    bls: {
        themeScope: null;
        getCSS: (v: string) => {
            borderLeftStyle: string;
        };
    };
    borderLeftWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftWidth: string;
        };
    };
    blw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftWidth: string;
        };
    };
    borderLeftColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftColor: string;
        };
    };
    blc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftColor: string;
        };
    };
    borderRightStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderRightStyle: string;
        };
    };
    brs: {
        themeScope: null;
        getCSS: (v: string) => {
            borderRightStyle: string;
        };
    };
    borderRightWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightWidth: string;
        };
    };
    brw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightWidth: string;
        };
    };
    borderRightColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightColor: string;
        };
    };
    brc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightColor: string;
        };
    };
    borderTopLeftRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopLeftRadius: string;
        };
    };
    btlr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopLeftRadius: string;
        };
    };
    borderTopRightRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopRightRadius: string;
        };
    };
    btrr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopRightRadius: string;
        };
    };
    borderBottomLeftRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomLeftRadius: string;
        };
    };
    bblr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomLeftRadius: string;
        };
    };
    borderBottomRghtRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomRightRadius: string;
        };
    };
    bbrr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomRightRadius: string;
        };
    };
};
declare type UnThemedBorderObj = Partial<{
    borderStyle: CSSProperties['borderStyle'];
    bs: CSSProperties['borderStyle'];
    borderTopStyle: CSSProperties['borderStyle'];
    bts: CSSProperties['borderStyle'];
    borderBottomStyle: CSSProperties['borderStyle'];
    bbs: CSSProperties['borderStyle'];
    borderLeftStyle: CSSProperties['borderStyle'];
    bls: CSSProperties['borderStyle'];
    borderRightStyle: CSSProperties['borderStyle'];
    brs: CSSProperties['borderStyle'];
}>;
export declare type BorderSystemObj<T extends Theme> = UnThemedBorderObj & Partial<{
    borderWidth: ResponsiveThemedValue<T, 'width'>;
    bw: ResponsiveThemedValue<T, 'width'>;
    borderColor: ResponsiveThemedValue<T, 'color'>;
    bc: ResponsiveThemedValue<T, 'color'>;
    borderRadius: ResponsiveThemedValue<T, 'radii'>;
    br: ResponsiveThemedValue<T, 'radii'>;
    borderTopWidth: ResponsiveThemedValue<T, 'width'>;
    btw: ResponsiveThemedValue<T, 'width'>;
    borderTopColor: ResponsiveThemedValue<T, 'color'>;
    btc: ResponsiveThemedValue<T, 'color'>;
    borderBottomWidth: ResponsiveThemedValue<T, 'width'>;
    bbw: ResponsiveThemedValue<T, 'width'>;
    borderBottomColor: ResponsiveThemedValue<T, 'color'>;
    bbc: ResponsiveThemedValue<T, 'color'>;
    borderLeftWidth: ResponsiveThemedValue<T, 'width'>;
    blw: ResponsiveThemedValue<T, 'width'>;
    borderLeftColor: ResponsiveThemedValue<T, 'color'>;
    blc: ResponsiveThemedValue<T, 'color'>;
    borderRightWidth: ResponsiveThemedValue<T, 'width'>;
    brw: ResponsiveThemedValue<T, 'width'>;
    borderRightColor: ResponsiveThemedValue<T, 'color'>;
    brc: ResponsiveThemedValue<T, 'color'>;
    borderTopLeftRadius: ResponsiveThemedValue<T, 'radii'>;
    btlr: ResponsiveThemedValue<T, 'radii'>;
    borderTopRightRadius: ResponsiveThemedValue<T, 'radii'>;
    btrr: ResponsiveThemedValue<T, 'radii'>;
    borderBottomLeftRadius: ResponsiveThemedValue<T, 'radii'>;
    bblr: ResponsiveThemedValue<T, 'radii'>;
    borderBottomRghtRadius: ResponsiveThemedValue<T, 'radii'>;
    bbrr: ResponsiveThemedValue<T, 'radii'>;
}>;
export declare type CustomBorderSystemObj<T extends Theme> = UnThemedBorderObj & Partial<{
    borderWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    bw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    bc: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    borderRadius: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    br: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    borderTopWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    btw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderTopColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    btc: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    borderBottomWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    bbw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderBottomColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    bbc: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    borderLeftWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    blw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderLeftColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    blc: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    borderRightWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    brw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderRightColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    brc: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    borderTopLeftRadius: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    btlr: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    borderTopRightRadius: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    btrr: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    borderBottomLeftRadius: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    bblr: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    borderBottomRghtRadius: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    bbrr: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
}>;
export {};
