/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Box from '../src/box';
import Input from '../src/input';

// @storybook/addon-action is broken and throws: maximum call stack size exceeded error

storiesOf('Input', module)
    .add('Input', () => (
        <Box p="m">
            <Input
                type={text('type', undefined)}
                id={text('id', undefined)}
                name={text('name', undefined)}
                disabled={boolean('disabled', false)}
                onChange={(e) => console.log('onChange', e)}
                fontWeight={text('fontWeight', undefined)}
                fontScale={text('fontScale', undefined)}
                fontColor={text('fontColor', undefined)}
                bg={text('bg', undefined)}
            />
        </Box>
    ));
