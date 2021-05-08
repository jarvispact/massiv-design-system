import { CSSProperties } from 'react';
import { Theme, ThemeScope } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';

type BorderStyle = CSSProperties['borderStyle'];

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

type BorderValue<T extends Theme, S extends ThemeScope> = LiteralUnion<UnpackThemeScope<T, S>>;

export type BorderObj<T extends Theme> = Partial<{
    borderStyle: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    bs: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    borderWidth: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    bw: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    borderColor: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;
    bc: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;

    borderRadius: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;
    br: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;

    borderTopStyle: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    bts: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    borderTopWidth: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    btw: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    borderTopColor: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;
    btc: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;

    borderBottomStyle: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    bbs: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    borderBottomWidth: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    bbw: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    borderBottomColor: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;
    bbc: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;

    borderLeftStyle: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    bls: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    borderLeftWidth: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    blw: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    borderLeftColor: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;
    blc: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;

    borderRightStyle: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    brs: Exclude<BorderStyle, null | undefined> | CssValueObject<T, Exclude<BorderStyle, null | undefined>>;
    borderRightWidth: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    brw: BorderValue<T, 'width'> | CssValueObject<T, BorderValue<T, 'width'>>;
    borderRightColor: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;
    brc: BorderValue<T, 'color'> | CssValueObject<T, BorderValue<T, 'color'>>;

    borderTopLeftRadius: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;
    btlr: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;

    borderTopRightRadius: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;
    btrr: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;

    borderBottomLeftRadius: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;
    bblr: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;

    borderBottomRghtRadius: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;
    bbrr: BorderValue<T, 'radii'> | CssValueObject<T, BorderValue<T, 'radii'>>;
}>;
