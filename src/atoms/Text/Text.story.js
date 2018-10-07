/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import Text from '.';

storiesOf('Text', module)
    .add('Text.H1', () => (
        <Text.H1
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.H1
        </Text.H1>
    ))
    .add('Text.H2', () => (
        <Text.H2
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.H2
        </Text.H2>
    ))
    .add('Text.H3', () => (
        <Text.H3
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.H3
        </Text.H3>
    ))
    .add('Text.H4', () => (
        <Text.H4
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.H4
        </Text.H4>
    ))
    .add('Text.H5', () => (
        <Text.H5
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.H5
        </Text.H5>
    ))
    .add('Text.H6', () => (
        <Text.H6
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.H6
        </Text.H6>
    ))
    .add('Text.P', () => (
        <Text.P
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.P
        </Text.P>
    ))
    .add('Text.A', () => (
        <Text.A
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.A
        </Text.A>
    ))
    .add('Text.Span', () => (
        <Text.Span
            color={array('color', [])}
            scale={array('scale', [])}
        >
            Text.Span
        </Text.Span>
    ))
    .add('Text.Label', () => (
        <Text.Label
            color={array('color', [])}
            scale={array('scale', [])}
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
