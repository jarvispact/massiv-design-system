import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';
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
export declare type BorderObj<T extends Theme> = Partial<{
    borderStyle: CssProperty<T, 'borderStyle'>;
    bs: CssProperty<T, 'borderStyle'>;
    borderWidth: ScopedThemeKeyOrStringValue<T, 'width'>;
    bw: ScopedThemeKeyOrStringValue<T, 'width'>;
    borderColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    bc: ScopedThemeKeyOrStringValue<T, 'color'>;
    borderRadius: ScopedThemeKeyOrStringValue<T, 'radii'>;
    br: ScopedThemeKeyOrStringValue<T, 'radii'>;
    borderTopStyle: CssProperty<T, 'borderStyle'>;
    bts: CssProperty<T, 'borderStyle'>;
    borderTopWidth: ScopedThemeKeyOrStringValue<T, 'width'>;
    btw: ScopedThemeKeyOrStringValue<T, 'width'>;
    borderTopColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    btc: ScopedThemeKeyOrStringValue<T, 'color'>;
    borderBottomStyle: CssProperty<T, 'borderStyle'>;
    bbs: CssProperty<T, 'borderStyle'>;
    borderBottomWidth: ScopedThemeKeyOrStringValue<T, 'width'>;
    bbw: ScopedThemeKeyOrStringValue<T, 'width'>;
    borderBottomColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    bbc: ScopedThemeKeyOrStringValue<T, 'color'>;
    borderLeftStyle: CssProperty<T, 'borderStyle'>;
    bls: CssProperty<T, 'borderStyle'>;
    borderLeftWidth: ScopedThemeKeyOrStringValue<T, 'width'>;
    blw: ScopedThemeKeyOrStringValue<T, 'width'>;
    borderLeftColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    blc: ScopedThemeKeyOrStringValue<T, 'color'>;
    borderRightStyle: CssProperty<T, 'borderStyle'>;
    brs: CssProperty<T, 'borderStyle'>;
    borderRightWidth: ScopedThemeKeyOrStringValue<T, 'width'>;
    brw: ScopedThemeKeyOrStringValue<T, 'width'>;
    borderRightColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    brc: ScopedThemeKeyOrStringValue<T, 'color'>;
    borderTopLeftRadius: ScopedThemeKeyOrStringValue<T, 'radii'>;
    btlr: ScopedThemeKeyOrStringValue<T, 'radii'>;
    borderTopRightRadius: ScopedThemeKeyOrStringValue<T, 'radii'>;
    btrr: ScopedThemeKeyOrStringValue<T, 'radii'>;
    borderBottomLeftRadius: ScopedThemeKeyOrStringValue<T, 'radii'>;
    bblr: ScopedThemeKeyOrStringValue<T, 'radii'>;
    borderBottomRghtRadius: ScopedThemeKeyOrStringValue<T, 'radii'>;
    bbrr: ScopedThemeKeyOrStringValue<T, 'radii'>;
}>;
