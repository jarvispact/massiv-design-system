import { Theme } from '../theme/default-theme';
import { ScopedThemeKeyOrStringValue } from './system';
export declare const paddingSystemDef: {
    padding: {
        themeScope: string;
        getCSS: (v: string) => {
            padding: string;
        };
    };
    p: {
        themeScope: string;
        getCSS: (v: string) => {
            padding: string;
        };
    };
    pt: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingTop: string;
        };
    };
    pr: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingRight: string;
        };
    };
    pb: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingBottom: string;
        };
    };
    pl: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingLeft: string;
        };
    };
    px: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingLeft: string;
            paddingRight: string;
        };
    };
    py: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingTop: string;
            paddingBottom: string;
        };
    };
};
declare type PaddingKey = keyof typeof paddingSystemDef;
export declare type PaddingSystemObj<T extends Theme> = Partial<Record<PaddingKey, ScopedThemeKeyOrStringValue<T, 'spacing'>>>;
export {};
