import React from 'react';
import { Box } from '../src/components/box';

export default {
    title: 'Docs/Color Palette',
};

const ColorBox = () => {
    return (
        <Box w="100px">
            <Box h="50px" bg="gray500" />
            <Box p="m">
                color
            </Box>
        </Box>
    );
};

export const test = () => {
    return (
        <ColorBox />
    );
};
