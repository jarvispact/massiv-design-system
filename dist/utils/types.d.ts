import { Theme } from '../theme/default-theme';
export declare type LiteralUnion<T extends U, U = string> = T | (U & {
    __literal_union__?: never;
});
export declare type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;
declare type BreakPointKey<T extends Theme> = keyof T['breakpoint'];
export declare type ResponsiveThemedValue<T extends Theme, S extends keyof T> = LiteralUnion<UnpackThemeScope<T, S>> | Array<LiteralUnion<UnpackThemeScope<T, S>>> | (Partial<{
    [K in BreakPointKey<T>]: LiteralUnion<UnpackThemeScope<T, S>>;
}> & {
    value?: LiteralUnion<UnpackThemeScope<T, S>>;
});
export declare type HTMLAttributesWithoutStyleProps<HTMLAttributes> = Omit<HTMLAttributes, 'color'>;
export {};
