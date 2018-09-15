/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import Button from '.';
import Box from '../Box';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Button', module)
    .add('Default Button', () => (
        <Button onClick={action('clicked')}>Button</Button>
    ))
    .add('Button with children', () => (
        <Button onClick={action('clicked')} bgColor="primary" fontColor="white">
            <Box boxDisplay="flex" justifyContent="center" alignItems="center">
                <Icon name="grade" />
                <Icon name="grade" />
                <Icon name="grade" />
                <Text.Span>Fancy Button!</Text.Span>
                <Icon name="grade" />
                <Icon name="grade" />
                <Icon name="grade" />
            </Box>
        </Button>
    ));
