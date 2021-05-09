import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';
export declare const marginSystemDef: {
    margin: {
        themeScope: string;
        getCSS: (v: string) => {
            margin: string;
        };
    };
    m: {
        themeScope: string;
        getCSS: (v: string) => {
            margin: string;
        };
    };
    mt: {
        themeScope: string;
        getCSS: (v: string) => {
            marginTop: string;
        };
    };
    mr: {
        themeScope: string;
        getCSS: (v: string) => {
            marginRight: string;
        };
    };
    mb: {
        themeScope: string;
        getCSS: (v: string) => {
            marginBottom: string;
        };
    };
    ml: {
        themeScope: string;
        getCSS: (v: string) => {
            marginLeft: string;
        };
    };
    mx: {
        themeScope: string;
        getCSS: (v: string) => {
            marginLeft: string;
            marginRight: string;
        };
    };
    my: {
        themeScope: string;
        getCSS: (v: string) => {
            marginTop: string;
            marginBottom: string;
        };
    };
};
declare type MarginKey = keyof typeof marginSystemDef;
export declare type MarginObj<T extends Theme> = Partial<Record<MarginKey, ScopedThemeKeyOrStringValue<T, 'spacing'>>>;
export {};
