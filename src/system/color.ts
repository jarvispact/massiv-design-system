import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';

export const colorSystemDef = {
    backgroundColor: { themeScope: 'color', getCSS: (v: string) => ({ backgroundColor: v }) },
    bg: { themeScope: 'color', getCSS: (v: string) => ({ backgroundColor: v }) },
    color: { themeScope: 'color', getCSS: (v: string) => ({ color: v }) },
};

export type ColorKey = keyof typeof colorSystemDef;
export type ColorValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'color'>>;
export type ColorObj<T extends Theme> = Partial<Record<ColorKey, ColorValue<T> | CssValueObject<T, ColorValue<T>>>>;
