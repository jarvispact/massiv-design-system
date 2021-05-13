import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';

export const colorSystemDef = {
    backgroundColor: { themeScope: 'color', getCSS: (v: string) => ({ backgroundColor: v }) },
    bg: { themeScope: 'color', getCSS: (v: string) => ({ backgroundColor: v }) },
    color: { themeScope: 'color', getCSS: (v: string) => ({ color: v }) },
};

type ColorKey = keyof typeof colorSystemDef;
export type ColorSystemObj<T extends Theme> = Partial<Record<ColorKey, ScopedThemeKeyOrStringValue<T, 'color'>>>;
