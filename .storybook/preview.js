import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/theme/theme-context';
import { defaultTheme } from '../src/theme/default-theme';
import { GlobalStyle } from '../src/theme';
import './global.css';

const themes = {
    default: { ...defaultTheme, icon: { className: 'material-icons' } },
};

addDecorator((StoryFn) => {
    return (
        <ThemeProvider themes={themes} theme="default">
            <GlobalStyle />
            <StoryFn />
        </ThemeProvider>
    );
});
