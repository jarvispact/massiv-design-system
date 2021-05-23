import React from 'react';
import { Box } from '../src/components/box';
import { defaultTheme } from '../src/theme/default-theme';
import { Text } from '../src/components/text';
import { useCss } from '../src/hooks/use-css';

export default {
    title: 'Docs/Color Palette',
};

type ColorBoxProps = {
    themeKey: string;
    themeValue: string;
};

const ColorBox = ({ themeKey, themeValue }: ColorBoxProps) => {
    return (
        <Box display="flex" flexDirection="column" width="150px" boxShadow="s">
            <Box height="80px" bg={themeKey} />
            <Box p="xs">
                <Text variant="bold">{themeKey}</Text>
                <Text variant="body2">{themeValue}</Text>
            </Box>
        </Box>
    );
};

type StackProps = {
    children: React.ReactNode;
};

const Stack = ({ children }: StackProps) => {
    const { css } = useCss();
    const className = css({ mr: { '& > div:not(:last-child)': 's' } });
    console.log({ className });
    return (
        <Box display="flex" className={className}>
            {children}
        </Box>
    );
};

export const example = () => {
    return (
        <>
            <Stack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('gray'))
                    .filter((_, i) => i < 5)
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </Stack>
            <Stack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('gray'))
                    .filter((_, i) => i >= 5)
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </Stack>
        </>
    );
};
