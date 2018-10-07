/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, array } from '@storybook/addon-knobs';
import Button from '.';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Button', module)
    .add('Default Button', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ))
    .add('Icon Button', () => (
        <Button
            onClick={action('clicked')}
            disabled={boolean('disabled', false)}
            bg={array('bg', [])}
            color={array('color', [])}
            scale={array('scale', [])}
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
            <Icon name="grade" />
        </Button>
    ))
    .add('Button with Icon and Text', () => (
        <Button
            onClick={action('clicked')}
            disabled={boolean('disabled', false)}
            bg={array('bg', [])}
            color={array('color', [])}
            scale={array('scale', [])}
            width={array('width', [])}
            height={array('height', [])}
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
            <Text.Span>
                <Icon name="grade" />
                {' '}
                Fancy Button!
            </Text.Span>
        </Button>
    ));
