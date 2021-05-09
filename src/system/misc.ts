import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';

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

export type MiscObj<T extends Theme> = Partial<{
    display: CssProperty<T, 'display'>;
    clipPath: CssProperty<T, 'clipPath'>;
    listStyle: CssProperty<T, 'listStyle'>;
    textDecoration: CssProperty<T, 'textDecoration'>;
    resize: CssProperty<T, 'resize'>;
    position: CssProperty<T, 'position'>;
    top: CssProperty<T, 'top'>;
    left: CssProperty<T, 'left'>;
    bottom: CssProperty<T, 'bottom'>;
    right: CssProperty<T, 'right'>;
    zIndex: CssProperty<T, 'zIndex'>;
    boxShadow: ScopedThemeKeyOrStringValue<T, 'shadow'>;
    outline: CssProperty<T, 'outline'>;
    outlineColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    overflow: CssProperty<T, 'overflow'>;
    overflowX: CssProperty<T, 'overflowX'>;
    overflowY: CssProperty<T, 'overflowY'>;
}>;
