import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/utils/Theme';
import theme from './theme';
import './global.css';

const themes = {
    default: theme,
};

const loadStories = () => {
    require('../src/atoms/Box/Box.story.js');
    require('../src/atoms/Button/Button.story.js');
    require('../src/atoms/Flex/Flex.story.js');
    require('../src/atoms/Grid/Grid.story.js');
    require('../src/atoms/Icon/Icon.story.js');
    require('../src/atoms/Image/Image.story.js');
    require('../src/atoms/Input/Input.story.js');
    require('../src/atoms/Text/Text.story.js');
}

const GlobalDecorator = storyFn => (
    <Theme themes={themes} activeTheme="default">
        {storyFn()}
    </Theme>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
