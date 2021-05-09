import React from 'react';
import { Heading } from '../src/components/heading';
import { Box } from '../src/components/box';
import { useCss } from '../src/hooks/use-css';

export default {
    title: 'Docs/Color Palette',
};

export const test = () => {
    return (
        <Box bg="error100" color="error800" p={{ xl: '5xl' }}>
            error box
        </Box>
    );
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
            <Heading fontSize={{ value: 'xxs', s: 's', m: 'm', l: 'l', xl: 'xl', xxl: '2xl', xxxl: '3xl' }}>
                h1: The quick brown fox jumps over the lazy dog
            </Heading>
        </>
    );
};

export const overrides = () => {
    const { css } = useCss();
    return (
        <>
            <Heading
                fontSize="3xl"
                className={css({
                    fontSize: '8px',
                    px: { value: '4xl' },
                    flexDirection: 'initial',
                    flexWrap: 'initial',
                    flex: '1 1 auto',
                    borderRadius: { value: 'l' },
                    verticalAlign: 'sd',
                    whiteSpace: 'nowrap',
                    textTransform: 'none',
                })}
                aria-hidden="true"
                aria-describedby="some-id"
                onClick={(e) => {
                    console.log(e);
                }}
            >
                h1: The quick brown fox jumps over the lazy dog
            </Heading>
        </>
    );
};
