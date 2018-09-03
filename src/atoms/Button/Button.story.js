/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from '.';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Button', module)
    .add('default button', () => (
        <Button onClick={action('clicked')}>simple button</Button>
    ))
    .add('button with knobs', () => (
        <Button
            flat={boolean('flat', false)}
            raised={boolean('raised', false)}
            border={boolean('border', false)}
            disabled={boolean('disabled', false)}
            color={text('color', undefined)}
            fontColor={text('fontColor', undefined)}
            scale={text('scale', undefined)}
            onClick={action('clicked')}
        >
            {text('Text', 'button with knobs')}
        </Button>
    ))
    .add('button with knobs and a component as a child', () => (
        <Button
            flat={boolean('flat', false)}
            raised={boolean('raised', false)}
            border={boolean('border', false)}
            disabled={boolean('disabled', false)}
            color={text('color', undefined)}
            fontColor={text('fontColor', undefined)}
            scale={text('scale', undefined)}
            onClick={action('clicked')}
        >
            <div>
                <Icon name="grade" />
                <Icon name="grade" />
                <Icon name="grade" />
                <Text.Span>Custom Children</Text.Span>
                <Icon name="grade" />
                <Icon name="grade" />
                <Icon name="grade" />
            </div>
        </Button>
    ));
