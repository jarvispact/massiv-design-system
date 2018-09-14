/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Box from '.';

storiesOf('Box', module)
    .add('Normal Box', () => (
        <Box bgColor="error" w="100%" h="5rem" flex="flex" justifyContent="center" alignItems="center">Test</Box>
    ))
    .add('Flex Box', () => (
        <Box bgColor="lightGray" w="100%" h="5rem" flex="flex" justifyContent="center" alignItems="center">
            <Box bgColor="error" flex="1 1 auto" w="100%" h="70%">Error</Box>
            <Box bgColor="warning" flex="1 1 auto" w="100%" h="20%">Warning</Box>
            <Box bgColor="success" flex="1 1 auto" w="100%" h="40%">Success</Box>
            <Box bgColor="info" flex="1 1 auto" w="100%" h="80%">Info</Box>
        </Box>
    ));
