import { CSSProperties } from 'react';
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
export declare type FlexSystemObj = Partial<{
    flexDirection: CSSProperties['flexDirection'];
    flexWrap: CSSProperties['flexWrap'];
    flexFlow: CSSProperties['flexFlow'];
    justifyContent: CSSProperties['justifyContent'];
    alignItems: CSSProperties['alignItems'];
    alignContent: CSSProperties['alignContent'];
    flexGrow: CSSProperties['flexGrow'];
    flexShrink: CSSProperties['flexShrink'];
    flexBasis: CSSProperties['flexBasis'];
    flex: CSSProperties['flex'];
    alignSelf: CSSProperties['alignSelf'];
}>;
