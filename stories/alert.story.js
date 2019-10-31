import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/box';
import H3 from '../src/h3';
import Text from '../src/text';
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
        <H3 mt="2.5rem" mb="s" ml="s">{heading}</H3>
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
                    <H3 color="error900">A custom Component with a List</H3>
                    <ul style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                        <li><Text color="error900">one</Text></li>
                        <li><Text color="error900">two</Text></li>
                        <li><Text color="error900">three</Text></li>
                    </ul>
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
                    <H3 color="warning900">A custom Component with a List</H3>
                    <ul style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                        <li><Text color="warning900">one</Text></li>
                        <li><Text color="warning900">two</Text></li>
                        <li><Text color="warning900">three</Text></li>
                    </ul>
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
                    <H3 color="info900">A custom Component with a List</H3>
                    <ul style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                        <li><Text color="info900">one</Text></li>
                        <li><Text color="info900">two</Text></li>
                        <li><Text color="info900">three</Text></li>
                    </ul>
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
                    <H3 color="success900">A custom Component with a List</H3>
                    <ul style={{ paddingLeft: '20px', paddingTop: '10px' }}>
                        <li><Text color="success900">one</Text></li>
                        <li><Text color="success900">two</Text></li>
                        <li><Text color="success900">three</Text></li>
                    </ul>
                </SuccessAlert>
            </SectionWrapper>
        </Wrapper>
    ));
