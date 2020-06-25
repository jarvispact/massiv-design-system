import React from 'react';
import { action } from '@storybook/addon-actions';
import { Box, Text, Icon, Button, ButtonVariant, OutlineButton, GhostButton } from '../src/atoms';
import { Stack } from '../src/layout';

export default {
    title: 'Buttons',
};

type ButtonBlockProps = {
    variant?: ButtonVariant;
};

const ButtonBlock = ({ variant }: ButtonBlockProps) => {
    return (
        <>
            <Text as="h3" mb="m">
                {variant ? `Variant: ${variant}` : 'No Variant'}
            </Text>
            <Stack inline spacing="m" mb="3xl">
                <Button variant={variant} onClick={action('click')}>
                    PRIMARY DEFAULT
                </Button>
                <Button variant={variant} onClick={action('click')} disabled>
                    PRIMARY DISABLED
                </Button>
                <Button variant={variant} onClick={action('click')}>
                    <Icon pr="s">dashboard</Icon>
                    PRIMARY
                </Button>
                <Button variant={variant} onClick={action('click')}>
                    <Icon>dashboard</Icon>
                </Button>
            </Stack>
        </>
    );
};

const OutlineButtonBlock = ({ variant }: ButtonBlockProps) => {
    return (
        <>
            <Text as="h3" mb="m">
                {variant ? `Variant: ${variant}` : 'No Variant'}
            </Text>
            <Stack inline spacing="m" mb="3xl">
                <OutlineButton variant={variant} onClick={action('click')}>
                    OUTLINE DEFAULT
                </OutlineButton>
                <OutlineButton variant={variant} onClick={action('click')} disabled>
                    OUTLINE DISABLED
                </OutlineButton>
                <OutlineButton variant={variant} onClick={action('click')}>
                    <Icon pr="s">dashboard</Icon>
                    OUTLINE
                </OutlineButton>
                <OutlineButton variant={variant} onClick={action('click')}>
                    <Icon>dashboard</Icon>
                </OutlineButton>
            </Stack>
        </>
    );
};

const GhostButtonBlock = ({ variant }: ButtonBlockProps) => {
    return (
        <>
            <Text as="h3" mb="m">
                {variant ? `Variant: ${variant}` : 'No Variant'}
            </Text>
            <Stack inline spacing="m" mb="3xl">
                <GhostButton variant={variant} onClick={action('click')}>
                    GHOST DEFAULT
                </GhostButton>
                <GhostButton variant={variant} onClick={action('click')} disabled>
                    GHOST DISABLED
                </GhostButton>
                <GhostButton variant={variant} onClick={action('click')}>
                    <Icon pr="s">dashboard</Icon>
                    GHOST
                </GhostButton>
                <GhostButton variant={variant} onClick={action('click')}>
                    <Icon>dashboard</Icon>
                </GhostButton>
            </Stack>
        </>
    );
};

export const button = () => {
    return (
        <Box m="l">
            <ButtonBlock />
            <br />
            <ButtonBlock variant="secondary" />
            <br />
            <ButtonBlock variant="error" />
            <br />
            <ButtonBlock variant="warning" />
            <br />
            <ButtonBlock variant="success" />
        </Box>
    );
};

export const outlineButton = () => {
    return (
        <Box m="l">
            <OutlineButtonBlock />
            <br />
            <OutlineButtonBlock variant="secondary" />
            <br />
            <OutlineButtonBlock variant="error" />
            <br />
            <OutlineButtonBlock variant="warning" />
            <br />
            <OutlineButtonBlock variant="success" />
        </Box>
    );
};

export const ghostButton = () => {
    return (
        <Box m="l">
            <GhostButtonBlock />
            <br />
            <GhostButtonBlock variant="secondary" />
            <br />
            <GhostButtonBlock variant="error" />
            <br />
            <GhostButtonBlock variant="warning" />
            <br />
            <GhostButtonBlock variant="success" />
        </Box>
    );
};
