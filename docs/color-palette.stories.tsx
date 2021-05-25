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
            <Box p="2">
                <Text variant="bold">{themeKey}</Text>
                <Text variant="body2">{themeValue}</Text>
            </Box>
        </Box>
    );
};

type StackProps = {
    children: React.ReactNode;
};

const HStack = ({ children }: StackProps) => {
    const { css } = useCss();

    const className = css({
        customSelectors: {
            '& > div': {
                display: 'inline-block',
                my: '2',
            },
            '& > div:not(:last-child)': {
                mr: '4',
            },
        },
    });

    return <div className={className}>{children}</div>;
};

export const gray = () => {
    return (
        <>
            <HStack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('gray'))
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </HStack>
        </>
    );
};

export const primary = () => {
    return (
        <>
            <HStack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('primary'))
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </HStack>
        </>
    );
};

export const secondary = () => {
    return (
        <>
            <HStack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('secondary'))
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </HStack>
        </>
    );
};

export const success = () => {
    return (
        <>
            <HStack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('success'))
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </HStack>
        </>
    );
};

export const warning = () => {
    return (
        <>
            <HStack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('warning'))
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </HStack>
        </>
    );
};

export const error = () => {
    return (
        <>
            <HStack>
                {Object.keys(defaultTheme.color)
                    .filter((c) => c.startsWith('error'))
                    .map((themeKey) => (
                        <ColorBox key={defaultTheme.color[themeKey]} themeKey={themeKey} themeValue={defaultTheme.color[themeKey] as string} />
                    ))}
            </HStack>
        </>
    );
};
