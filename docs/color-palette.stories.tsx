import { css } from '@emotion/css';
import React from 'react';
import { Heading } from '../src/components/heading';
import { Text } from '../src/components/text';

export default {
    title: 'Docs/Color Palette',
};

export const defaultHeadings = () => {
    return (
        <>
            <Heading as="h1">h1: The quick brown fox jumps over the lazy dog</Heading>
            <Heading as="h2">h2: The quick brown fox jumps over the lazy dog</Heading>
            <Heading as="h3">h3: The quick brown fox jumps over the lazy dog</Heading>
            <Heading as="h4">h4: The quick brown fox jumps over the lazy dog</Heading>
            <Heading as="h5">h5: The quick brown fox jumps over the lazy dog</Heading>
            <Heading as="h6">h6: The quick brown fox jumps over the lazy dog</Heading>
        </>
    );
};

export const customFontFamily = () => {
    return (
        <>
            <Heading fontFamily="mono">h1: The quick brown fox jumps over the lazy dog</Heading>
            <Heading fontFamily="sans">h1: The quick brown fox jumps over the lazy dog</Heading>
            <Heading fontFamily="serif">h1: The quick brown fox jumps over the lazy dog</Heading>
        </>
    );
};

export const customFontSize = () => {
    return (
        <>
            <Heading as="h1" fontSize="3xl">
                h1: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h2" fontSize="2xl">
                h2: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h3" fontSize="xl">
                h3: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h4" fontSize="l">
                h4: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h5" fontSize="m">
                h5: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h6" fontSize="s">
                h6: The quick brown fox jumps over the lazy dog
            </Heading>
        </>
    );
};

export const customFontWeight = () => {
    return (
        <>
            <Heading as="h1" fontWeight="3xl">
                h1: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h2" fontWeight="2xl">
                h2: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h3" fontWeight="xl">
                h3: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h4" fontWeight="l">
                h4: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h5" fontWeight="m">
                h5: The quick brown fox jumps over the lazy dog
            </Heading>
            <Heading as="h6" fontWeight="s">
                h6: The quick brown fox jumps over the lazy dog
            </Heading>
        </>
    );
};

export const responsiveStyles = () => {
    return (
        <>
            <Heading fontSize={['s', 'm', 'l', 'xl', '2xl', '3xl', '4xl']}>h1: The quick brown fox jumps over the lazy dog</Heading>
            <Heading fontSize={['0.5rem', '1rem', 'l', 'xl', '2xl', '1rem']}>h1: The quick brown fox jumps over the lazy dog</Heading>
        </>
    );
};

export const overrides = () => {
    return (
        <>
            <Heading fontSize="xl" className={css({ fontSize: '12px', '&:hover': { fontSize: '20px' } })}>
                h1: The quick brown fox jumps over the lazy dog
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
