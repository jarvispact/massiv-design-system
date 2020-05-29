import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../src/atoms/text';
import theme from '../src/theme/default-theme';
import Flex from '../src/atoms/flex';
import Box from '../src/atoms/box';

const htmlTags = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'a',
    'span',
    'label',
];

const typographyData = htmlTags.reduce((acc, htmlTag) => {
    acc[htmlTag] = {
        fontSize: theme.fontSizes[htmlTag],
        lineHeight: theme.lineHeights[htmlTag],
        props: {
            ...htmlTag === 'a' ? { href: 'https://jarvispact.com' } : {},
        },
    };
    return acc;
}, {});

const typographyKeys = Object.keys(typographyData);
const fontWeightKeys = Object.keys(theme.fontWeights);
const letterSpacingKeys = Object.keys(theme.letterSpacings);

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children, ...props }) => (
    <Flex justifyContent="space-between" alignItems="center" p="1rem" {...props}>
        {children}
    </Flex>
);

const getBottomBorderProps = () => ({
    borderBottomStyle: 'solid',
    borderBottomColor: 'gray400',
    borderBottomWidth: '1px',
});

storiesOf('Typography', module)
    .add('Typography', () => (
        <Box m="m">
            <Text as="h1" mb="xl">Typography</Text>
            <Wrapper {...getBottomBorderProps()}>
                <Text flex="1 1 auto" fontWeight="l">Example Text</Text>
                <Text flex="0 0 100px" fontWeight="l" textAlign="right">fontSize</Text>
                <Text flex="0 0 150px" fontWeight="l" textAlign="right">lineHeight</Text>
            </Wrapper>
            {typographyKeys.map((family, index) => (
                <Wrapper key={family} {...index !== typographyKeys.length - 1 ? getBottomBorderProps() : {}}>
                    <Text as={family} {...typographyData[family].props} flex="1 1 auto">{`${family}: Zombie ipsum reversus ab viral`}</Text>
                    <Text flex="0 0 100px" textAlign="right">{typographyData[family].fontSize}</Text>
                    <Text flex="0 0 150px" textAlign="right">{typographyData[family].lineHeight}</Text>
                </Wrapper>
            ))}

            <Text as="h1" mt="xl" mb="xl">Fontweights</Text>
            <Wrapper {...getBottomBorderProps()}>
                <Text flex="1 1 auto" fontWeight="l">Example Text</Text>
                <Text flex="0 0 100px" fontWeight="l" textAlign="right">token</Text>
                <Text flex="0 0 150px" fontWeight="l" textAlign="right">fontWeight</Text>
            </Wrapper>
            {fontWeightKeys.map((weight, index) => (
                <Wrapper key={weight} {...index !== fontWeightKeys.length - 1 ? getBottomBorderProps() : {}}>
                    <Text flex="1 1 auto" fontWeight={weight}>Zombie ipsum reversus ab viral inferno, nam rick grimes malum</Text>
                    <Text flex="0 0 100px" textAlign="right">{weight}</Text>
                    <Text flex="0 0 150px" textAlign="right">{theme.fontWeights[weight]}</Text>
                </Wrapper>
            ))}

            <Text as="h1" mt="xl" mb="xl">Letterspacings</Text>
            <Wrapper {...getBottomBorderProps()}>
                <Text flex="1 1 auto" fontWeight="l">Example Text</Text>
                <Text flex="0 0 100px" fontWeight="l" textAlign="right">token</Text>
                <Text flex="0 0 150px" fontWeight="l" textAlign="right">letterSpacing</Text>
            </Wrapper>
            {letterSpacingKeys.map((letterSpacing, index) => (
                <Wrapper key={letterSpacing} {...index !== letterSpacingKeys.length - 1 ? getBottomBorderProps() : {}}>
                    <Text flex="1 1 auto" letterSpacing={letterSpacing}>Zombie ipsum reversus ab viral inferno, nam rick grimes malum</Text>
                    <Text flex="0 0 100px" textAlign="right">{letterSpacing}</Text>
                    <Text flex="0 0 150px" textAlign="right">{theme.letterSpacings[letterSpacing]}</Text>
                </Wrapper>
            ))}
        </Box>
    ));
