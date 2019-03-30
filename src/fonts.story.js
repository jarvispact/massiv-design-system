import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import H4 from './h4';
import H5 from './h5';
import H6 from './h6';
import Text from './text';
import Link from './link';
import Label from './label';

storiesOf('Text', module)
    .add('H1', () => (
        <H1
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text H1
        </H1>
    ))
    .add('H2', () => (
        <H2
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text H2
        </H2>
    ))
    .add('H3', () => (
        <H3
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text H3
        </H3>
    ))
    .add('H4', () => (
        <H4
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text H4
        </H4>
    ))
    .add('H5', () => (
        <H5
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text H5
        </H5>
    ))
    .add('H6', () => (
        <H6
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text H6
        </H6>
    ))
    .add('Text', () => (
        <Text
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Text
        </Text>
    ))
    .add('Link', () => (
        <Link
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
            href={text('href', 'https://jarvispact.com')}
        >
            Link
        </Link>
    ))
    .add('Label', () => (
        <Label
            weight={text('weight', undefined)}
            scale={text('scale', undefined)}
            color={text('color', undefined)}
        >
            Label
        </Label>
    ));
