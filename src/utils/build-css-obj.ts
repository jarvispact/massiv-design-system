/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CSSProperties } from 'react';
import { CssObj, Definitions } from '../system/system';
import { Theme } from '../theme/default-theme';

// type Definition<T extends Theme> = {
//     themeScope: keyof T;
//     getCSS: (value: string) => CSSProperties;
// };

// type Definitions<T extends Theme> = Record<string, Definition<T>>;

// type BreakPointKey<T extends Theme> = keyof T['breakpoint'];

// type CssNestedObj<T extends Theme> = { [K in BreakPointKey<T>]: string } & {
//     value?: string;
//     hover?: string;
//     focus?: string;
//     hocus?: string;
// };

// type CssObj<T extends Theme> = Record<string, string | Partial<CssNestedObj<T>>>;

export const buildCssObj = <T extends Theme>(theme: T, definitions: Definitions<T>, obj: CssObj<T>) => {
    const reducer = (accum: Record<string, unknown>, key: string) => {
        const themeScope = theme[definitions[key].themeScope];
        const value = obj[key];

        if (definitions[key]) {
            if (typeof value === 'object' && !Array.isArray(value)) {
                if (value.value) {
                    // @ts-ignore
                    accum = { ...accum, ...definitions[key].getCSS(themeScope[value.value] || value.value) };
                }
                if (value.hover) {
                    // @ts-ignore
                    accum = { ...accum, '&:hover': { ...accum['&:hover'], ...definitions[key].getCSS(themeScope[value.hover] || value.hover) } };
                }
                if (value.focus) {
                    // @ts-ignore
                    accum = { ...accum, '&:focus': { ...accum['&:focus'], ...definitions[key].getCSS(themeScope[value.focus] || value.focus) } };
                }
                if (value.hocus) {
                    accum = {
                        ...accum,
                        '&:hover': {
                            // @ts-ignore
                            ...accum['&:hover'],
                            ...definitions[key].getCSS(themeScope[value.hocus] || value.hocus),
                        },
                        '&:focus': {
                            // @ts-ignore
                            ...accum['&:focus'],
                            ...definitions[key].getCSS(themeScope[value.hocus] || value.hocus),
                        },
                    };
                }

                Object.keys(theme.breakpoint).forEach((breakpointKey) => {
                    // @ts-ignore
                    const mediaQueryKey = `@media(min-width: ${theme.breakpoint[breakpointKey]})`;
                    // @ts-ignore
                    if (value[breakpointKey]) {
                        accum = {
                            ...accum,
                            // @ts-ignore
                            [mediaQueryKey]: { ...accum[mediaQueryKey], ...definitions[key].getCSS(themeScope[value[breakpointKey]] || value[breakpointKey]) },
                        };
                    }
                });
            } else {
                // @ts-ignore
                accum = { ...accum, ...definitions[key].getCSS(themeScope[value] || value) };
            }
        }
        return accum;
    };

    return Object.keys(obj).reduce(reducer, {});
};
