import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../src/flex';
import Box from '../src/box';
import theme from '../src/default-theme';
import H2 from '../src/h2';
import Text from '../src/text';

const Wrapper = ({ children }) => (
    <Box mb="m">
        {children}
    </Box>
);

const SectionWrapper = ({ heading, children }) => (
    <>
        <H2 mt="l" mb="s" ml="s">{heading}</H2>
        <Flex justifyContent="center">
            {children}
        </Flex>
    </>
);

const ColorBox = ({ token, colorCode }) => (
    <Flex direction="column" ml="s">
        <Box width="200px" height="100px" bg={token} />
        <Box bg="white" p="s">
            <Text fontSize="s" fontWeight="l">{token}</Text>
            <Text fontSize="s" ml="m">{colorCode}</Text>
        </Box>
    </Flex>
);

storiesOf('Color Palette', module)
    .add('Error', () => (
        <Wrapper>
            <SectionWrapper heading="Primary">
                <ColorBox token="primary500" colorCode={theme.colors.primary500} />
                <ColorBox token="primary700" colorCode={theme.colors.primary700} />
            </SectionWrapper>
            <SectionWrapper heading="Secondary">
                <ColorBox token="secondary500" colorCode={theme.colors.secondary500} />
                <ColorBox token="secondary700" colorCode={theme.colors.secondary700} />
            </SectionWrapper>
            <SectionWrapper heading="Error">
                <ColorBox token="error500" colorCode={theme.colors.error500} />
                <ColorBox token="error700" colorCode={theme.colors.error700} />
            </SectionWrapper>
            <SectionWrapper heading="Warning">
                <ColorBox token="warning500" colorCode={theme.colors.warning500} />
                <ColorBox token="warning700" colorCode={theme.colors.warning700} />
            </SectionWrapper>
            <SectionWrapper heading="Success">
                <ColorBox token="success500" colorCode={theme.colors.success500} />
                <ColorBox token="success700" colorCode={theme.colors.success700} />
            </SectionWrapper>
            <SectionWrapper heading="Info">
                <ColorBox token="info500" colorCode={theme.colors.info500} />
                <ColorBox token="info700" colorCode={theme.colors.info700} />
            </SectionWrapper>
        </Wrapper>
    ));
