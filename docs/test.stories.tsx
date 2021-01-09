import React from 'react';
import { Box } from '../src/components/box';
import { Image } from '../src/components/image';

export default {
    title: 'Test',
};

export const test = () => {
    return (
        <Box m="2xl" color="error300">
            hello world
        </Box>
    );
};

export const test2 = () => {
    return <Image width="300px" height="300px" alt="alt" src="https://via.placeholder.com/300" cssWidth="3xl" cssHeight="2xl" />;
};
