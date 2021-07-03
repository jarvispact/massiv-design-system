/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, CSSObject } from '@emotion/css';
import React from 'react';
import { objectKeys } from '../utils/object-keys';
import { Theme } from './default-theme';

const declareProperty = <ThemeScope extends string>(themeScope: ThemeScope, get?: (v: any) => CSSObject) => {
    return {
        themeScope,
        get,
    };
};

const config = {
    color: declareProperty('color'),
    backgroundColor: declareProperty('color'),
    bg: declareProperty('color', (v) => ({ backgroundColor: v })),

    padding: declareProperty('spacing'),
    p: declareProperty('spacing', (v) => ({ padding: v })),

    paddingTop: declareProperty('spacing'),
    pt: declareProperty('spacing', (v) => ({ paddingTop: v })),

    paddingLeft: declareProperty('spacing'),
    pl: declareProperty('spacing', (v) => ({ paddingLeft: v })),

    paddingRight: declareProperty('spacing'),
    pr: declareProperty('spacing', (v) => ({ paddingRight: v })),

    paddingBottom: declareProperty('spacing'),
    pb: declareProperty('spacing', (v) => ({ paddingBottom: v })),

    px: declareProperty('spacing', (v) => ({ paddingLeft: v, paddingRight: v })),
    py: declareProperty('spacing', (v) => ({ paddingTop: v, paddingBottom: v })),

    margin: declareProperty('spacing'),
    m: declareProperty('spacing', (v) => ({ margin: v })),

    marginTop: declareProperty('spacing'),
    mt: declareProperty('spacing', (v) => ({ marginTop: v })),

    marginLeft: declareProperty('spacing'),
    ml: declareProperty('spacing', (v) => ({ marginLeft: v })),

    marginRight: declareProperty('spacing'),
    mr: declareProperty('spacing', (v) => ({ marginRight: v })),

    marginBottom: declareProperty('spacing'),
    mb: declareProperty('spacing', (v) => ({ marginBottom: v })),

    mx: declareProperty('spacing', (v) => ({ marginLeft: v, marginRight: v })),
    my: declareProperty('spacing', (v) => ({ marginTop: v, marginBottom: v })),
};

type LiteralUnion<T extends U, U = string | number | symbol> =
    | T
    | (U & {
          __literal_union__?: never;
      });

type Config = typeof config;

type CustomConfig<T extends Theme> = {
    [Key in keyof Config]:
        | LiteralUnion<keyof T[Config[Key]['themeScope']]>
        | Array<LiteralUnion<keyof T[Config[Key]['themeScope']]>>;
};

type NestedInput<T extends Theme> = Partial<{
    [x: string]:
        | Omit<React.CSSProperties, keyof Config>
        | Partial<
              {
                  [Key in keyof Config]: LiteralUnion<keyof T[Config[Key]['themeScope']]>;
              }
          >;
}>;

type Input<T extends Theme> = Omit<React.CSSProperties, keyof Config> | Partial<CustomConfig<T>> | NestedInput<T>;

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

const transform = <T extends Theme>(input: Input<T>, theme: T, config: Config): CSSObject => {
    const breakpoint = theme.breakpoint as Record<string, string>;
    const breakpointValues = Object.values(breakpoint);

    return objectKeys(input).reduce((accum, key) => {
        const cfg = config[key as keyof Config];
        const inputValue = input[key] as string | Array<string>;

        if (!cfg) {
            if (typeof inputValue === 'string') {
                accum[key] = inputValue;
                return accum;
            } else if (isObject(inputValue)) {
                // @ts-ignore
                accum = { ...accum, [key]: { ...accum[key], ...transform(inputValue, theme, config) } };
                return accum;
            } else {
                return accum;
            }
        }

        if (Array.isArray(inputValue)) {
            inputValue.forEach((val, idx) => {
                // @ts-ignore
                const valueFromTheme = theme[cfg.themeScope][val];
                if (idx === 0) {
                    accum = {
                        ...accum,
                        ...(cfg.get ? cfg.get(valueFromTheme || val) : { [key]: valueFromTheme || val }),
                    };
                } else {
                    const mediaQueryKey = `@media screen and (min-width: ${breakpointValues[idx - 1]})`;
                    accum = {
                        ...accum,
                        [mediaQueryKey]: {
                            // @ts-ignore
                            ...accum[mediaQueryKey],
                            ...(cfg.get ? cfg.get(valueFromTheme || val) : { [key]: valueFromTheme || val }),
                        },
                    };
                }
            });
        } else {
            // @ts-ignore
            const valueFromTheme = theme[cfg.themeScope][inputValue];
            accum = {
                ...accum,
                ...(cfg.get ? cfg.get(valueFromTheme || inputValue) : { [key]: valueFromTheme || inputValue }),
            };
        }

        return accum;
    }, {} as CSSObject);
};

export const createMedia = <T extends Theme>(theme: T) => {
    return {
        minWidth: (mediaQueryKey: keyof T['breakpoint']) =>
            // @ts-ignore
            `@media screen and (min-width: ${theme.breakpoint[mediaQueryKey]})`,
        maxWidth: (mediaQueryKey: keyof T['breakpoint']) =>
            // @ts-ignore
            `@media screen and (max-width: ${theme.breakpoint[mediaQueryKey]})`,
    };
};

export const createThemedCss = <T extends Theme>(theme: T) => {
    return {
        css: (input: Input<T>) => css(transform(input, theme, config)),
        ...createMedia(theme),
    };
};

export const applyTheme = (selector: string, theme: Record<string, string>) => {
    const elem = document.querySelector(selector) as HTMLDivElement;
    if (elem) elem.classList.add(css(theme));
};
