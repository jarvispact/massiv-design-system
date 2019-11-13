import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../src/flex';
import Box from '../src/box';
import theme from '../src/default-theme';
import Text from '../src/text';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
    <Box mb="m">
        {children}
    </Box>
);

// eslint-disable-next-line react/prop-types
const SectionWrapper = ({ heading, children }) => (
    <>
        <Text as="h2" m="s">{heading}</Text>
        <Flex>
            {children}
        </Flex>
    </>
);

// eslint-disable-next-line react/prop-types
const ColorBox = ({ token, colorCode }) => (
    <Flex direction="column" ml="s">
        <Box width="200px" height="100px" bg={token} />
        <Flex bg="white" p="s" justifyContent="flex-start">
            <Text fontSize="s" fontWeight="l">{token}</Text>
            <Text fontSize="s" ml="s">{colorCode}</Text>
        </Flex>
    </Flex>
);

storiesOf('Color Palette', module)
    .add('Color Palette', () => (
        <Wrapper>
            <SectionWrapper heading="Gray 100 - 500">
                <ColorBox token="gray100" colorCode={theme.colors.gray100} />
                <ColorBox token="gray200" colorCode={theme.colors.gray200} />
                <ColorBox token="gray300" colorCode={theme.colors.gray300} />
                <ColorBox token="gray400" colorCode={theme.colors.gray400} />
                <ColorBox token="gray500" colorCode={theme.colors.gray500} />
            </SectionWrapper>
            <SectionWrapper heading="Gray 600 - 900">
                <ColorBox token="gray600" colorCode={theme.colors.gray600} />
                <ColorBox token="gray700" colorCode={theme.colors.gray700} />
                <ColorBox token="gray800" colorCode={theme.colors.gray800} />
                <ColorBox token="gray900" colorCode={theme.colors.gray900} />
            </SectionWrapper>
            <SectionWrapper heading="Error">
                <ColorBox token="error300" colorCode={theme.colors.error300} />
                <ColorBox token="error500" colorCode={theme.colors.error500} />
                <ColorBox token="error700" colorCode={theme.colors.error700} />
            </SectionWrapper>
            <SectionWrapper heading="Warning">
                <ColorBox token="warning300" colorCode={theme.colors.warning300} />
                <ColorBox token="warning500" colorCode={theme.colors.warning500} />
                <ColorBox token="warning700" colorCode={theme.colors.warning700} />
            </SectionWrapper>
            <SectionWrapper heading="Success">
                <ColorBox token="success300" colorCode={theme.colors.success300} />
                <ColorBox token="success500" colorCode={theme.colors.success500} />
                <ColorBox token="success700" colorCode={theme.colors.success700} />
            </SectionWrapper>
            <SectionWrapper heading="Info">
                <ColorBox token="info300" colorCode={theme.colors.info300} />
                <ColorBox token="info500" colorCode={theme.colors.info500} />
                <ColorBox token="info700" colorCode={theme.colors.info700} />
            </SectionWrapper>
            <SectionWrapper heading="Primary">
                <ColorBox token="primary500" colorCode={theme.colors.primary500} />
                <ColorBox token="primary700" colorCode={theme.colors.primary700} />
            </SectionWrapper>
            <SectionWrapper heading="Secondary">
                <ColorBox token="secondary500" colorCode={theme.colors.secondary500} />
                <ColorBox token="secondary700" colorCode={theme.colors.secondary700} />
            </SectionWrapper>
        </Wrapper>
    ));
