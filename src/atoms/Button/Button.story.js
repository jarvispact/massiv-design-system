/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from '.';

storiesOf('Button', module)
    .add('default button', () => (
        <Button onClick={action('clicked')}>simple button</Button>
    ))
    .add('button with knobs', () => (
        <Button
            onClick={action('clicked')}
            disabled={boolean('disabled', false)}
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            {text('Text', 'button with knobs')}
        </Button>
    ));
