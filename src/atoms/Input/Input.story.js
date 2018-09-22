/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
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
                bg={text('bg', undefined)}
                color={text('color', undefined)}
                scale={text('scale', undefined)}
                p={text('p', undefined)}
                pt={text('pt', undefined)}
                pb={text('pb', undefined)}
                pl={text('pl', undefined)}
                pr={text('pr', undefined)}
            />
        </div>
    ));
