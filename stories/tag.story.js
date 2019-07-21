/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../src/box';
import Tag from '../src/tag';

storiesOf('Tag', module)
    .add('Tag', () => (
        <Box p="m">
            <Tag name="some tag bla foo" onClose={() => console.log('close clicked')} />
        </Box>
    ));
