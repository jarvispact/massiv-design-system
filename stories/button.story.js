import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/box';
import Text from '../src/text';
import Icon from '../src/icon';
import { PrimaryButton, SecondaryButton, InvisibleButton } from '../src';

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
                <PrimaryButton onClick={action('click')}>Primary Button</PrimaryButton>
                <PrimaryButton disabled ml="0.5rem">Disabled Primary</PrimaryButton>
                <PrimaryButton ml="0.5rem">
                    <Icon name="settings" />
                    {' '}
primary
                </PrimaryButton>
                <PrimaryButton ml="0.5rem"><Icon name="settings" /></PrimaryButton>
            </SectionWrapper>
            <SectionWrapper heading="Secondary Button">
                <SecondaryButton>Secondary Button</SecondaryButton>
                <SecondaryButton disabled ml="0.5rem">Disabled Secondary</SecondaryButton>
                <SecondaryButton ml="0.5rem">
                    <Icon name="settings" />
                    {' '}
SECONDARY
                </SecondaryButton>
                <SecondaryButton ml="0.5rem"><Icon name="settings" /></SecondaryButton>
            </SectionWrapper>
            <SectionWrapper heading="Invisible Button">
                <InvisibleButton><Icon name="settings" fontSize="xxl" /></InvisibleButton>
                <InvisibleButton disabled ml="0.5rem"><Icon name="settings" fontSize="xxl" /></InvisibleButton>
            </SectionWrapper>
        </Wrapper>
    ));
