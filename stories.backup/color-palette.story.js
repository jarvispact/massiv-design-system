import React from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../src/atoms/flex';
import Box from '../src/atoms/box';
import theme from '../src/theme/default-theme';
import Text from '../src/atoms/text';
import Row from '../src/layout/row';
import Col from '../src/layout/col';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
    <Box m="m">
        {children}
    </Box>
);

// eslint-disable-next-line react/prop-types
const ColorBox = ({ token, colorCode }) => (
    <Flex direction="column" ml="s" width="200px">
        <Box height="100px" bg={token} />
        <Flex bg="white" p="s" justifyContent="flex-start">
            <Text fontSize="s" fontWeight="l">{token}</Text>
            <Text fontSize="s" ml="s">{colorCode}</Text>
        </Flex>
    </Flex>
);

const gray = [
    'gray100',
    'gray200',
    'gray300',
    'gray350',
    'gray400',
    'gray500',
    'gray600',
    'gray700',
    'gray800',
    'gray900',
];

const info = [
    'info300',
    'info500',
    'info700',
];

const success = [
    'success300',
    'success500',
    'success700',
];

const warning = [
    'warning300',
    'warning500',
    'warning700',
];

const error = [
    'error300',
    'error500',
    'error700',
];

const primary = [
    'primary500',
    'primary700',
];

const secondary = [
    'secondary500',
    'secondary700',
];

storiesOf('Color Palette', module)
    .add('Color Palette', () => (
        <Wrapper>
            <Text as="h1" m="m">Gray</Text>
            <Row>
                {gray.map((g) => (
                    <Col key={g} span={[12, 6, 4]} mb="s">
                        <ColorBox token={g} colorCode={theme.colors[g]} />
                    </Col>
                ))}
            </Row>

            <Text as="h1" m="m">Info</Text>
            <Row>
                {info.map((i) => (
                    <Col key={i} span={[12, 6, 4]} mb="s">
                        <ColorBox token={i} colorCode={theme.colors[i]} />
                    </Col>
                ))}
            </Row>

            <Text as="h1" m="m">Success</Text>
            <Row>
                {success.map((s) => (
                    <Col key={s} span={[12, 6, 4]} mb="s">
                        <ColorBox token={s} colorCode={theme.colors[s]} />
                    </Col>
                ))}
            </Row>

            <Text as="h1" m="m">Warning</Text>
            <Row>
                {warning.map((w) => (
                    <Col key={w} span={[12, 6, 4]} mb="s">
                        <ColorBox token={w} colorCode={theme.colors[w]} />
                    </Col>
                ))}
            </Row>

            <Text as="h1" m="m">Error</Text>
            <Row>
                {error.map((e) => (
                    <Col key={e} span={[12, 6, 4]} mb="s">
                        <ColorBox token={e} colorCode={theme.colors[e]} />
                    </Col>
                ))}
            </Row>

            <Text as="h1" m="m">Primary</Text>
            <Row>
                {primary.map((p) => (
                    <Col key={p} span={[12, 6, 6]} mb="s">
                        <ColorBox token={p} colorCode={theme.colors[p]} />
                    </Col>
                ))}
            </Row>

            <Text as="h1" m="m">Secondary</Text>
            <Row>
                {secondary.map((s) => (
                    <Col key={s} span={[12, 6, 6]} mb="s">
                        <ColorBox token={s} colorCode={theme.colors[s]} />
                    </Col>
                ))}
            </Row>
        </Wrapper>
    ));
