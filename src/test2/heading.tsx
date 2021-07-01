import React from 'react';
import { createThemedCss } from '../test/css';
import { theme } from './theme';

const css = createThemedCss(theme);

const style = css({
    color: 'primary500',
    px: '12',
    py: '14',
});

export const Heading = () => {
    return <h1 className={style}>hello world</h1>;
};
