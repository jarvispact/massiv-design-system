import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';
export declare const typographySystemDef: {
    fontFamily: {
        themeScope: string;
        getCSS: (v: string) => {
            fontFamily: string;
        };
    };
    fontSize: {
        themeScope: string;
        getCSS: (v: string) => {
            fontSize: string;
        };
    };
    fontWeight: {
        themeScope: string;
        getCSS: (v: string) => {
            fontWeight: string;
        };
    };
    lineHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            lineHeight: string;
        };
    };
    letterSpacing: {
        themeScope: string;
        getCSS: (v: string) => {
            letterSpacing: string;
        };
    };
    textOverflow: {
        themeScope: null;
        getCSS: (v: string) => {
            textOverflow: string;
        };
    };
    whiteSpace: {
        themeScope: null;
        getCSS: (v: string) => {
            whiteSpace: string;
        };
    };
    verticalAlign: {
        themeScope: null;
        getCSS: (v: string) => {
            verticalAlign: string;
        };
    };
    textTransform: {
        themeScope: null;
        getCSS: (v: string) => {
            textTransform: string;
        };
    };
};
export declare type TypographyObj<T extends Theme> = Partial<{
    fontFamily: ScopedThemeKeyOrStringValue<T, 'fontFamily'>;
    fontSize: ScopedThemeKeyOrStringValue<T, 'fontSize'>;
    fontWeight: ScopedThemeKeyOrStringValue<T, 'fontWeight'>;
    lineHeight: ScopedThemeKeyOrStringValue<T, 'lineHeight'>;
    letterSpacing: ScopedThemeKeyOrStringValue<T, 'letterSpacing'>;
    textOverflow: CssProperty<T, 'textOverflow'>;
    whiteSpace: CssProperty<T, 'whiteSpace'>;
    verticalAlign: CssProperty<T, 'verticalAlign'>;
    textTransform: CssProperty<T, 'textTransform'>;
}>;
