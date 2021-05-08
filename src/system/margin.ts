import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';
import { CssValueObject } from './system';

export const marginSystemDef = {
    margin: { themeScope: 'spacing', getCSS: (v: string) => ({ margin: v }) },
    m: { themeScope: 'spacing', getCSS: (v: string) => ({ margin: v }) },
    mt: { themeScope: 'spacing', getCSS: (v: string) => ({ marginTop: v }) },
    mr: { themeScope: 'spacing', getCSS: (v: string) => ({ marginRight: v }) },
    mb: { themeScope: 'spacing', getCSS: (v: string) => ({ marginBottom: v }) },
    ml: { themeScope: 'spacing', getCSS: (v: string) => ({ marginLeft: v }) },
    mx: { themeScope: 'spacing', getCSS: (v: string) => ({ marginLeft: v, marginRight: v }) },
    my: { themeScope: 'spacing', getCSS: (v: string) => ({ marginTop: v, marginBottom: v }) },
};

export type MarginKey = keyof typeof marginSystemDef;
export type MarginValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'spacing'>>;
export type MarginObj<T extends Theme> = Partial<Record<MarginKey, MarginValue<T> | CssValueObject<T, MarginValue<T>>>>;
