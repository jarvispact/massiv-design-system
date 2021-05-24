import { CSSProperties } from 'react';
export declare const animationSystemDef: {
    animation: {
        themeScope: null;
        getCSS: (v: string) => {
            animation: string;
        };
    };
    animationName: {
        themeScope: null;
        getCSS: (v: string) => {
            animationName: string;
        };
    };
    animationDuration: {
        themeScope: null;
        getCSS: (v: string) => {
            animationDuration: string;
        };
    };
    animationDelay: {
        themeScope: null;
        getCSS: (v: string) => {
            animationDelay: string;
        };
    };
    animationIterationCount: {
        themeScope: null;
        getCSS: (v: string) => {
            animationIterationCount: string;
        };
    };
    animationDirection: {
        themeScope: null;
        getCSS: (v: string) => {
            animationDirection: string;
        };
    };
    animationTimingFunction: {
        themeScope: null;
        getCSS: (v: string) => {
            animationTimingFunction: string;
        };
    };
    animationFillMode: {
        themeScope: null;
        getCSS: (v: string) => {
            animationFillMode: string;
        };
    };
};
export declare type AnimationSystemObj = Partial<{
    animation: CSSProperties['animation'];
    animationName: CSSProperties['animationName'];
    animationDuration: CSSProperties['animationDuration'];
    animationDelay: CSSProperties['animationDelay'];
    animationIterationCount: CSSProperties['animationIterationCount'];
    animationDirection: CSSProperties['animationDirection'];
    animationTimingFunction: CSSProperties['animationTimingFunction'];
    animationFillMode: CSSProperties['animationFillMode'];
}>;
