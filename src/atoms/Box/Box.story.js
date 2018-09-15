/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Box from '.';
import Icon from '../Icon';
import Text from '../Text';

storiesOf('Box', module)
    .add('Normal Box', () => (
        <Box bgColor="error" w="100%" h="5rem" boxDisplay="flex" justifyContent="center" alignItems="center">Test</Box>
    ))
    .add('Flex Box', () => (
        <Box bgColor="lightGray" w="100%" h="5rem" boxDisplay="flex" justifyContent="center" alignItems="center">
            <Box bgColor="error" flex="1 1 auto" h="70%">Error</Box>
            <Box bgColor="warning" flex="1 1 auto" h="20%">Warning</Box>
            <Box bgColor="success" flex="1 1 auto" h="40%">Success</Box>
            <Box bgColor="info" flex="1 1 auto" h="80%">Info</Box>
        </Box>
    ))
    .add('Icon and Text', () => (
        <Box bgColor="lightGray" w="100%" h="5rem" boxDisplay="flex" justifyContent="center" alignItems="center">
            <Icon name="grade" />
            <Icon name="grade" />
            <Icon name="grade" />
            <Text.Span>This is awesome!</Text.Span>
            <Icon name="grade" />
            <Icon name="grade" />
            <Icon name="grade" />
        </Box>
    ))
    .add('Positioned Box', () => (
        <Box bgColor="error" pos="fixed" bottom="0px" right="0px" h="5rem">
            <Text.Span>Positioned Box</Text.Span>
        </Box>
    ));
