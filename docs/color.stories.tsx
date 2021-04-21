import React from 'react';
import { Box } from '../src/components/box';

export default {
    title: 'Color Palette',
};

export const test = () => {
    return (
        <Box bg={['error500']} p={['s', 'm', 'l', 'xl', '2xl', '3xl']} color={['gray100', 'gray500']}>
            hello world
        </Box>
    );
};
