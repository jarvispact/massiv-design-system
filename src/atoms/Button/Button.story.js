/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
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
            bg={text('bg', undefined)}
            color={text('color', undefined)}
            scale={text('scale', undefined)}
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
        >
            <Icon name="grade" />
        </Button>
    ))
    .add('Button with Icon and Text', () => (
        <Button
            onClick={action('clicked')}
            disabled={boolean('disabled', false)}
            bg={text('bg', undefined)}
            color={text('color', undefined)}
            scale={text('scale', undefined)}
            width={text('width', undefined)}
            height={text('height', undefined)}
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
        >
            <Text.Span>
                <Icon name="grade" />
                {' '}
                Fancy Button!
            </Text.Span>
        </Button>
    ));
