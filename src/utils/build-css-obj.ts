/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CSSProperties } from 'react';
import { CustomSelectorSystemObject, SystemDefinitionObj, SystemObj } from '../system/system';
import { Theme } from '../theme/default-theme';
import { objectKeys } from './object-keys';

const objectProps = ['value'] as const;

// @ts-ignore
const getValueFromThemeScopeWithFallback = <T extends Theme, K extends keyof T>(value: string, theme: T, themeScope: K | null) => themeScope ? theme[themeScope][value] || value : value;

export const buildCssObj = <T extends Theme>(theme: T, definitions: SystemDefinitionObj<T, keyof SystemObj<T>>, obj: SystemObj<T>) => {
    const keys = objectKeys(obj);
    const propertyObjectKeys = [...objectKeys(theme.breakpoint), ...objectProps];
    const breakpointValues = Object.values(theme.breakpoint);
    let retVal: CSSProperties = {};

    type ObjectKey = typeof propertyObjectKeys[number];

    keys.forEach((key) => {
        if (key === 'customSelectors') {
            const value = obj[key] as Record<string, CustomSelectorSystemObject<T>>;

            objectKeys(value).forEach((selector) => {
                const customObj = value[selector];

                objectKeys(customObj).forEach((customObjKey) => {
                    const def = definitions[customObjKey];
                    if (!def) return;

                    retVal = {
                        ...retVal,
                        // @ts-ignore
                        [selector]: {
                            // @ts-ignore
                            ...retVal[selector],
                            // @ts-ignore
                            ...def.getCSS(getValueFromThemeScopeWithFallback(customObj[customObjKey], theme, def.themeScope)),
                        },
                    };
                });
            });

            return;
        }

        const def = definitions[key];
        if (!def) return;

        const value = obj[key] as string | Array<string> | Record<ObjectKey, string>;

        if (typeof value === 'string') {
            retVal = { ...retVal, ...def.getCSS(getValueFromThemeScopeWithFallback(value, theme, def.themeScope)) };
        } else if (Array.isArray(value)) {
            value.forEach((val, idx) => {
                if (idx === 0) {
                    retVal = {
                        ...retVal,
                        ...def.getCSS(getValueFromThemeScopeWithFallback(val, theme, def.themeScope)),
                    };
                } else {
                    const mediaQueryKey = `@media(min-width: ${breakpointValues[idx - 1]})`;
                    retVal = {
                        ...retVal,
                        [mediaQueryKey]: {
                            // @ts-ignore
                            ...retVal[mediaQueryKey],
                            ...def.getCSS(getValueFromThemeScopeWithFallback(val, theme, def.themeScope)),
                        },
                    };
                }
            });
        } else {
            if (!value) return;
            objectKeys(value).forEach((key) => {
                if (key === 'value') {
                    retVal = {
                        ...retVal,
                        ...def.getCSS(getValueFromThemeScopeWithFallback(value.value, theme, def.themeScope)),
                    };
                } else {
                    const mediaQueryKey = `@media(min-width: ${theme.breakpoint[key]})`;
                    retVal = {
                        ...retVal,
                        [mediaQueryKey]: {
                            // @ts-ignore
                            ...retVal[mediaQueryKey],
                            ...def.getCSS(getValueFromThemeScopeWithFallback(value[key], theme, def.themeScope)),
                        },
                    };
                }
            });
        }
    });

    return retVal;
};
