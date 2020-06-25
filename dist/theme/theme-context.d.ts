import React from 'react';
import { Theme } from './default-theme';
declare type Themes = {
    [key: string]: Theme;
};
declare type Ctx = {
    theme: Theme;
    setTheme: (t: string) => void;
};
export declare const ThemeContext: React.Context<Ctx>;
declare type Props<T extends Themes> = {
    themes: T;
    theme: keyof T;
    children: React.ReactNode;
};
export declare const ThemeProvider: <T extends Themes>({ themes, theme, children }: Props<T>) => JSX.Element;
export declare const useTheme: () => Ctx;
export {};
