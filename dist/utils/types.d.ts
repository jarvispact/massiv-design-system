import { Theme } from '../theme/default-theme';
declare type LiteralUnion<T extends U, U = string> = T | (U & {
    __literal_union__?: never;
});
declare type UnpackThemeScope<T extends Theme, K extends keyof T> = Extract<keyof T[K], string>;
export declare type ResponsiveProp<T extends string = string> = LiteralUnion<T> | Array<LiteralUnion<T>>;
export declare type ResponsiveThemeProp<T extends Theme, K extends keyof T> = ResponsiveProp<UnpackThemeScope<T, K>>;
export {};
