/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SystemDefinitionObj, SystemObj } from '../system/system';
import { Theme } from '../theme/default-theme';

const isKeyInIgnoredSelectors = <T extends Theme>(theme: T, key: string) =>
    ['value', 'focus', 'hover', 'hocus', ...Object.keys(theme.breakpoint)].includes(key);

export const buildCssObj = <T extends Theme>(theme: T, definitions: SystemDefinitionObj<T>, obj: SystemObj<T>) => {
    const reducer = (accum: Record<string, unknown>, key: string) => {
        const def = definitions[key];
        if (!def) return accum;
        const themeScope = def.themeScope ? theme[def.themeScope] : null;

        // @ts-ignore
        const value = obj[key];

        if (def) {
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.keys(value).forEach((key) => {
                    if (!isKeyInIgnoredSelectors(theme, key)) {
                        // @ts-ignore
                        accum = { ...accum, [key]: { ...accum[key], ...def.getCSS(themeScope ? themeScope[value[key]] || value[key] : value[key]) } };
                    }
                });

                if (value.value) {
                    // @ts-ignore
                    accum = { ...accum, ...def.getCSS(themeScope ? themeScope[value.value] || value.value : value.value) };
                }
                if (value.hover) {
                    // @ts-ignore
                    accum = { ...accum, '&:hover': { ...accum['&:hover'], ...def.getCSS(themeScope ? themeScope[value.hover] || value.hover : value.hover) } };
                }
                if (value.focus) {
                    // @ts-ignore
                    accum = { ...accum, '&:focus': { ...accum['&:focus'], ...def.getCSS(themeScope ? themeScope[value.focus] || value.focus : value.focus) } };
                }
                if (value.hocus) {
                    accum = {
                        ...accum,
                        '&:hover': {
                            // @ts-ignore
                            ...accum['&:hover'],
                            ...def.getCSS(themeScope ? themeScope[value.hocus] || value.hocus : value.hocus),
                        },
                        '&:focus': {
                            // @ts-ignore
                            ...accum['&:focus'],
                            ...def.getCSS(themeScope ? themeScope[value.hocus] || value.hocus : value.hocus),
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
                            [mediaQueryKey]: {
                                // @ts-ignore
                                ...accum[mediaQueryKey],
                                ...def.getCSS(themeScope ? themeScope[value[breakpointKey]] || value[breakpointKey] : value[breakpointKey]),
                            },
                        };
                    }
                });
            } else {
                // @ts-ignore
                accum = { ...accum, ...def.getCSS(themeScope ? themeScope[value] || value : value) };
            }
        }
        return accum;
    };

    return Object.keys(obj).reduce(reducer, {});
};
