import { Theme } from '../theme/default-theme';
import { LiteralUnion, ResponsiveThemedValue, UnpackThemeScope } from '../utils/types';

// const getCSS = <T extends Theme>(value: string, theme: T, themeScope: keyof T) => (property: keyof CSSProperties) => {
//     const section = theme[themeScope];
//     if (!themeScope || !section) return value;
//     console.log({ value, property });
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     const val = value as keyof T;
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     return section[val] || value;
// };

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
export type PaddingSystemObj<T extends Theme> = Partial<Record<PaddingKey, ResponsiveThemedValue<T, 'spacing'>>>;
export type CustomPaddingSystemObj<T extends Theme> = Partial<Record<PaddingKey, LiteralUnion<UnpackThemeScope<T, 'spacing'>>>>;
