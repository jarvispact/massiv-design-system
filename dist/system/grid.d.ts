import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';
export declare const gridSystemDef: {
    gridTemplateColumns: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateColumns: string;
        };
    };
    gridTemplateRows: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateRows: string;
        };
    };
    gridTemplateAreas: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateAreas: string;
        };
    };
    columnGap: {
        themeScope: string;
        getCSS: (v: string) => {
            columnGap: string;
        };
    };
    rowGap: {
        themeScope: string;
        getCSS: (v: string) => {
            rowGap: string;
        };
    };
    gap: {
        themeScope: string;
        getCSS: (v: string) => {
            gap: string;
        };
    };
    justifyItems: {
        themeScope: null;
        getCSS: (v: string) => {
            justifyItems: string;
        };
    };
    gridColumnStart: {
        themeScope: null;
        getCSS: (v: string) => {
            gridColumnStart: string;
        };
    };
    gridColumnEnd: {
        themeScope: null;
        getCSS: (v: string) => {
            gridColumnEnd: string;
        };
    };
    gridRowStart: {
        themeScope: null;
        getCSS: (v: string) => {
            gridRowStart: string;
        };
    };
    gridRowEnd: {
        themeScope: null;
        getCSS: (v: string) => {
            gridRowEnd: string;
        };
    };
    gridArea: {
        themeScope: null;
        getCSS: (v: string) => {
            gridArea: string;
        };
    };
    justifySelf: {
        themeScope: null;
        getCSS: (v: string) => {
            justifySelf: string;
        };
    };
    placeSelf: {
        themeScope: null;
        getCSS: (v: string) => {
            placeSelf: string;
        };
    };
};
export declare type GridSystemObj<T extends Theme> = Partial<{
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
