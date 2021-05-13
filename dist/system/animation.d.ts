import { Theme } from '../theme/default-theme';
import { CssProperty } from './system';
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
export declare type AnimationSystemObj<T extends Theme> = Partial<{
    animation: CssProperty<T, 'animation'>;
    animationName: CssProperty<T, 'animationName'>;
    animationDuration: CssProperty<T, 'animationDuration'>;
    animationDelay: CssProperty<T, 'animationDelay'>;
    animationIterationCount: CssProperty<T, 'animationIterationCount'>;
    animationDirection: CssProperty<T, 'animationDirection'>;
    animationTimingFunction: CssProperty<T, 'animationTimingFunction'>;
    animationFillMode: CssProperty<T, 'animationFillMode'>;
}>;
