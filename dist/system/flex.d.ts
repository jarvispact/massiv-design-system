import { Theme } from '../theme/default-theme';
import { CssProperty } from './system';
export declare const flexSystemDef: {
    flexDirection: {
        themeScope: null;
        getCSS: (v: string) => {
            flexDirection: string;
        };
    };
    flexWrap: {
        themeScope: null;
        getCSS: (v: string) => {
            flexWrap: string;
        };
    };
    flexFlow: {
        themeScope: null;
        getCSS: (v: string) => {
            flexFlow: string;
        };
    };
    justifyContent: {
        themeScope: null;
        getCSS: (v: string) => {
            justifyContent: string;
        };
    };
    alignItems: {
        themeScope: null;
        getCSS: (v: string) => {
            alignItems: string;
        };
    };
    alignContent: {
        themeScope: null;
        getCSS: (v: string) => {
            alignContent: string;
        };
    };
    flexGrow: {
        themeScope: null;
        getCSS: (v: string) => {
            flexGrow: string;
        };
    };
    flexShrink: {
        themeScope: null;
        getCSS: (v: string) => {
            flexShrink: string;
        };
    };
    flexBasis: {
        themeScope: null;
        getCSS: (v: string) => {
            flexBasis: string;
        };
    };
    flex: {
        themeScope: null;
        getCSS: (v: string) => {
            flex: string;
        };
    };
    alignSelf: {
        themeScope: null;
        getCSS: (v: string) => {
            alignSelf: string;
        };
    };
};
export declare type FlexObj<T extends Theme> = Partial<{
    flexDirection: CssProperty<T, 'flexDirection'>;
    flexWrap: CssProperty<T, 'flexWrap'>;
    flexFlow: CssProperty<T, 'flexFlow'>;
    justifyContent: CssProperty<T, 'justifyContent'>;
    alignItems: CssProperty<T, 'alignItems'>;
    alignContent: CssProperty<T, 'alignContent'>;
    flexGrow: CssProperty<T, 'flexGrow'>;
    flexShrink: CssProperty<T, 'flexShrink'>;
    flexBasis: CssProperty<T, 'flexBasis'>;
    flex: CssProperty<T, 'flex'>;
    alignSelf: CssProperty<T, 'alignSelf'>;
}>;
