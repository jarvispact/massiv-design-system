/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Box from '.';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Box', module)
    .add('Default Box', () => (
        <Box>Test</Box>
    ))
    .add('Box with knobs', () => (
        <Box
            display={text('display', undefined)}
            shadow={text('shadow', undefined)}
            color={text('color', undefined)}
            bg={text('bg', undefined)}
            pos={text('pos', undefined)}
            top={text('top', undefined)}
            bottom={text('bottom', undefined)}
            left={text('left', undefined)}
            right={text('right', undefined)}
            width={text('width', undefined)}
            height={text('height', undefined)}
            minWidth={text('minWidth', undefined)}
            minHeight={text('minHeight', undefined)}
            maxWidth={text('maxWidth', undefined)}
            maxHeight={text('maxHeight', undefined)}
            p={text('p', undefined)}
            pt={text('pt', undefined)}
            pb={text('pb', undefined)}
            pl={text('pl', undefined)}
            pr={text('pr', undefined)}
            m={text('m', undefined)}
            mt={text('mt', undefined)}
            mb={text('mb', undefined)}
            ml={text('ml', undefined)}
            mr={text('mr', undefined)}
            bs={text('bs', undefined)}
            bw={text('bw', undefined)}
            bc={text('bc', undefined)}
            br={text('br', undefined)}
            bts={text('bts', undefined)}
            btw={text('btw', undefined)}
            btc={text('btc', undefined)}
            bbs={text('bbs', undefined)}
            bbw={text('bbw', undefined)}
            bbc={text('bbc', undefined)}
            bls={text('bls', undefined)}
            blw={text('blw', undefined)}
            blc={text('blc', undefined)}
            brs={text('brs', undefined)}
            brw={text('brw', undefined)}
            brc={text('brc', undefined)}
            btlr={text('btlr', undefined)}
            btrr={text('btrr', undefined)}
            bblr={text('bblr', undefined)}
            bbrr={text('bbrr', undefined)}
        >
            Test
        </Box>
    ));
