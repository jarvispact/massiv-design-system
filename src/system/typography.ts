import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';

export const typographySystemDef = {
    fontFamily: { themeScope: 'fontFamily', getCSS: (v: string) => ({ fontFamily: v }) },
    fontSize: { themeScope: 'fontSize', getCSS: (v: string) => ({ fontSize: v }) },
    fontWeight: { themeScope: 'fontWeight', getCSS: (v: string) => ({ fontWeight: v }) },
    lineHeight: { themeScope: 'lineHeight', getCSS: (v: string) => ({ lineHeight: v }) },
    letterSpacing: { themeScope: 'letterSpacing', getCSS: (v: string) => ({ letterSpacing: v }) },
    textOverflow: { themeScope: null, getCSS: (v: string) => ({ textOverflow: v }) },
    whiteSpace: { themeScope: null, getCSS: (v: string) => ({ whiteSpace: v }) },
    verticalAlign: { themeScope: null, getCSS: (v: string) => ({ verticalAlign: v }) },
    textTransform: { themeScope: null, getCSS: (v: string) => ({ textTransform: v }) },
};

export type TypographyObj<T extends Theme> = Partial<{
    fontFamily: ScopedThemeKeyOrStringValue<T, 'fontFamily'>;
    fontSize: ScopedThemeKeyOrStringValue<T, 'fontSize'>;
    fontWeight: ScopedThemeKeyOrStringValue<T, 'fontWeight'>;
    lineHeight: ScopedThemeKeyOrStringValue<T, 'lineHeight'>;
    letterSpacing: ScopedThemeKeyOrStringValue<T, 'letterSpacing'>;
    textOverflow: CssProperty<T, 'textOverflow'>;
    whiteSpace: CssProperty<T, 'whiteSpace'>;
    verticalAlign: CssProperty<T, 'verticalAlign'>;
    textTransform: CssProperty<T, 'textTransform'>;
}>;
