import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Text from '../src/text';

const Wrapper = styled.div`
    margin: 10px;

    * {
        margin-bottom: 8px;
    }

    & :last-child {
        margin-bottom: 0px;
    }
`;

storiesOf('Text', module)
    .add('Text', () => (
        <Wrapper>
            <Text as="h1">H1</Text>
            <Text as="h2">H2</Text>
            <Text as="h3">H3</Text>
            <Text as="h4">H4</Text>
            <Text as="h5">H5</Text>
            <Text as="h6">H6</Text>
            <Text>Simple Text</Text>
            <Text as="label" display="block">Label</Text>
            <Text as="a" href="https://jarvispact.com">Link</Text>
            <Text as="p">P</Text>
        </Wrapper>
    ));
