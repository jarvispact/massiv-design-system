import { Theme } from '../theme/default-theme';
import { CssProperty } from './system';
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
export declare type TransitionObj<T extends Theme> = Partial<{
    transition: CssProperty<T, 'transition'>;
    transitionDelay: CssProperty<T, 'transitionDelay'>;
    transitionDuration: CssProperty<T, 'transitionDuration'>;
    transitionProperty: CssProperty<T, 'transitionProperty'>;
    transitionTimingFunction: CssProperty<T, 'transitionTimingFunction'>;
}>;
