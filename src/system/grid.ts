import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { ResponsiveThemedValue } from '../utils/types';

export const gridSystemDef = {
    gridTemplateColumns: { themeScope: null, getCSS: (v: string) => ({ gridTemplateColumns: v }) },
    gridTemplateRows: { themeScope: null, getCSS: (v: string) => ({ gridTemplateRows: v }) },
    gridTemplateAreas: { themeScope: null, getCSS: (v: string) => ({ gridTemplateAreas: v }) },
    columnGap: { themeScope: 'spacing', getCSS: (v: string) => ({ columnGap: v }) },
    rowGap: { themeScope: 'spacing', getCSS: (v: string) => ({ rowGap: v }) },
    gap: { themeScope: 'spacing', getCSS: (v: string) => ({ gap: v }) },
    justifyItems: { themeScope: null, getCSS: (v: string) => ({ justifyItems: v }) },
    gridColumnStart: { themeScope: null, getCSS: (v: string) => ({ gridColumnStart: v }) },
    gridColumnEnd: { themeScope: null, getCSS: (v: string) => ({ gridColumnEnd: v }) },
    gridRowStart: { themeScope: null, getCSS: (v: string) => ({ gridRowStart: v }) },
    gridRowEnd: { themeScope: null, getCSS: (v: string) => ({ gridRowEnd: v }) },
    gridArea: { themeScope: null, getCSS: (v: string) => ({ gridArea: v }) },
    justifySelf: { themeScope: null, getCSS: (v: string) => ({ justifySelf: v }) },
    placeSelf: { themeScope: null, getCSS: (v: string) => ({ placeSelf: v }) },
};

export type GridSystemObj<T extends Theme> = Partial<{
    gridTemplateColumns: CSSProperties['gridTemplateColumns'];
    gridTemplateRows: CSSProperties['gridTemplateRows'];
    gridTemplateAreas: CSSProperties['gridTemplateAreas'];
    columnGap: ResponsiveThemedValue<T, 'spacing'>;
    rowGap: ResponsiveThemedValue<T, 'spacing'>;
    gap: ResponsiveThemedValue<T, 'spacing'>;
    justifyItems: CSSProperties['justifyItems'];
    gridColumnStart: CSSProperties['gridColumnStart'];
    gridColumnEnd: CSSProperties['gridColumnEnd'];
    gridRowStart: CSSProperties['gridRowStart'];
    gridRowEnd: CSSProperties['gridRowEnd'];
    gridArea: CSSProperties['gridArea'];
    justifySelf: CSSProperties['justifySelf'];
    placeSelf: CSSProperties['placeSelf'];
}>;
