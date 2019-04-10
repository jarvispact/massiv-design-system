import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array, boolean } from '@storybook/addon-knobs';
import Box from '../src/box';
import Button from '../src/button';
import Icon from '../src/icon';
import H1 from '../src/h1';

storiesOf('Button', module)
    .add('Button', () => (
        <Box p="m">
            <Button
                type={text('type', undefined)}
                onClick={(e) => console.log('click', e)}
                disabled={boolean('disabled', false)}
                display={array('display', [])}
                fontSize={array('fontSize', [])}
                fontWeight={array('fontWeight', [])}
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
            >
                Button
            </Button>
        </Box>
    ));
