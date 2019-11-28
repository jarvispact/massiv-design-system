import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/atoms/box';
import Text from '../src/atoms/text';
import Icon from '../src/atoms/icon';
import PrimaryButton from '../src/atoms/primary-button';
import SecondaryButton from '../src/atoms/secondary-button';
import TertiaryButton from '../src/atoms/tertiary-button';
import IconButton from '../src/molecules/icon-button';
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

storiesOf('Button', module)
    .add('Button', () => (
        <Wrapper>
            <SectionWrapper heading="Primary">
                <Inline spacing="m">
                    <PrimaryButton onClick={action('click')}>Primary Button</PrimaryButton>
                    <PrimaryButton onClick={action('click')} disabled>Primary disabled</PrimaryButton>
                    <PrimaryButton onClick={action('click')}>
                        <Icon name="settings" />
                        {' '}
                        Primary
                    </PrimaryButton>
                    <PrimaryButton onClick={action('click')}>
                        <Icon name="settings" />
                    </PrimaryButton>
                    <PrimaryButton onClick={action('click')} loading />
                </Inline>
            </SectionWrapper>
            <SectionWrapper heading="Secondary">
                <Inline spacing="m">
                    <SecondaryButton onClick={action('click')}>Secondary Button</SecondaryButton>
                    <SecondaryButton onClick={action('click')} disabled>Secondary disabled</SecondaryButton>
                    <SecondaryButton onClick={action('click')}>
                        <Icon name="settings" />
                        {' '}
                        Secondary
                    </SecondaryButton>
                    <SecondaryButton onClick={action('click')}>
                        <Icon name="settings" />
                    </SecondaryButton>
                    <SecondaryButton onClick={action('click')} loading />
                </Inline>
            </SectionWrapper>
            <SectionWrapper heading="Tertiary">
                <Inline spacing="m">
                    <TertiaryButton onClick={action('click')}>Tertiary Button</TertiaryButton>
                    <TertiaryButton onClick={action('click')} disabled>Tertiary disabled</TertiaryButton>
                    <TertiaryButton onClick={action('click')}>
                        <Icon name="settings" />
                        {' '}
                        Tertiary
                    </TertiaryButton>
                    <TertiaryButton onClick={action('click')}>
                        <Icon name="settings" />
                    </TertiaryButton>
                    <TertiaryButton onClick={action('click')} loading />
                </Inline>
            </SectionWrapper>
            <SectionWrapper heading="IconButton">
                <Inline spacing="m">
                    <IconButton onClick={action('click')} name="settings" />
                    <IconButton onClick={action('click')} disabled name="settings" />
                    <IconButton onClick={action('click')} loading />
                </Inline>
            </SectionWrapper>
        </Wrapper>
    ));
