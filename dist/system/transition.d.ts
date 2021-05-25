import { CSSProperties } from 'react';
export declare const transitionSystemDef: {
    transition: {
        themeScope: null;
        getCSS: (v: string) => {
            transition: string;
        };
    };
    transitionDelay: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionDelay: string;
        };
    };
    transitionDuration: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionDuration: string;
        };
    };
    transitionProperty: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionProperty: string;
        };
    };
    transitionTimingFunction: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionTimingFunction: string;
        };
    };
};
export declare type TransitionSystemObj = Partial<{
    transition: CSSProperties['transition'];
    transitionDelay: CSSProperties['transitionDelay'];
    transitionDuration: CSSProperties['transitionDuration'];
    transitionProperty: CSSProperties['transitionProperty'];
    transitionTimingFunction: CSSProperties['transitionTimingFunction'];
}>;
