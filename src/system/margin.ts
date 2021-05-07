import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';

export const marginDefinitions = {
    margin: { themeScope: 'spacing', getCSS: (v: string) => ({ margin: v }) },
    m: { themeScope: 'spacing', getCSS: (v: string) => ({ margin: v }) },
    mx: { themeScope: 'spacing', getCSS: (v: string) => ({ marginLeft: v, marginRight: v }) },
    my: { themeScope: 'spacing', getCSS: (v: string) => ({ marginTop: v, marginBottom: v }) },
};

export type MarginDefinitions = typeof marginDefinitions;
export type MarginKey = keyof MarginDefinitions;
export type MarginValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'spacing'>>;
