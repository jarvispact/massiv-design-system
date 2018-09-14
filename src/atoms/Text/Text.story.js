/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from '.';

storiesOf('Text', module)
    .add('Text.H1', () => (
        <Text.H1
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.H1
        </Text.H1>
    ))
    .add('Text.H2', () => (
        <Text.H2
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.H2
        </Text.H2>
    ))
    .add('Text.H3', () => (
        <Text.H3
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.H3
        </Text.H3>
    ))
    .add('Text.H4', () => (
        <Text.H4
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.H4
        </Text.H4>
    ))
    .add('Text.H5', () => (
        <Text.H5
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.H5
        </Text.H5>
    ))
    .add('Text.H6', () => (
        <Text.H6
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.H6
        </Text.H6>
    ))
    .add('Text.P', () => (
        <Text.P
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.P
        </Text.P>
    ))
    .add('Text.A', () => (
        <Text.A
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.A
        </Text.A>
    ))
    .add('Text.Span', () => (
        <Text.Span
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.Span
        </Text.Span>
    ))
    .add('Text.Label', () => (
        <Text.Label
            fontColor={text('fontColor', undefined)}
            fontScale={text('fontScale', undefined)}
        >
            Text.Label
        </Text.Label>
    ))
    .add('Text with a custom style', () => (
        <Text.Label
            styles={props => `
                color: ${props.theme.color.primary};
                font-size: ${props.theme.fontScale.xxl};
            `}
        >
            Text.Label
        </Text.Label>
    ));
