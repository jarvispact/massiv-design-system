import { Theme, ThemeScope } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';

export const typographySystemDef = {
    fontFamily: { themeScope: 'fontFamily', getCSS: (v: string) => ({ fontFamily: v }) },
    fontSize: { themeScope: 'fontSize', getCSS: (v: string) => ({ fontSize: v }) },
    fontWeight: { themeScope: 'fontWeight', getCSS: (v: string) => ({ fontWeight: v }) },
    lineHeight: { themeScope: 'lineHeight', getCSS: (v: string) => ({ lineHeight: v }) },
    letterSpacing: { themeScope: 'letterSpacing', getCSS: (v: string) => ({ letterSpacing: v }) },
};

export type TypographyKey = keyof typeof typographySystemDef;
export type TypographyValue<T extends Theme, S extends ThemeScope> = LiteralUnion<UnpackThemeScope<T, S>>;

export type TypographyObj<T extends Theme> = Partial<{
    fontFamily: TypographyValue<T, 'fontFamily'> | CssValueObject<T, TypographyValue<T, 'fontFamily'>>;
    fontSize: TypographyValue<T, 'fontSize'> | CssValueObject<T, TypographyValue<T, 'fontSize'>>;
    fontWeight: TypographyValue<T, 'fontWeight'> | CssValueObject<T, TypographyValue<T, 'fontWeight'>>;
    lineHeight: TypographyValue<T, 'lineHeight'> | CssValueObject<T, TypographyValue<T, 'lineHeight'>>;
    letterSpacing: TypographyValue<T, 'letterSpacing'> | CssValueObject<T, TypographyValue<T, 'letterSpacing'>>;
}>;
