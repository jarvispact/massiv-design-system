/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Theme } from '../theme/default-theme';
import { SystemConfig } from '../system/system';

type CssObj = Record<string, string | Record<string, string>>;

export const createCssObj = <T extends Theme>(config: Array<SystemConfig>, props: Record<string, unknown | Array<unknown>>, theme: T): CssObj => {
    return config.reduce((accum, item) => {
        const themeScope = theme[item.themeScope];
        const prop = (Array.isArray(props[item.componentProp]) ? props[item.componentProp] : [props[item.componentProp]]) as Array<string>;

        // @ts-ignore
        accum[item.cssProp] = themeScope[prop[0]] || prop[0];

        Object.keys(theme.breakpoint).forEach((breakpointKey, idx) => {
            //@ts-ignore
            const breakpoint = theme.breakpoint[breakpointKey];
            const index = idx + 1;
            if (!prop[index]) return;
            if (!accum[`@media(min-width: ${breakpoint})`]) {
                accum[`@media(min-width: ${breakpoint})`] = {};
            }

            // @ts-ignore
            accum[`@media(min-width: ${breakpoint})`][item.cssProp] = themeScope[prop[index]] || prop[index];
        });

        return accum;
    }, {} as CssObj);
};
