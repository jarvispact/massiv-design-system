import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';

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
    borderStyle: CSSProperties['borderStyle'];
    bs: CSSProperties['borderStyle'];
    borderWidth: ResponsiveThemedValue<T, 'width'>;
    bw: ResponsiveThemedValue<T, 'width'>;
    borderColor: ResponsiveThemedValue<T, 'color'>;
    bc: ResponsiveThemedValue<T, 'color'>;

    borderRadius: ResponsiveThemedValue<T, 'radii'>;
    br: ResponsiveThemedValue<T, 'radii'>;

    borderTopStyle: CSSProperties['borderStyle'];
    bts: CSSProperties['borderStyle'];
    borderTopWidth: ResponsiveThemedValue<T, 'width'>;
    btw: ResponsiveThemedValue<T, 'width'>;
    borderTopColor: ResponsiveThemedValue<T, 'color'>;
    btc: ResponsiveThemedValue<T, 'color'>;

    borderBottomStyle: CSSProperties['borderStyle'];
    bbs: CSSProperties['borderStyle'];
    borderBottomWidth: ResponsiveThemedValue<T, 'width'>;
    bbw: ResponsiveThemedValue<T, 'width'>;
    borderBottomColor: ResponsiveThemedValue<T, 'color'>;
    bbc: ResponsiveThemedValue<T, 'color'>;

    borderLeftStyle: CSSProperties['borderStyle'];
    bls: CSSProperties['borderStyle'];
    borderLeftWidth: ResponsiveThemedValue<T, 'width'>;
    blw: ResponsiveThemedValue<T, 'width'>;
    borderLeftColor: ResponsiveThemedValue<T, 'color'>;
    blc: ResponsiveThemedValue<T, 'color'>;

    borderRightStyle: CSSProperties['borderStyle'];
    brs: CSSProperties['borderStyle'];
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

export type CustomBorderSystemObj<T extends Theme> = Partial<{
    borderStyle: CSSProperties['borderStyle'];
    bs: CSSProperties['borderStyle'];
    borderWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    bw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    bc: LiteralUnion<UnpackThemeScope<T, 'color'>>;

    borderRadius: LiteralUnion<UnpackThemeScope<T, 'radii'>>;
    br: LiteralUnion<UnpackThemeScope<T, 'radii'>>;

    borderTopStyle: CSSProperties['borderStyle'];
    bts: CSSProperties['borderStyle'];
    borderTopWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    btw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderTopColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    btc: LiteralUnion<UnpackThemeScope<T, 'color'>>;

    borderBottomStyle: CSSProperties['borderStyle'];
    bbs: CSSProperties['borderStyle'];
    borderBottomWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    bbw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderBottomColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    bbc: LiteralUnion<UnpackThemeScope<T, 'color'>>;

    borderLeftStyle: CSSProperties['borderStyle'];
    bls: CSSProperties['borderStyle'];
    borderLeftWidth: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    blw: LiteralUnion<UnpackThemeScope<T, 'width'>>;
    borderLeftColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    blc: LiteralUnion<UnpackThemeScope<T, 'color'>>;

    borderRightStyle: CSSProperties['borderStyle'];
    brs: CSSProperties['borderStyle'];
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
