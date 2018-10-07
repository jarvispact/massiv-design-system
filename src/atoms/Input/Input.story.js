/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, array } from '@storybook/addon-knobs';
import Input from '.';
import Text from '../Text';

storiesOf('Input', module)
    .add('default Input', () => (
        <div>
            <Text.Span>A Label </Text.Span>
            <br />
            <Input
                name={text('name', undefined)}
                value={text('value', 'some value')}
                onChange={action('onChange')}
                disabled={boolean('disabled', undefined)}
                bg={array('bg', [])}
                color={array('color', [])}
                scale={array('scale', [])}
                p={array('p', [])}
                pt={array('pt', [])}
                pb={array('pb', [])}
                pl={array('pl', [])}
                pr={array('pr', [])}
                m={array('m', [])}
                mt={array('mt', [])}
                mb={array('mb', [])}
                ml={array('ml', [])}
                mr={array('mr', [])}
            />
        </div>
    ));
