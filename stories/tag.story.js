/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/atoms/box';
import Tag from '../src/molecules/tag';

storiesOf('Tag', module)
    .add('Tag', () => (
        <Box p="m">
            <Tag name="00012983643" onRemove={action('onRemove')} />
        </Box>
    ))
    .add('without onRemove', () => (
        <Box p="m">
            <Tag name="00012983643" />
        </Box>
    ));
