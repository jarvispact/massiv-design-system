import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';

export const colorSystemDef = {
    backgroundColor: { themeScope: 'color', getCSS: (v: string) => ({ backgroundColor: v }) },
    bg: { themeScope: 'color', getCSS: (v: string) => ({ backgroundColor: v }) },
    color: { themeScope: 'color', getCSS: (v: string) => ({ color: v }) },
};

type ColorKey = keyof typeof colorSystemDef;
export type ColorSystemObj<T extends Theme> = Partial<Record<ColorKey, ResponsiveThemedValue<T, 'color'>>>;
export type CustomColorSystemObj<T extends Theme> = Partial<Record<ColorKey, LiteralUnion<UnpackThemeScope<T, 'color'>>>>;
