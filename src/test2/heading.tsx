import { CSSObject } from '@emotion/css';
import React from 'react';
import { createThemedCss } from '../test/css';
import { createTheme, createThemeVariant } from '../test/default-theme';

const declareProperty = <ThemeScope extends string>(themeScope: ThemeScope, get?: (v: any) => CSSObject) => {
    return {
        themeScope,
        get,
    };
};

const config = {
    colorz: declareProperty('color'),
    paddingz: declareProperty('spacing'),
};

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
        small: '2px',
        medium: '4px',
        large: '8px',
    },
});

const dark = createThemeVariant(theme, {
    color: {
        wat: '#0000ff',
        nope: '#ffff00',
    },
    spacing: {
        small: '2px',
        medium: '4px',
        large: '8px',
    },
});

const other = createThemeVariant(theme, {
    color: {
        wat: '#ff00ff',
        nope: '#ffff00',
    },
    spacing: {
        small: '2px',
        medium: '4px',
        large: '8px',
    },
});

console.log({ theme, dark, other, light });

const { css, minWidth } = createThemedCss(theme);

const style = css({
    color: 'wat',
    bg: ['nope', 'wat', 'nope'],
    [minWidth('s')]: {
        padding: 'small',
        margin: 'small',
    },
    [minWidth('m')]: {
        padding: 'large',
        margin: 'large',
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
