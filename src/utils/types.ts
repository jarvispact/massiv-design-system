import { Theme } from '../theme/default-theme';

export type LiteralUnion<T extends U, U = string> = T | (U & { __literal_union__?: never });
export type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;

type BreakPointKey<T extends Theme> = keyof T['breakpoint'];

export type ResponsiveThemedValue<T extends Theme, S extends keyof T> =
    | LiteralUnion<UnpackThemeScope<T, S>>
    | Array<LiteralUnion<UnpackThemeScope<T, S>>>
    | (Partial<{ [K in BreakPointKey<T>]: LiteralUnion<UnpackThemeScope<T, S>> }> & {
          value?: LiteralUnion<UnpackThemeScope<T, S>>;
      });

export type HTMLAttributesWithoutStyleProps<HTMLAttributes> = Omit<HTMLAttributes, 'color'>;
