import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/utils/Theme';
import theme from './theme';

const loadStories = () => {
    require('../src/atoms/Button/Button.story.js');
}

const GlobalDecorator = storyFn => (
    <Theme theme={theme}>
        {storyFn()}
    </Theme>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
