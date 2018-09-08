import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/utils/Theme';
import defaultTheme from './default-theme';
import './global.css';

const themes = {
    default: defaultTheme,
};

const loadStories = () => {
    require('../src/atoms/Icon/Icon.story.js');
}

const GlobalDecorator = storyFn => (
    <Theme themes={themes} activeTheme="default">
        {storyFn()}
    </Theme>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
