import { CSSProperties } from 'react';
import { Theme, ThemeScope } from '../theme/default-theme';

// export type Definition<T extends Theme> = {
//     themeScope: keyof T;
//     getCSS: (value: string) => CSSProperties;
// };

// export type Definitions<T extends Theme> = Record<string, Definition<T>>;

// type LiteralUnion<T extends U, U = string> = T | (U & { __literal_union__?: never });
// type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;

type BreakPointKey<T extends Theme> = keyof T['breakpoint'];

type CssNestedObj<T extends Theme> = Partial<{ [K in BreakPointKey<T>]: string }> & {
    value?: string;
    hover?: string;
    focus?: string;
    hocus?: string;
};

// export type CssObj<T extends Theme, K extends string> = Record<K, string | CssNestedObj<T>>;

export type CssObj<K extends string, T extends Theme> = Partial<Record<K, string | CssNestedObj<T>>>;
