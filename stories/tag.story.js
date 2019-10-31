/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/box';
import Tag from '../src/tag';

storiesOf('Tag', module)
    .add('Tag', () => (
        <Box p="m">
            <Tag name="00012983643" onDelete={action('onDelete')} />
        </Box>
    ))
    .add('without onDelete', () => (
        <Box p="m">
            <Tag name="00012983643" />
        </Box>
    ));
