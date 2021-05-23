import React from 'react';
import { Heading } from '../src/components/heading';
import { Text } from '../src/components/text';

export default {
    title: 'Docs/Typography',
};

export const defaultHeadings = () => {
    return (
        <>
            <Heading as="h1" variant="h1">
                h1: The quick brown fox
            </Heading>
            <Heading as="h2" variant="h2">
                h2: The quick brown fox
            </Heading>
            <Heading as="h3" variant="h3">
                h3: The quick brown fox
            </Heading>
            <Heading as="h4" variant="h4">
                h4: The quick brown fox
            </Heading>
            <Heading as="h5" variant="h5">
                h5: The quick brown fox
            </Heading>
            <Heading as="h6" variant="h6">
                h6: The quick brown fox
            </Heading>
        </>
    );
};

export const defaultText = () => {
    return (
        <>
            <Text variant="bold">bold: The quick brown fox jumps over the lazy dog</Text>
            <Text variant="body1">body1: The quick brown fox jumps over the lazy dog</Text>
            <Text variant="body2">body2: The quick brown fox jumps over the lazy dog</Text>
            <Text variant="body3">body3: The quick brown fox jumps over the lazy dog</Text>
            <Text variant="body4">body4: The quick brown fox jumps over the lazy dog</Text>
            <Text variant="body5">body5: The quick brown fox jumps over the lazy dog</Text>
        </>
    );
};
