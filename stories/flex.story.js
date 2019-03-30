import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Flex from '../src/flex';
import Box from '../src/box';

storiesOf('Flex', module)
    .add('Flex', () => (
        <Flex
            inline={boolean('inline', undefined)}
            justifyContent={text('justifyContent', undefined)}
            alignItems={text('alignItems', undefined)}
        >
            <Box bg="error" flex="1 1 auto" p="m">Box 1</Box>
            <Box bg="warning" flex="1 1 auto" p="m">Box 2</Box>
            <Box bg="success" flex="1 1 auto" p="m">Box 3</Box>
        </Flex>
    ));
