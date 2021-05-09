import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';

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

type MarginKey = keyof typeof marginSystemDef;
export type MarginObj<T extends Theme> = Partial<Record<MarginKey, ScopedThemeKeyOrStringValue<T, 'spacing'>>>;
