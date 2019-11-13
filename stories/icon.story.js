import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Icon from '../src/icon';
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

storiesOf('Icon', module)
    .add('Icon', () => (
        <Wrapper>
            <Icon name="aspect_ratio" />
            <Text>
                <Icon name="aspect_ratio" />
                UPPERCASE
            </Text>
            <Text>
                <Icon name="aspect_ratio" />
                lowercasey
            </Text>
            <Text>
                <Icon name="aspect_ratio" />
                Mixed Casey
            </Text>
            <Text as="h1">
                <Icon name="aspect_ratio" />
                Mixed Casey
            </Text>
            <Icon display="inline-block" name="keyboard_arrow_down" />
            <Text display="inline-block">Example Text</Text>
        </Wrapper>
    ));
