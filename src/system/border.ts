import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';

export const borderSystemDef = {
    borderStyle: { themeScope: null, getCSS: (v: string) => ({ borderStyle: v }) },
    bs: { themeScope: null, getCSS: (v: string) => ({ borderStyle: v }) },
    borderWidth: { themeScope: 'width', getCSS: (v: string) => ({ borderWidth: v }) },
    bw: { themeScope: 'width', getCSS: (v: string) => ({ borderWidth: v }) },
    borderColor: { themeScope: 'color', getCSS: (v: string) => ({ borderColor: v }) },
    bc: { themeScope: 'color', getCSS: (v: string) => ({ borderColor: v }) },

    borderRadius: { themeScope: 'radii', getCSS: (v: string) => ({ borderRadius: v }) },
    br: { themeScope: 'radii', getCSS: (v: string) => ({ borderRadius: v }) },

    borderTopStyle: { themeScope: null, getCSS: (v: string) => ({ borderTopStyle: v }) },
    bts: { themeScope: null, getCSS: (v: string) => ({ borderTopStyle: v }) },
    borderTopWidth: { themeScope: 'width', getCSS: (v: string) => ({ borderTopWidth: v }) },
    btw: { themeScope: 'width', getCSS: (v: string) => ({ borderTopWidth: v }) },
    borderTopColor: { themeScope: 'color', getCSS: (v: string) => ({ borderTopColor: v }) },
    btc: { themeScope: 'color', getCSS: (v: string) => ({ borderTopColor: v }) },

    borderBottomStyle: { themeScope: null, getCSS: (v: string) => ({ borderBottomStyle: v }) },
    bbs: { themeScope: null, getCSS: (v: string) => ({ borderBottomStyle: v }) },
    borderBottomWidth: { themeScope: 'width', getCSS: (v: string) => ({ borderBottomWidth: v }) },
    bbw: { themeScope: 'width', getCSS: (v: string) => ({ borderBottomWidth: v }) },
    borderBottomColor: { themeScope: 'color', getCSS: (v: string) => ({ borderBottomColor: v }) },
    bbc: { themeScope: 'color', getCSS: (v: string) => ({ borderBottomColor: v }) },

    borderLeftStyle: { themeScope: null, getCSS: (v: string) => ({ borderLeftStyle: v }) },
    bls: { themeScope: null, getCSS: (v: string) => ({ borderLeftStyle: v }) },
    borderLeftWidth: { themeScope: 'width', getCSS: (v: string) => ({ borderLeftWidth: v }) },
    blw: { themeScope: 'width', getCSS: (v: string) => ({ borderLeftWidth: v }) },
    borderLeftColor: { themeScope: 'color', getCSS: (v: string) => ({ borderLeftColor: v }) },
    blc: { themeScope: 'color', getCSS: (v: string) => ({ borderLeftColor: v }) },

    borderRightStyle: { themeScope: null, getCSS: (v: string) => ({ borderRightStyle: v }) },
    brs: { themeScope: null, getCSS: (v: string) => ({ borderRightStyle: v }) },
    borderRightWidth: { themeScope: 'width', getCSS: (v: string) => ({ borderRightWidth: v }) },
    brw: { themeScope: 'width', getCSS: (v: string) => ({ borderRightWidth: v }) },
    borderRightColor: { themeScope: 'color', getCSS: (v: string) => ({ borderRightColor: v }) },
    brc: { themeScope: 'color', getCSS: (v: string) => ({ borderRightColor: v }) },

    borderTopLeftRadius: { themeScope: 'radii', getCSS: (v: string) => ({ borderTopLeftRadius: v }) },
    btlr: { themeScope: 'radii', getCSS: (v: string) => ({ borderTopLeftRadius: v }) },

    borderTopRightRadius: { themeScope: 'radii', getCSS: (v: string) => ({ borderTopRightRadius: v }) },
    btrr: { themeScope: 'radii', getCSS: (v: string) => ({ borderTopRightRadius: v }) },

    borderBottomLeftRadius: { themeScope: 'radii', getCSS: (v: string) => ({ borderBottomLeftRadius: v }) },
    bblr: { themeScope: 'radii', getCSS: (v: string) => ({ borderBottomLeftRadius: v }) },

    borderBottomRghtRadius: { themeScope: 'radii', getCSS: (v: string) => ({ borderBottomRightRadius: v }) },
    bbrr: { themeScope: 'radii', getCSS: (v: string) => ({ borderBottomRightRadius: v }) },
};

export type BorderSystemObj<T extends Theme> = Partial<{
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
