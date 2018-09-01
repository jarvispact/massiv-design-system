/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from '.';
import Icon from '../Icon';

storiesOf('Text', module)
    .add('H1', () => (
        <Text.H1
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            H1
        </Text.H1>
    ))
    .add('H2', () => (
        <Text.H2
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            H2
        </Text.H2>
    ))
    .add('H3', () => (
        <Text.H3
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            H3
        </Text.H3>
    ))
    .add('H4', () => (
        <Text.H4
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            H4
        </Text.H4>
    ))
    .add('H5', () => (
        <Text.H5
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            H5
        </Text.H5>
    ))
    .add('H6', () => (
        <Text.H6
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            H6
        </Text.H6>
    ))
    .add('P', () => (
        <Text.P
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            paragraph
        </Text.P>
    ))
    .add('Label', () => (
        <Text.Label
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            label
        </Text.Label>
    ))
    .add('Span', () => (
        <Text.Span
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            span
        </Text.Span>
    ))
    .add('A', () => (
        <Text.A
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            anchor
        </Text.A>
    ))
    .add('H1 with Icon and Text', () => (
        <Text.H1
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            <Icon name="dashboard" />
            Heading 1
        </Text.H1>
    ))
    .add('Span with Icon and Text', () => (
        <Text.Span
            color={text('color', undefined)}
            scale={text('scale', undefined)}
        >
            <Icon name="dashboard" />
            span
        </Text.Span>
    ));
