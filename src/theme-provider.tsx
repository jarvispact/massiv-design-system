/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext } from 'react';
import { defaultTheme, Theme } from './default-theme';

type Ctx<T extends Theme> = {
    theme: T;
    setTheme: React.Dispatch<React.SetStateAction<T>>;
};

export const ThemeContext = React.createContext<Ctx<Theme>>({
    theme: defaultTheme,
    setTheme: () => {},
});

type Props<T extends Theme> = {
    theme: T;
    children: React.ReactNode;
};

export const ThemeProvider = <T extends Theme>({ theme, children }: Props<T>) => {
    const [activeTheme, setActiveTheme] = useState(theme);

    const context = {
        theme: activeTheme,
        setTheme: setActiveTheme,
    };

    return <ThemeContext.Provider value={context as any}>{children}</ThemeContext.Provider>;
};

export const useTheme = <T extends Theme>() => useContext<Ctx<T>>((ThemeContext as any) as React.Context<Ctx<T>>);
