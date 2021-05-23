import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { ResponsiveThemedValue } from '../utils/types';

export const typographySystemDef = {
    fontFamily: { themeScope: 'fontFamily', getCSS: (v: string) => ({ fontFamily: v }) },
    fontSize: { themeScope: 'fontSize', getCSS: (v: string) => ({ fontSize: v }) },
    fontWeight: { themeScope: 'fontWeight', getCSS: (v: string) => ({ fontWeight: v }) },
    lineHeight: { themeScope: 'lineHeight', getCSS: (v: string) => ({ lineHeight: v }) },
    letterSpacing: { themeScope: 'letterSpacing', getCSS: (v: string) => ({ letterSpacing: v }) },
    textOverflow: { themeScope: null, getCSS: (v: string) => ({ textOverflow: v }) },
    whiteSpace: { themeScope: null, getCSS: (v: string) => ({ whiteSpace: v }) },
    verticalAlign: { themeScope: null, getCSS: (v: string) => ({ verticalAlign: v }) },
    textTransform: { themeScope: null, getCSS: (v: string) => ({ textTransform: v }) },
};

export type TypographySystemObj<T extends Theme> = Partial<{
    fontFamily: ResponsiveThemedValue<T, 'fontFamily'>;
    fontSize: ResponsiveThemedValue<T, 'fontSize'>;
    fontWeight: ResponsiveThemedValue<T, 'fontWeight'>;
    lineHeight: ResponsiveThemedValue<T, 'lineHeight'>;
    letterSpacing: ResponsiveThemedValue<T, 'letterSpacing'>;
    textOverflow: CSSProperties['textOverflow'];
    whiteSpace: CSSProperties['whiteSpace'];
    verticalAlign: CSSProperties['verticalAlign'];
    textTransform: CSSProperties['textTransform'];
}>;
