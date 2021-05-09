import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';

export const heightSystemDef = {
    height: { themeScope: 'height', getCSS: (v: string) => ({ height: v }) },
    h: { themeScope: 'height', getCSS: (v: string) => ({ height: v }) },
    minHeight: { themeScope: 'height', getCSS: (v: string) => ({ minHeight: v }) },
    minH: { themeScope: 'height', getCSS: (v: string) => ({ minHeight: v }) },
    maxHeight: { themeScope: 'height', getCSS: (v: string) => ({ maxHeight: v }) },
    maxH: { themeScope: 'height', getCSS: (v: string) => ({ maxHeight: v }) },
};

type HeightKey = keyof typeof heightSystemDef;
export type HeightObj<T extends Theme> = Partial<Record<HeightKey, ScopedThemeKeyOrStringValue<T, 'height'>>>;
