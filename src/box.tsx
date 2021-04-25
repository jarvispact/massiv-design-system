import { css } from '@emotion/css';
import React from 'react';
import { useTheme } from './theme-provider';

export const Box = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <div className={css({ color: theme.color.error700 })}>hello emotion</div>
            <button onClick={() => setTheme({ ...theme, color: { ...theme.color, error700: '#ff0000' } })}>change theme</button>
        </>
    );
};
