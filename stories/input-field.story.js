import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';
import Flex from '../src/flex';
import Box from '../src/box';
import theme from '../src/default-theme';
import H3 from '../src/h3';
import Text from '../src/text';
import InputField from '../src/input-field';

const Wrapper = ({ children }) => (
    <Box mb="m">
        {children}
    </Box>
);

const SectionWrapper = ({ heading, children }) => (
    <>
        <H3 mt="2.5rem" mb="s" ml="s">{heading}</H3>
        <Box ml="s">
            {children}
        </Box>
    </>
);

storiesOf('InputField', module)
    .add('Simple Example', () => (
        <Wrapper>
            <SectionWrapper heading="Simple Input">
                <InputField
                    name="simple-uncontrolled"
                />
            </SectionWrapper>
            <SectionWrapper heading="Input with label">
                <InputField
                    name="input-with-label"
                    label="A Label"
                />
            </SectionWrapper>
            <SectionWrapper heading="Input with label and hint">
                <InputField
                    name="input-with-label-and-hint"
                    label="A Label"
                    hint="Some hint"
                />
            </SectionWrapper>
            <SectionWrapper heading="Input with label and warning">
                <InputField
                    name="input-with-label-and-warning"
                    label="A Label"
                    warning="Some warning"
                />
            </SectionWrapper>
            <SectionWrapper heading="Input with label and error">
                <InputField
                    name="input-with-label-and-error"
                    label="A Label"
                    error="Some error"
                />
            </SectionWrapper>
        </Wrapper>
    ));
