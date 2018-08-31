/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
    .add('simple Button', () => (
        <Button onClick={action('clicked')}>Simple Button</Button>
    ))
    .add('with Emojis', () => (
        <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ));
