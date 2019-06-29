import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../src/box';
import Row from '../src/row';
import Col from '../src/col';

storiesOf('Responsive Grid', module)
    .add('Span 12', () => (
        <Box width="100vw">
            <Row gutter="s">
                <Col span={12}><Box bg="red" width="100%">test</Box></Col>
            </Row>
        </Box>
    ))
    .add('Span 6', () => (
        <Box width="100vw">
            <Row>
                <Col span={[12, 6]}><Box bg="red" width="100%">test</Box></Col>
                <Col span={[12, 6]}><Box bg="green" width="100%">test</Box></Col>
            </Row>
        </Box>
    ))
    .add('Span 4', () => (
        <Box width="100vw">
            <Row gutter="s">
                <Col span={[12, 6, 4]}><Box bg="red" width="100%">test</Box></Col>
                <Col span={[12, 6, 4]}><Box bg="green" width="100%">test</Box></Col>
                <Col span={[12, 6, 4]}><Box bg="blue" width="100%">test</Box></Col>
            </Row>
        </Box>
    ))
    .add('Span 3', () => (
        <Box width="100vw">
            <Row gutter="s">
                <Col span={[12, 6, 4, 3]}><Box bg="red" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 3]}><Box bg="green" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 3]}><Box bg="blue" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 3]}><Box bg="yellow" width="100%">test</Box></Col>
            </Row>
        </Box>
    ))
    .add('Span 2', () => (
        <Box width="100vw">
            <Row gutter={['s', 's', 'xl', 'xxl']}>
                <Col span={[12, 6, 4, 2]}><Box bg="red" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 2]}><Box bg="green" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 2]}><Box bg="blue" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 2]}><Box bg="yellow" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 2]}><Box bg="orange" width="100%">test</Box></Col>
                <Col span={[12, 6, 4, 2]}><Box bg="pink" width="100%">test</Box></Col>
            </Row>
        </Box>
    ));
