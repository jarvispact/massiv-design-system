import { Theme } from '../theme/default-theme';
import { ResponsiveThemedValue } from '../utils/types';

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
export type MarginSystemObj<T extends Theme> = Partial<Record<MarginKey, ResponsiveThemedValue<T, 'spacing'>>>;
