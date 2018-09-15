/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from '.';

storiesOf('Text', module)
    .add('Text.H1', () => (
        <Text.H1
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.H1
        </Text.H1>
    ))
    .add('Text.H2', () => (
        <Text.H2
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.H2
        </Text.H2>
    ))
    .add('Text.H3', () => (
        <Text.H3
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.H3
        </Text.H3>
    ))
    .add('Text.H4', () => (
        <Text.H4
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.H4
        </Text.H4>
    ))
    .add('Text.H5', () => (
        <Text.H5
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.H5
        </Text.H5>
    ))
    .add('Text.H6', () => (
        <Text.H6
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.H6
        </Text.H6>
    ))
    .add('Text.P', () => (
        <Text.P
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.P
        </Text.P>
    ))
    .add('Text.A', () => (
        <Text.A
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.A
        </Text.A>
    ))
    .add('Text.Span', () => (
        <Text.Span
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.Span
        </Text.Span>
    ))
    .add('Text.Label', () => (
        <Text.Label
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            Text.Label
        </Text.Label>
    ))
    .add('Text with a custom style', () => (
        <Text.Label
            styles={props => `
                color: ${props.theme.color.primary};
                font-size: ${props.theme.scale.xxl};
            `}
        >
            Text.Label
        </Text.Label>
    ));
