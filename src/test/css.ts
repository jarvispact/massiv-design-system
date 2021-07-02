/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { css, CSSObject } from '@emotion/css';
import { objectKeys } from '../utils/object-keys';
import { Theme } from './default-theme';

const config = {
    color: {
        themeScope: 'color' as const,
        get: (v: any) => ({ color: v }),
    },
    bg: {
        themeScope: 'color' as const,
        get: (v: any) => ({ backgroundColor: v }),
    },
    padding: {
        themeScope: 'spacing' as const,
        get: (v: any) => ({ padding: v }),
    },
    px: {
        themeScope: 'spacing' as const,
        get: (v: any) => ({ paddingLeft: v, paddingRight: v }),
    },
    py: {
        themeScope: 'spacing' as const,
        get: (v: any) => ({ paddingTop: v, paddingBottom: v }),
    },
};

type LiteralUnion<T extends U, U = string | number | symbol> =
    | T
    | (U & {
          __literal_union__?: never;
      });

type Config = typeof config;

type Input<T extends Theme> =
    | CSSObject
    | Partial<
          {
              [Key in keyof Config]: LiteralUnion<keyof T[Config[Key]['themeScope']]>;
          } & {
              [x: string]: {
                  [Key in keyof Config]: LiteralUnion<keyof T[Config[Key]['themeScope']]>;
              };
          }
      >;

const isObject = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);

const transform = <T extends Theme>(input: Input<T>, theme: T, config: Config): CSSObject => {
    const output = objectKeys(input).reduce((accum, key) => {
        const cfg = config[key as keyof Config];
        const inputValue = input[key];

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

        // @ts-ignore
        const valueFromTheme = theme[cfg.themeScope][inputValue];
        // @ts-ignore
        accum = { ...accum, ...cfg.get(valueFromTheme || inputValue) };
        return accum;
    }, {} as Input<T>);

    return output as CSSObject;
};

export const createThemedCss = <T extends Theme>(theme: T) => {
    return (input: Input<T>) => css(transform(input, theme, config));
};

export const createMedia = <T extends Theme>(theme: T) => {
    // @ts-ignore
    return (mediaQueryKey: keyof T['breakpoint']) => `@media(min-width: ${theme.breakpoint[mediaQueryKey]})`;
};

export const applyTheme = (selector: string, theme: Record<string, string>) => {
    const elem = document.querySelector(selector) as HTMLDivElement;
    if (elem) elem.className = css(theme);
};
