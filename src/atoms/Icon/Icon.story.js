/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Icon from '.';

storiesOf('Icon', module)
    .add('default icon', () => (
        <Icon name="grade" />
    ))
    .add('icon with knobs', () => (
        <Icon
            name={text('name', 'grade')}
            color={text('color', undefined)}
            scale={text('scale', undefined)}
            loading={boolean('loading', false)}
        />
    ))
    .add('icon with knobs and onClick handler', () => (
        <Icon
            name={text('name', 'grade')}
            color={text('color', undefined)}
            scale={text('scale', undefined)}
            loading={boolean('loading', false)}
            onClick={action('clicked')}
        />
    ));
