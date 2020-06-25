import React from 'react';
import { Flex, LoadingIndicator } from '../src/atoms';

export default {
    title: 'Loading Indicator',
};

export const loadingIndicator = () => {
    return (
        <Flex justifyContent="center" alignItems="center" w="100vw" h="100vh">
            <LoadingIndicator />
        </Flex>
    );
};
