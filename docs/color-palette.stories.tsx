import React from 'react';
import { Grid } from '../src/layout';
import { defaultTheme } from '../src/theme';
import { Box, Flex, Text } from '../src/atoms';

const { color } = defaultTheme;

export default {
    title: 'Color Palette',
};

const mobile = `
    'c100'
    'c200'
    'c300'
    'c400'
    'c500'
    'c600'
    'c700'
    'c800'
    'c900'
`;

const s = `
    'c100'
    'c200'
    'c300'
    'c400'
    'c500'
    'c600'
    'c700'
    'c800'
    'c900'
`;

const m = `
    'c100 c200'
    'c300 c400'
    'c500 c600'
    'c700 c800'
    'c900 .'
`;

const l = `
    'c100 c200 c300'
    'c400 c500 c600'
    'c700 c800 c900'
`;

type Props = {
    colorName: string;
    colorValue: string;
    gridArea: string;
};

const ColorBox = ({ colorName, colorValue, gridArea }: Props) => {
    return (
        <Flex gridArea={gridArea} flexDirection="column" boxShadow="m">
            <Box bg={colorValue} p="l" minH="100px" className="foo"></Box>
            <Box bg="white" p="l">
                <Text inline pr="m">
                    {colorName}
                </Text>
                <Text inline fontFamily="mono">
                    {colorValue}
                </Text>
            </Box>
        </Flex>
    );
};

export const gray = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            <Grid gridTemplateAreas={[mobile, s, m, l]} gap="20px">
                {Object.keys(color.gray).map((key, idx) => (
                    <ColorBox
                        key={color.gray[key]}
                        colorName={`gray.${key}`}
                        colorValue={color.gray[key]}
                        gridArea={`c${idx + 1}00`}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export const primary = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            <Grid gridTemplateAreas={[mobile, s, m, l]} gap="20px">
                {Object.keys(color.primary).map((key, idx) => (
                    <ColorBox
                        key={color.primary[key]}
                        colorName={`primary.${key}`}
                        colorValue={color.primary[key]}
                        gridArea={`c${idx + 1}00`}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export const secondary = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            <Grid gridTemplateAreas={[mobile, s, m, l]} gap="20px">
                {Object.keys(color.secondary).map((key, idx) => (
                    <ColorBox
                        key={color.secondary[key]}
                        colorName={`secondary.${key}`}
                        colorValue={color.secondary[key]}
                        gridArea={`c${idx + 1}00`}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export const error = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            <Grid gridTemplateAreas={[mobile, s, m, l]} gap="20px">
                {Object.keys(color.error).map((key, idx) => (
                    <ColorBox
                        key={color.error[key]}
                        colorName={`error.${key}`}
                        colorValue={color.error[key]}
                        gridArea={`c${idx + 1}00`}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export const warning = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            <Grid gridTemplateAreas={[mobile, s, m, l]} gap="20px">
                {Object.keys(color.warning).map((key, idx) => (
                    <ColorBox
                        key={color.warning[key]}
                        colorName={`warning.${key}`}
                        colorValue={color.warning[key]}
                        gridArea={`c${idx + 1}00`}
                    />
                ))}
            </Grid>
        </Box>
    );
};

export const success = () => {
    return (
        <Box w="90%" maxW="900px" ml="auto" mr="auto" mt="10px" mb="10px">
            <Grid gridTemplateAreas={[mobile, s, m, l]} gap="20px">
                {Object.keys(color.success).map((key, idx) => (
                    <ColorBox
                        key={color.success[key]}
                        colorName={`success.${key}`}
                        colorValue={color.success[key]}
                        gridArea={`c${idx + 1}00`}
                    />
                ))}
            </Grid>
        </Box>
    );
};
