import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import Theme from '../src/theme';
import GlobalStyle from '../src/global-style';
import theme from './theme';
import './global.css';

const themes = {
    default: theme,
};

const loadStories = () => {
    require('../stories/box.story.js');
    require('../stories/button.story.js');
    require('../stories/flex.story.js');
    require('../stories/fonts.story.js');
    require('../stories/icon.story.js');
    require('../stories/image.story.js');
    require('../stories/input.story.js');
    require('../stories/table.story.js');
    require('../stories/tag.story.js');
    require('../stories/responsive-grid.story.js');
    require('../stories/text-area.story.js');
}

const GlobalDecorator = storyFn => (
    <Theme themes={themes} activeTheme="default">
        <>
            <GlobalStyle />
            {storyFn()}
        </>
    </Theme>
);

addDecorator(GlobalDecorator);
addDecorator(withKnobs);
configure(loadStories, module);
