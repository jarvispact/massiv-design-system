import React from 'react';
import { createMedia, createThemedCss } from '../test/css';
import { createTheme, createThemeVariant } from '../test/default-theme';
// import { theme } from './theme';

const [theme, light] = createTheme({
    breakpoint: {
        s: '640px',
        m: '768px',
        l: '1024px',
        xl: '1280px',
        xxl: '1600px',
        xxxl: '1920px',
    },
    color: {
        wat: '#ff0000',
        nope: '#ffff00',
    },
    spacing: {
        small: '1px',
    },
});

const dark = createThemeVariant(theme, {
    color: {
        wat: '#0000ff',
        nope: '#ffff00',
    },
    spacing: {
        small: '4px',
    },
});

const other = createThemeVariant(theme, {
    color: {
        wat: '#ff00ff',
        nope: '#ffff00',
    },
    spacing: {
        small: '8px',
    },
});

console.log({ theme, dark, other, light });

const css = createThemedCss(theme);
const media = createMedia(theme);

const style = css({
    color: 'wat',
    padding: 'small',
    textAlign: 'center',
    [media('s')]: {
        textAlign: 'left',
        color: 'nope',
    },
});

const map = {
    light,
    dark,
    other,
};

export const setTheme = (theme?: keyof typeof map) => {
    const reactRoot = document.querySelector(':root') as HTMLDivElement;
    if (theme) {
        reactRoot.className = css(map[theme]);
    } else {
        reactRoot.className = css({
            '@media (prefers-color-scheme: light)': light,
            '@media (prefers-color-scheme: dark)': dark,
        });
    }
};

setTheme();

export const Heading = () => {
    return (
        <h1 className={style} onClick={() => setTheme('light')}>
            hello world
        </h1>
    );
};
