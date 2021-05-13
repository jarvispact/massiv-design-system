import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';

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
    gridTemplateColumns: CssProperty<T, 'gridTemplateColumns'>;
    gridTemplateRows: CssProperty<T, 'gridTemplateRows'>;
    gridTemplateAreas: CssProperty<T, 'gridTemplateAreas'>;
    columnGap: ScopedThemeKeyOrStringValue<T, 'spacing'>;
    rowGap: ScopedThemeKeyOrStringValue<T, 'spacing'>;
    gap: ScopedThemeKeyOrStringValue<T, 'spacing'>;
    justifyItems: CssProperty<T, 'justifyItems'>;
    gridColumnStart: CssProperty<T, 'gridColumnStart'>;
    gridColumnEnd: CssProperty<T, 'gridColumnEnd'>;
    gridRowStart: CssProperty<T, 'gridRowStart'>;
    gridRowEnd: CssProperty<T, 'gridRowEnd'>;
    gridArea: CssProperty<T, 'gridArea'>;
    justifySelf: CssProperty<T, 'justifySelf'>;
    placeSelf: CssProperty<T, 'placeSelf'>;
}>;
