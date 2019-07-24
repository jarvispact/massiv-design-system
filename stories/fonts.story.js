import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array } from '@storybook/addon-knobs';
import H1 from '../src/h1';
import H2 from '../src/h2';
import H3 from '../src/h3';
import H4 from '../src/h4';
import H5 from '../src/h5';
import H6 from '../src/h6';
import Text from '../src/text';
import Link from '../src/link';
import Label from '../src/label';
import Icon from '../src/icon';

storiesOf('Text', module)
    .add('H1', () => (
        <H1
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text H1
        </H1>
    ))
    .add('H1 with Icon', () => (
        <H1
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            <Icon>donut_large</Icon>
            {' '}
            H1 Text
        </H1>
    ))
    .add('H2', () => (
        <H2
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text H2
        </H2>
    ))
    .add('H2 with Icon', () => (
        <H2
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            <Icon>donut_large</Icon>
            {' '}
            H2 Text
        </H2>
    ))
    .add('H3', () => (
        <H3
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text H3
        </H3>
    ))
    .add('H4', () => (
        <H4
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text H4
        </H4>
    ))
    .add('H5', () => (
        <H5
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text H5
        </H5>
    ))
    .add('H6', () => (
        <H6
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text H6
        </H6>
    ))
    .add('Text', () => (
        <Text
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Text
        </Text>
    ))
    .add('Text with Icon embedded', () => (
        <Text
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            <Icon>donut_large</Icon>
            {' '}
            Text
        </Text>
    ))
    .add('Text with Icon aside 1', () => (
        <>
            <Icon pr="s" name="donut_large" />
            <Text
                weight={array('weight', [])}
                scale={array('scale', [])}
                color={array('color', [])}
                letterSpacing={array('letterSpacing', [])}
            >
            Text
            </Text>
        </>
    ))
    .add('Text with Icon aside 2', () => (
        <>
            <Text
                weight={array('weight', [])}
                scale={array('scale', [])}
                color={array('color', [])}
                letterSpacing={array('letterSpacing', [])}
            >
            Text
            </Text>
            <Icon pl="s" name="donut_large" />
        </>
    ))
    .add('Link', () => (
        <Link
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
            href={text('href', 'https://jarvispact.com')}
        >
            Link
        </Link>
    ))
    .add('Label', () => (
        <Label
            weight={array('weight', [])}
            scale={array('scale', [])}
            color={array('color', [])}
            letterSpacing={array('letterSpacing', [])}
        >
            Label
        </Label>
    ));
