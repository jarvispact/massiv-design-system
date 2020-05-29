import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/atoms/box';
import Text from '../src/atoms/text';
import Icon from '../src/atoms/icon';
import PrimaryButton from '../src/atoms/primary-button';
import SecondaryButton from '../src/atoms/secondary-button';
import TertiaryButton from '../src/atoms/tertiary-button';
import Stack from '../src/layout/stack';
import Inline from '../src/layout/inline';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
    <Box m="m">
        {children}
    </Box>
);

// eslint-disable-next-line react/prop-types
const SectionWrapper = ({ heading, children }) => (
    <>
        <Text as="h3" mt="2.5rem" mb="s" ml="s">{heading}</Text>
        <Box ml="s">
            {children}
        </Box>
    </>
);

// eslint-disable-next-line react/prop-types
const PrimaryButtonBlock = ({ variant }) => (
    <Stack spacing="s">
        <Inline spacing="s">
            <PrimaryButton onClick={action('click')} variant={variant}>Primary Button</PrimaryButton>
            <PrimaryButton onClick={action('click')} variant={variant} disabled>Primary disabled</PrimaryButton>
            <PrimaryButton onClick={action('click')} variant={variant}>
                <Icon name="settings" />
                {' '}
            Primary
            </PrimaryButton>
            <PrimaryButton onClick={action('click')} variant={variant}>
                <Icon name="settings" />
            </PrimaryButton>
            <PrimaryButton onClick={action('click')} variant={variant} loading />
        </Inline>
    </Stack>
);

// eslint-disable-next-line react/prop-types
const SecondaryButtonBlock = ({ variant }) => (
    <Stack spacing="s">
        <Inline spacing="s">
            <SecondaryButton onClick={action('click')} variant={variant}>Secondary Button</SecondaryButton>
            <SecondaryButton onClick={action('click')} variant={variant} disabled>Secondary disabled</SecondaryButton>
            <SecondaryButton onClick={action('click')} variant={variant}>
                <Icon name="settings" />
                {' '}
                Secondary
            </SecondaryButton>
            <SecondaryButton onClick={action('click')} variant={variant}>
                <Icon name="settings" />
            </SecondaryButton>
            <SecondaryButton onClick={action('click')} variant={variant} loading />
        </Inline>
    </Stack>
);

// eslint-disable-next-line react/prop-types
const TertiaryButtonBlock = ({ variant }) => (
    <Stack spacing="s">
        <Inline spacing="s">
            <TertiaryButton onClick={action('click')} variant={variant}>Tertiary Button</TertiaryButton>
            <TertiaryButton onClick={action('click')} variant={variant} disabled>Tertiary disabled</TertiaryButton>
            <TertiaryButton onClick={action('click')} variant={variant}>
                <Icon name="settings" />
                {' '}
                Tertiary
            </TertiaryButton>
            <TertiaryButton onClick={action('click')} variant={variant}>
                <Icon name="settings" />
            </TertiaryButton>
            <TertiaryButton onClick={action('click')} variant={variant} loading />
        </Inline>
    </Stack>
);

storiesOf('Button', module)
    .add('Button', () => (
        <Wrapper>
            <SectionWrapper heading="Primary">
                <Stack spacing="s">
                    <PrimaryButtonBlock />
                    <PrimaryButtonBlock variant="error" />
                    <PrimaryButtonBlock variant="warning" />
                    <PrimaryButtonBlock variant="success" />
                    <PrimaryButtonBlock variant="info" />
                </Stack>
            </SectionWrapper>
            <SectionWrapper heading="Secondary">
                <Stack spacing="s">
                    <SecondaryButtonBlock />
                    <SecondaryButtonBlock variant="error" />
                    <SecondaryButtonBlock variant="warning" />
                    <SecondaryButtonBlock variant="success" />
                    <SecondaryButtonBlock variant="info" />
                </Stack>
            </SectionWrapper>
            <SectionWrapper heading="Tertiary">
                <Stack spacing="s">
                    <TertiaryButtonBlock />
                    <TertiaryButtonBlock variant="error" />
                    <TertiaryButtonBlock variant="warning" />
                    <TertiaryButtonBlock variant="success" />
                    <TertiaryButtonBlock variant="info" />
                </Stack>
            </SectionWrapper>
        </Wrapper>
    ));
