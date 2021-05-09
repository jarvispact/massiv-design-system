import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';

export const widthSystemDef = {
    width: { themeScope: 'width', getCSS: (v: string) => ({ width: v }) },
    w: { themeScope: 'width', getCSS: (v: string) => ({ width: v }) },
    minWidth: { themeScope: 'width', getCSS: (v: string) => ({ minWidth: v }) },
    minW: { themeScope: 'width', getCSS: (v: string) => ({ minWidth: v }) },
    maxWidth: { themeScope: 'width', getCSS: (v: string) => ({ maxWidth: v }) },
    maxW: { themeScope: 'width', getCSS: (v: string) => ({ maxWidth: v }) },
};

type WidthKey = keyof typeof widthSystemDef;
type WidthValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'width'>>;
export type WidthObj<T extends Theme> = Partial<Record<WidthKey, WidthValue<T> | CssValueObject<T, WidthValue<T>>>>;
