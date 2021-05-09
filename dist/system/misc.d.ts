import { Theme } from '../theme/default-theme';
import { CssProperty, ScopedThemeKeyOrStringValue } from './system';
export declare const miscSystemDef: {
    display: {
        themeScope: null;
        getCSS: (v: string) => {
            display: string;
        };
    };
    clipPath: {
        themeScope: null;
        getCSS: (v: string) => {
            clipPath: string;
        };
    };
    listStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            listStyle: string;
        };
    };
    textDecoration: {
        themeScope: null;
        getCSS: (v: string) => {
            textDecoration: string;
        };
    };
    resize: {
        themeScope: null;
        getCSS: (v: string) => {
            resize: string;
        };
    };
    position: {
        themeScope: null;
        getCSS: (v: string) => {
            position: string;
        };
    };
    top: {
        themeScope: null;
        getCSS: (v: string) => {
            top: string;
        };
    };
    left: {
        themeScope: null;
        getCSS: (v: string) => {
            left: string;
        };
    };
    bottom: {
        themeScope: null;
        getCSS: (v: string) => {
            bottom: string;
        };
    };
    right: {
        themeScope: null;
        getCSS: (v: string) => {
            right: string;
        };
    };
    zIndex: {
        themeScope: null;
        getCSS: (v: string) => {
            zIndex: string;
        };
    };
    boxShadow: {
        themeScope: string;
        getCSS: (v: string) => {
            boxShadow: string;
        };
    };
    outline: {
        themeScope: null;
        getCSS: (v: string) => {
            outline: string;
        };
    };
    outlineColor: {
        themeScope: string;
        getCSS: (v: string) => {
            outlineColor: string;
        };
    };
    overflow: {
        themeScope: string;
        getCSS: (v: string) => {
            overflow: string;
        };
    };
    overflowX: {
        themeScope: string;
        getCSS: (v: string) => {
            overflowX: string;
        };
    };
    overflowY: {
        themeScope: string;
        getCSS: (v: string) => {
            overflowY: string;
        };
    };
};
export declare type MiscObj<T extends Theme> = Partial<{
    display: CssProperty<T, 'display'>;
    clipPath: CssProperty<T, 'clipPath'>;
    listStyle: CssProperty<T, 'listStyle'>;
    textDecoration: CssProperty<T, 'textDecoration'>;
    resize: CssProperty<T, 'resize'>;
    position: CssProperty<T, 'position'>;
    top: CssProperty<T, 'top'>;
    left: CssProperty<T, 'left'>;
    bottom: CssProperty<T, 'bottom'>;
    right: CssProperty<T, 'right'>;
    zIndex: CssProperty<T, 'zIndex'>;
    boxShadow: ScopedThemeKeyOrStringValue<T, 'shadow'>;
    outline: CssProperty<T, 'outline'>;
    outlineColor: ScopedThemeKeyOrStringValue<T, 'color'>;
    overflow: CssProperty<T, 'overflow'>;
    overflowX: CssProperty<T, 'overflowX'>;
    overflowY: CssProperty<T, 'overflowY'>;
}>;
