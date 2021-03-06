import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';

export const miscSystemDef = {
    display: { themeScope: null, getCSS: (v: string) => ({ display: v }) },
    clipPath: { themeScope: null, getCSS: (v: string) => ({ clipPath: v }) },
    listStyle: { themeScope: null, getCSS: (v: string) => ({ listStyle: v }) },
    textDecoration: { themeScope: null, getCSS: (v: string) => ({ textDecoration: v }) },
    resize: { themeScope: null, getCSS: (v: string) => ({ resize: v }) },
    position: { themeScope: null, getCSS: (v: string) => ({ position: v }) },
    top: { themeScope: null, getCSS: (v: string) => ({ top: v }) },
    left: { themeScope: null, getCSS: (v: string) => ({ left: v }) },
    bottom: { themeScope: null, getCSS: (v: string) => ({ bottom: v }) },
    right: { themeScope: null, getCSS: (v: string) => ({ right: v }) },
    zIndex: { themeScope: null, getCSS: (v: string) => ({ zIndex: v }) },
    boxShadow: { themeScope: 'shadow', getCSS: (v: string) => ({ boxShadow: v }) },
    outline: { themeScope: null, getCSS: (v: string) => ({ outline: v }) },
    outlineColor: { themeScope: 'color', getCSS: (v: string) => ({ outlineColor: v }) },
    overflow: { themeScope: 'color', getCSS: (v: string) => ({ overflow: v }) },
    overflowX: { themeScope: 'color', getCSS: (v: string) => ({ overflowX: v }) },
    overflowY: { themeScope: 'color', getCSS: (v: string) => ({ overflowY: v }) },
};

type UnThemedMiscObj = Partial<{
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

export type MiscSystemObj<T extends Theme> = UnThemedMiscObj &
    Partial<{
        zIndex: ResponsiveThemedValue<T, 'zIndex'>;
        boxShadow: ResponsiveThemedValue<T, 'shadow'>;
        outlineColor: ResponsiveThemedValue<T, 'color'>;
    }>;

export type CustomMiscSystemObj<T extends Theme> = UnThemedMiscObj &
    Partial<{
        zIndex: LiteralUnion<UnpackThemeScope<T, 'zIndex'>>;
        boxShadow: LiteralUnion<UnpackThemeScope<T, 'shadow'>>;
        outlineColor: LiteralUnion<UnpackThemeScope<T, 'color'>>;
    }>;
