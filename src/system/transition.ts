import { Theme } from '../theme/default-theme';
import { CssProperty } from './system';

export const transitionSystemDef = {
    transition: { themeScope: null, getCSS: (v: string) => ({ transition: v }) },
    transitionDelay: { themeScope: null, getCSS: (v: string) => ({ transitionDelay: v }) },
    transitionDuration: { themeScope: null, getCSS: (v: string) => ({ transitionDuration: v }) },
    transitionProperty: { themeScope: null, getCSS: (v: string) => ({ transitionProperty: v }) },
    transitionTimingFunction: { themeScope: null, getCSS: (v: string) => ({ transitionTimingFunction: v }) },
};

export type TransitionObj<T extends Theme> = Partial<{
    transition: CssProperty<T, 'transition'>;
    transitionDelay: CssProperty<T, 'transitionDelay'>;
    transitionDuration: CssProperty<T, 'transitionDuration'>;
    transitionProperty: CssProperty<T, 'transitionProperty'>;
    transitionTimingFunction: CssProperty<T, 'transitionTimingFunction'>;
}>;
