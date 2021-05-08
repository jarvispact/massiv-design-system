import { Theme } from '../theme/default-theme';

export type LiteralUnion<T extends U, U = string> = T | (U & { __literal_union__?: never });
export type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;

export type HTMLAttributesWithoutColor<HTMLElem = HTMLDivElement> = Omit<React.HTMLAttributes<HTMLElem>, 'color'>;
