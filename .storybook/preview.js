import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/theme/theme-provider';
import { defaultTheme } from '../src/theme/default-theme';
import { GlobalStyle } from '../src/global-style';

const themes = {
    default: { ...defaultTheme },
};

addDecorator((StoryFn) => {
    return (
        <ThemeProvider themes={themes} theme="default">
            <GlobalStyle />
            <StoryFn />
        </ThemeProvider>
    );
});
