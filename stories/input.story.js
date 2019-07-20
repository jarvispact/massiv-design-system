/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, array } from '@storybook/addon-knobs';
import Box from '../src/box';
import Input from '../src/input';

// @storybook/addon-action is broken and throws: maximum call stack size exceeded error

storiesOf('Input', module)
    .add('Input', () => (
        <Box p="m">
            <Input
                type={text('type', undefined)}
                id={text('id', undefined)}
                name={text('name', undefined)}
                disabled={boolean('disabled', false)}
                onChange={(e) => console.log('onChange', e)}
                fontWeight={array('fontWeight', [])}
                fontSize={array('fontSize', [])}
                letterSpacing={array('letterSpacing', [])}
                width={array('width', [])}
                height={array('height', [])}
                minWidth={array('minWidth', [])}
                minHeight={array('minHeight', [])}
                maxWidth={array('maxWidth', [])}
                maxHeight={array('maxHeight', [])}
                p={array('p', [])}
                pt={array('pt', [])}
                pl={array('pl', [])}
                pb={array('pb', [])}
                pr={array('pr', [])}
                m={array('m', [])}
                mt={array('mt', [])}
                ml={array('ml', [])}
                mb={array('mb', [])}
                mr={array('mr', [])}
                color={array('color', [])}
                bg={array('bg', [])}
                borderStyle={array('borderStyle', [])}
                borderWidth={array('borderWidth', [])}
                borderColor={array('borderColor', [])}
                borderRadius={array('borderRadius', [])}
                borderTopStyle={array('borderTopStyle', [])}
                borderTopWidth={array('borderTopWidth', [])}
                borderTopColor={array('borderTopColor', [])}
                borderBottomStyle={array('borderBottomStyle', [])}
                borderBottomWidth={array('borderBottomWidth', [])}
                borderBottomColor={array('borderBottomColor', [])}
                borderLeftStyle={array('borderLeftStyle', [])}
                borderLeftWidth={array('borderLeftWidth', [])}
                borderLeftColor={array('borderLeftColor', [])}
                borderRightStyle={array('borderRightStyle', [])}
                borderRightWidth={array('borderRightWidth', [])}
                borderRightColor={array('borderRightColor', [])}
                borderTopLeftRadius={array('borderTopLeftRadius', [])}
                borderTopRightRadius={array('borderTopRightRadius', [])}
                borderBottomLeftRadius={array('borderBottomLeftRadius', [])}
                borderBottomRightRadius={array('borderBottomRightRadius', [])}
                boxShadow={array('boxShadow', [])}
            />
        </Box>
    ));
