/* eslint-disable @typescript-eslint/ban-ts-comment */
import { css } from 'styled-components';
import { ThemeScope, Theme } from '../theme';
import { isNil } from './is-nil';
import { path } from './path';
import { omit } from './omit';

const getMediaQueryForBreakpoint = (breakpoint: string, cssArray: string[]) => {
    const mediaQuery = css`
        @media screen and (min-width: ${breakpoint}) {
            ${cssArray.join('\n')}
        }
    `;
    return mediaQuery.join('');
};

const getValue = <PropsWithTheme extends { theme: Theme }>(
    key: string,
    themeScope: ThemeScope | null,
    index: number,
    props: PropsWithTheme,
) => {
    // @ts-ignore
    const valueArray = Array.isArray(props[key]) ? (props[key] as string[]) : ([props[key]] as string[]);
    if (isNil(valueArray[index])) return undefined;

    return themeScope
        ? path(valueArray[index].split('.'), props.theme[themeScope]) || valueArray[index]
        : valueArray[index];
};

export type CssPropertyConfig = {
    cssProperty: string;
    componentProps: string[];
    themeScope: ThemeScope | null;
};

export const buildCss = <PropsWithTheme extends { theme: Theme }>(propertyConfigList: CssPropertyConfig[]) => (
    props: PropsWithTheme,
) => {
    const { theme } = props;
    const { screen } = theme;
    const componentProps = omit(['as', 'children', 'theme'], props);

    const cssArray = Object.keys(componentProps).map((componentPropKey) => {
        const configForCssProp = propertyConfigList.find((config) => config.componentProps.includes(componentPropKey));
        if (!configForCssProp) return undefined;
        const value = getValue(componentPropKey, configForCssProp.themeScope, 0, props);
        return value ? `${configForCssProp.cssProperty}: ${value};` : undefined;
    });

    const mediaQueryArray = Object.values(screen).map((breakPoint, idx) => {
        const valueIdx = idx + 1;
        const breakPointBuffer: string[] = [];

        Object.keys(componentProps).forEach((componentPropKey) => {
            const configForCssProp = propertyConfigList.find((c) => c.componentProps.includes(componentPropKey));
            if (configForCssProp) {
                const value = getValue(componentPropKey, configForCssProp.themeScope, valueIdx, props);
                if (value) breakPointBuffer.push(`${configForCssProp.cssProperty}: ${value};`);
            }
        });

        return getMediaQueryForBreakpoint(breakPoint, breakPointBuffer);
    });

    const allCss = [...cssArray, ...mediaQueryArray].filter(Boolean);
    return allCss.length ? allCss.join('\n') : undefined;
};
