import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/theme/theme-provider';
import { defaultTheme } from '../src/theme/default-theme';
import { CssReset } from '../src/theme/css-reset';

addDecorator((StoryFn) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssReset />
            <StoryFn />
        </ThemeProvider>
    );
});
