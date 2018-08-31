import { configure } from '@storybook/react';

const loadStories = () => {
    require('../src/atoms/Button.story.js');
}

configure(loadStories, module);
