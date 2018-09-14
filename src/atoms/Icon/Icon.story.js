/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Icon from '.';

storiesOf('Icon', module)
    .add('default icon', () => (
        <Icon name="grade" />
    ))
    .add('icon with knobs', () => (
        <Icon
            name={text('name', 'grade')}
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
            loading={boolean('loading', false)}
        />
    ))
    .add('icon with custom styles prop', () => (
        <Icon
            name={text('name', 'grade')}
            loading={boolean('loading', false)}
            styles={props => `
                color: ${props.theme.color.primary};
                font-size: ${props.theme.fontScale.xxl};
            `}
        />
    ));
