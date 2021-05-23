import { Theme } from '../theme/default-theme';
import { ResponsiveThemedValue } from '../utils/types';

export const widthSystemDef = {
    width: { themeScope: 'width', getCSS: (v: string) => ({ width: v }) },
    w: { themeScope: 'width', getCSS: (v: string) => ({ width: v }) },
    minWidth: { themeScope: 'width', getCSS: (v: string) => ({ minWidth: v }) },
    minW: { themeScope: 'width', getCSS: (v: string) => ({ minWidth: v }) },
    maxWidth: { themeScope: 'width', getCSS: (v: string) => ({ maxWidth: v }) },
    maxW: { themeScope: 'width', getCSS: (v: string) => ({ maxWidth: v }) },
};

type WidthKey = keyof typeof widthSystemDef;
export type WidthSystemObj<T extends Theme> = Partial<Record<WidthKey, ResponsiveThemedValue<T, 'width'>>>;
