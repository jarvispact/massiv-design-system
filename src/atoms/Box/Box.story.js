/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import Box from '.';

storiesOf('Box', module)
    .add('Default Box', () => (
        <Box>Test</Box>
    ))
    .add('Box with knobs', () => (
        <Box
            display={array('display', [])}
            shadow={array('shadow', [])}
            zIndex={array('zIndex', [])}
            color={array('color', [])}
            bg={array('bg', [])}
            pos={array('pos', [])}
            top={array('top', [])}
            bottom={array('bottom', [])}
            left={array('left', [])}
            right={array('right', [])}
            width={array('width', [])}
            height={array('height', [])}
            minWidth={array('minWidth', [])}
            minHeight={array('minHeight', [])}
            maxWidth={array('maxWidth', [])}
            maxHeight={array('maxHeight', [])}
            p={array('p', [])}
            pt={array('pt', [])}
            pb={array('pb', [])}
            pl={array('pl', [])}
            pr={array('pr', [])}
            m={array('m', [])}
            mt={array('mt', [])}
            mb={array('mb', [])}
            ml={array('ml', [])}
            mr={array('mr', [])}
            bs={array('bs', [])}
            bw={array('bw', [])}
            bc={array('bc', [])}
            br={array('br', [])}
            bts={array('bts', [])}
            btw={array('btw', [])}
            btc={array('btc', [])}
            bbs={array('bbs', [])}
            bbw={array('bbw', [])}
            bbc={array('bbc', [])}
            bls={array('bls', [])}
            blw={array('blw', [])}
            blc={array('blc', [])}
            brs={array('brs', [])}
            brw={array('brw', [])}
            brc={array('brc', [])}
            btlr={array('btlr', [])}
            btrr={array('btrr', [])}
            bblr={array('bblr', [])}
            bbrr={array('bbrr', [])}
        >
            Test
        </Box>
    ));
