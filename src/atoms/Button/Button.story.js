/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Button from '.';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Button', module)
    .add('Default Button', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ))
    .add('Icon Button', () => (
        <Button onClick={action('clicked')} bg={text('bg', 'primary')} color={text('color', 'white')} scale={text('scale', undefined)}>
            <Icon name="grade" />
        </Button>
    ))
    .add('Button with Icon and Text', () => (
        <Button
            onClick={action('clicked')}
            bg={text('bg', 'primary')}
            color={text('color', 'white')}
            scale={text('scale', undefined)}
            width={text('width', undefined)}
            height={text('height', undefined)}
        >
            <Icon name="grade" />
            <Text.Span>Fancy Button!</Text.Span>
        </Button>
    ));
