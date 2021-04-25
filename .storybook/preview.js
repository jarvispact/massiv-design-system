import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/theme-provider';
import { defaultTheme } from '../src/default-theme';
import { CssReset } from '../src/css-reset';

addDecorator((StoryFn) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssReset />
            <StoryFn />
        </ThemeProvider>
    );
});
