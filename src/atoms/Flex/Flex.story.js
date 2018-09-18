/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '.';

storiesOf('Flex', module)
    .add('Flex.Parent', () => (
        <Flex.Parent height="5rem" justifyContent="center" alignItems="center">
            <Flex.Child bg="primary" flex="1 1 auto" height="5rem">
                Flex Child
            </Flex.Child>
            <Flex.Child bg="secondary" flex="1 1 auto" height="5rem">
                Flex Child
            </Flex.Child>
            <Flex.Child bg="info" flex="1 1 auto" height="5rem">
                Flex Child
            </Flex.Child>
        </Flex.Parent>
    ));
