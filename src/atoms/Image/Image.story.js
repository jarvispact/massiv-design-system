/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, array } from '@storybook/addon-knobs';
import Image from '.';

storiesOf('Image', module)
    .add('default Image', () => (
        <Image
            alt={text('alt', undefined)}
            src={text('src', undefined)}
            width={text('width', undefined)}
            height={text('height', undefined)}
            cssWidth={array('cssWidth', [])}
            cssHeight={array('cssHeight', [])}
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
    ));
