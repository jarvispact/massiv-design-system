import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/theme';
import theme from './theme';
import './global.css';

const themes = {
    default: theme,
};

const loadStories = () => {
    require('../stories/box.story.js');
    require('../stories/fonts.story.js');
}

const GlobalDecorator = storyFn => (
    <Theme themes={themes} activeTheme="default">
        {storyFn()}
    </Theme>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
