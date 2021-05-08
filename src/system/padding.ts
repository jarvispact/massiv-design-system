import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';

export const paddingSystemDef = {
    padding: { themeScope: 'spacing', getCSS: (v: string) => ({ padding: v }) },
    p: { themeScope: 'spacing', getCSS: (v: string) => ({ padding: v }) },
    pt: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingTop: v }) },
    pr: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingRight: v }) },
    pb: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingBottom: v }) },
    pl: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingLeft: v }) },
    px: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingLeft: v, paddingRight: v }) },
    py: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingTop: v, paddingBottom: v }) },
};

type PaddingKey = keyof typeof paddingSystemDef;
type PaddingValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'spacing'>>;
export type PaddingObj<T extends Theme> = Partial<Record<PaddingKey, PaddingValue<T> | CssValueObject<T, PaddingValue<T>>>>;
