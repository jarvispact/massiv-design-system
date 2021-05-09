/// <reference types="react" />
import { Theme } from '../theme/default-theme';
export declare type LiteralUnion<T extends U, U = string> = T | (U & {
    __literal_union__?: never;
});
export declare type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;
export declare type HTMLAttributesWithoutColor<HTMLElem = HTMLDivElement> = Omit<React.HTMLAttributes<HTMLElem>, 'color'>;
