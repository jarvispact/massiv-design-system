import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, boolean, text } from '@storybook/addon-knobs';
import Icon from '../src/icon';

storiesOf('Icon', module)
    .add('Icon', () => (
        <Icon
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            onClick={(e) => console.log(e)}
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
            scale={array('scale', [])}
            color={array('color', [])}
            bg={array('bg', [])}
            textShadow={array('textShadow', [])}
        >
            donut_large
        </Icon>
    ))
    .add('Icon with name prop', () => (
        <Icon
            disabled={boolean('disabled', false)}
            loading={boolean('loading', false)}
            onClick={(e) => console.log(e)}
            name={text('name', undefined)}
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
            scale={array('scale', [])}
            color={array('color', [])}
            bg={array('bg', [])}
        />
    ));
