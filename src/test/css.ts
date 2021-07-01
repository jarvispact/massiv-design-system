/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { css as _css, CSSObject } from '@emotion/css';
import { Theme } from './default-theme';

// type Config<T extends Theme> = {
//     [Key in keyof CSSObject]: { themeScope: keyof T; get: (v: any) => CSSObject; t?: CSSObject[Key] };
// };

const config = {
    color: { themeScope: 'color' as const, get: (v: any) => ({ color: v }) },
    padding: { themeScope: 'spacing' as const, get: (v: any) => ({ padding: v }) },
    px: { themeScope: 'spacing' as const, get: (v: any) => ({ paddingLeft: v, paddingRight: v }) },
    py: { themeScope: 'spacing' as const, get: (v: any) => ({ paddingTop: v, paddingBottom: v }) },
};

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

type LiteralUnion<T extends U, U = string | number | symbol> =
    | T
    | (U & {
          __literal_union__?: never;
      });

type Config = typeof config;
type ConfigThemeScope<K extends keyof Config> = Config[K]['themeScope'];

type Input<T extends Theme> = Overwrite<
    { [Key in keyof CSSObject]: CSSObject[Key] },
    {
        [Key in keyof Config]?: LiteralUnion<keyof T[ConfigThemeScope<Key>]>;
    }
>;

const objectKeys = <T extends Record<string, unknown>>(record: T) => Object.keys(record) as Array<keyof T>;

const transform = <T extends Theme>(input: Input<T>, theme: T, config: Config) => {
    console.log({ input, theme, config });

    const output = objectKeys(input).reduce((accum, key) => {
        const cfg = config[key as keyof Config];

        if (cfg) {
            const val = input[key] as string;
            // @ts-ignore
            const valueFromTheme = theme[cfg.themeScope][val];
            // @ts-ignore
            accum = { ...accum, ...cfg.get(valueFromTheme || val) };
        } else {
            accum[key] = input[key];
        }

        return accum;
    }, {} as Input<T>);

    console.log({ output });
    return output;
};

export const createThemedCss = <T extends Theme>(theme: T) => {
    const css = (input: Input<T>) => _css(transform(input, theme, config) as CSSObject);
    return css;
};
