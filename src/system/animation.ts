import { Theme } from '../theme/default-theme';
import { CssProperty } from './system';

export const animationSystemDef = {
    animation: { themeScope: null, getCSS: (v: string) => ({ animation: v }) },
    animationName: { themeScope: null, getCSS: (v: string) => ({ animationName: v }) },
    animationDuration: { themeScope: null, getCSS: (v: string) => ({ animationDuration: v }) },
    animationDelay: { themeScope: null, getCSS: (v: string) => ({ animationDelay: v }) },
    animationIterationCount: { themeScope: null, getCSS: (v: string) => ({ animationIterationCount: v }) },
    animationDirection: { themeScope: null, getCSS: (v: string) => ({ animationDirection: v }) },
    animationTimingFunction: { themeScope: null, getCSS: (v: string) => ({ animationTimingFunction: v }) },
    animationFillMode: { themeScope: null, getCSS: (v: string) => ({ animationFillMode: v }) },
};

export type AnimationObj<T extends Theme> = Partial<{
    animation: CssProperty<T, 'animation'>;
    animationName: CssProperty<T, 'animationName'>;
    animationDuration: CssProperty<T, 'animationDuration'>;
    animationDelay: CssProperty<T, 'animationDelay'>;
    animationIterationCount: CssProperty<T, 'animationIterationCount'>;
    animationDirection: CssProperty<T, 'animationDirection'>;
    animationTimingFunction: CssProperty<T, 'animationTimingFunction'>;
    animationFillMode: CssProperty<T, 'animationFillMode'>;
}>;
