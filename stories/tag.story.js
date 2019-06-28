/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, array } from '@storybook/addon-knobs';
import Box from '../src/box';
import Tag from '../src/tag';

// @storybook/addon-action is broken and throws: maximum call stack size exceeded error

storiesOf('Tag', module)
    .add('Tag', () => (
        <Box p="m">
            <Tag name="some tag bla foo" onClose={() => console.log('close clicked')} />
        </Box>
    ));
