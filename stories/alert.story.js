import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/atoms/box';
import Text from '../src/atoms/text';
import ErrorAlert from '../src/error-alert';
import WarningAlert from '../src/warning-alert';
import InfoAlert from '../src/info-alert';
import SuccessAlert from '../src/success-alert';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
    <Box m="m" maxWidth="600px">
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

storiesOf('Alert', module)
    .add('Error Alert', () => (
        <Wrapper>
            <SectionWrapper heading="simple text content">
                <ErrorAlert text="This is a simple error message" />
            </SectionWrapper>
            <SectionWrapper heading="with close icon">
                <ErrorAlert text="This is a simple error message" onClose={action('onClose')} />
            </SectionWrapper>
            <SectionWrapper heading="with children component">
                <ErrorAlert onClose={action('onClose')}>
                    <Text as="h6" color="error700">A custom Component with a List</Text>
                    <Box as="ul" pl="20px" pt="10px">
                        <Text as="li" color="error700">one</Text>
                        <Text as="li" color="error700">two</Text>
                        <Text as="li" color="error700">three</Text>
                    </Box>
                </ErrorAlert>
            </SectionWrapper>
        </Wrapper>
    ))
    .add('Warning Alert', () => (
        <Wrapper>
            <SectionWrapper heading="simple text content">
                <WarningAlert text="This is a simple warning message" />
            </SectionWrapper>
            <SectionWrapper heading="with close icon">
                <WarningAlert text="This is a simple warning message" onClose={action('onClose')} />
            </SectionWrapper>
            <SectionWrapper heading="with children component">
                <WarningAlert onClose={action('onClose')}>
                    <Text as="h6" color="warning700">A custom Component with a List</Text>
                    <Box as="ul" pl="20px" pt="10px">
                        <Text as="li" color="warning700">one</Text>
                        <Text as="li" color="warning700">two</Text>
                        <Text as="li" color="warning700">three</Text>
                    </Box>
                </WarningAlert>
            </SectionWrapper>
        </Wrapper>
    ))
    .add('Info Alert', () => (
        <Wrapper>
            <SectionWrapper heading="simple text content">
                <InfoAlert text="This is a simple info message" />
            </SectionWrapper>
            <SectionWrapper heading="with close icon">
                <InfoAlert text="This is a simple info message" onClose={action('onClose')} />
            </SectionWrapper>
            <SectionWrapper heading="with children component">
                <InfoAlert onClose={action('onClose')}>
                    <Text as="h6" color="info700">A custom Component with a List</Text>
                    <Box as="ul" pl="20px" pt="10px">
                        <Text as="li" color="info700">one</Text>
                        <Text as="li" color="info700">two</Text>
                        <Text as="li" color="info700">three</Text>
                    </Box>
                </InfoAlert>
            </SectionWrapper>
        </Wrapper>
    ))
    .add('Success Alert', () => (
        <Wrapper>
            <SectionWrapper heading="simple text content">
                <SuccessAlert text="This is a simple success message" />
            </SectionWrapper>
            <SectionWrapper heading="with close icon">
                <SuccessAlert text="This is a simple success message" onClose={action('onClose')} />
            </SectionWrapper>
            <SectionWrapper heading="with children component">
                <SuccessAlert onClose={action('onClose')}>
                    <Text as="h6" color="success700">A custom Component with a List</Text>
                    <Box as="ul" pl="20px" pt="10px">
                        <Text as="li" color="success700">one</Text>
                        <Text as="li" color="success700">two</Text>
                        <Text as="li" color="success700">three</Text>
                    </Box>
                </SuccessAlert>
            </SectionWrapper>
        </Wrapper>
    ));
