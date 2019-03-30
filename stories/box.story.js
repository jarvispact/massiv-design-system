import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Box from '../src/box';

storiesOf('Box', module)
    .add('Box', () => (
        <Box
            display={text('display', undefined)}
            position={text('position', undefined)}
            top={text('top', undefined)}
            left={text('left', undefined)}
            bottom={text('bottom', undefined)}
            right={text('right', undefined)}
            width={text('width', undefined)}
            height={text('height', undefined)}
            minWidth={text('minWidth', undefined)}
            minHeight={text('minHeight', undefined)}
            maxWidth={text('maxWidth', undefined)}
            maxHeight={text('maxHeight', undefined)}
            overflow={text('overflow', undefined)}
            overflowX={text('overflowX', undefined)}
            overflowY={text('overflowY', undefined)}
            p={text('p', undefined)}
            pt={text('pt', undefined)}
            pl={text('pl', undefined)}
            pb={text('pb', undefined)}
            pr={text('pr', undefined)}
            m={text('m', undefined)}
            mt={text('mt', undefined)}
            ml={text('ml', undefined)}
            mb={text('mb', undefined)}
            mr={text('mr', undefined)}
            bg={text('bg', undefined)}
        >
            Box Test
        </Box>
    ));
