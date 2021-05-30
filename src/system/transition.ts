import { CSSProperties } from 'react';

export const transitionSystemDef = {
    transition: { themeScope: null, getCSS: (v: string) => ({ transition: v }) },
    transitionDelay: { themeScope: null, getCSS: (v: string) => ({ transitionDelay: v }) },
    transitionDuration: { themeScope: null, getCSS: (v: string) => ({ transitionDuration: v }) },
    transitionProperty: { themeScope: null, getCSS: (v: string) => ({ transitionProperty: v }) },
    transitionTimingFunction: { themeScope: null, getCSS: (v: string) => ({ transitionTimingFunction: v }) },
};

export type TransitionSystemObj = Partial<{
    transition: CSSProperties['transition'];
    transitionDelay: CSSProperties['transitionDelay'];
    transitionDuration: CSSProperties['transitionDuration'];
    transitionProperty: CSSProperties['transitionProperty'];
    transitionTimingFunction: CSSProperties['transitionTimingFunction'];
}>;
