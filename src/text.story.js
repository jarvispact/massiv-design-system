import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Text from './text';

storiesOf('Text', module)
    .add('Text.H1', () => (
        <Text.H1
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text H1
        </Text.H1>
    ))
    .add('Text.H2', () => (
        <Text.H2
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text H2
        </Text.H2>
    ))
    .add('Text.H3', () => (
        <Text.H3
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text H3
        </Text.H3>
    ))
    .add('Text.H4', () => (
        <Text.H4
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text H4
        </Text.H4>
    ))
    .add('Text.H5', () => (
        <Text.H5
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text H5
        </Text.H5>
    ))
    .add('Text.H6', () => (
        <Text.H6
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text H6
        </Text.H6>
    ))
    .add('Text.P', () => (
        <Text.P
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text P
        </Text.P>
    ))
    .add('Text.A', () => (
        <Text.A
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text A
        </Text.A>
    ))
    .add('Text.SPAN', () => (
        <Text.SPAN
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text SPAN
        </Text.SPAN>
    ))
    .add('Text.LABEL', () => (
        <Text.LABEL
            color={text('color', undefined)}
            fontWeight={text('fontWeight', undefined)}
        >
            Text LABEL
        </Text.LABEL>
    ));
