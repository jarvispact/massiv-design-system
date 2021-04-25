import { css } from '@emotion/css';
import React from 'react';
import { Heading } from '../src/components/heading';
import { Text } from '../src/components/text';

export default {
    title: 'Docs/Color Palette',
};

export const headings = () => {
    return (
        <>
            <Heading element="h1">h1: The quick brown fox jumps over the lazy dog</Heading>
            <Heading element="h2">h2: The quick brown fox jumps over the lazy dog</Heading>
            <Heading element="h3">h3: The quick brown fox jumps over the lazy dog</Heading>
            <Heading element="h4">h4: The quick brown fox jumps over the lazy dog</Heading>
            <Heading element="h5">h5: The quick brown fox jumps over the lazy dog</Heading>
            <Heading element="h6">h6: The quick brown fox jumps over the lazy dog</Heading>
            <Heading element="h1" fontFamily="mono">
                h1 The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading element="h1" fontFamily="mono" className={css({ color: 'hotpink' })}>
                h1 The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading element="h1" fontFamily="mono" fontWeight="xxxs" className={css({ color: 'hotpink' })}>
                h1 The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading element="h1" fontFamily="mono" lineHeight="6xl" className={css({ color: 'hotpink' })}>
                h1 The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading element="h1" fontFamily="mono" letterSpacing="widest" className={css({ color: 'hotpink' })}>
                h1 The quick brown fox jumps over the lazy dog
            </Heading>
        </>
    );
};

export const texts = () => {
    return (
        <>
            <Text element="div">div: The quick brown fox jumps over the lazy dog</Text>
            <Text element="span">span: The quick brown fox jumps over the lazy dog</Text>
            <Text element="p">p: The quick brown fox jumps over the lazy dog</Text>
            <Text element="label">label: The quick brown fox jumps over the lazy dog</Text>
            <Text element="a">a: The quick brown fox jumps over the lazy dog</Text>
        </>
    );
};
