import { CSSProperties } from 'react';

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

export type AnimationSystemObj = Partial<{
    animation: CSSProperties['animation'];
    animationName: CSSProperties['animationName'];
    animationDuration: CSSProperties['animationDuration'];
    animationDelay: CSSProperties['animationDelay'];
    animationIterationCount: CSSProperties['animationIterationCount'];
    animationDirection: CSSProperties['animationDirection'];
    animationTimingFunction: CSSProperties['animationTimingFunction'];
    animationFillMode: CSSProperties['animationFillMode'];
}>;
