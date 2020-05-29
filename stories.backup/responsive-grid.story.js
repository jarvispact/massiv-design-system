import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../src/atoms/box';
import Text from '../src/atoms/text';
import Row from '../src/layout/row';
import Col from '../src/layout/col';

// eslint-disable-next-line react/prop-types
const Wrapper = ({ children }) => (
    <Box m="m">{children}</Box>
);

// eslint-disable-next-line react/prop-types
const ColumnBox = ({ label }) => (
    <Box bg="info" color="white" p="m">
        <Text fontWeight="l" textAlign="center">{label}</Text>
    </Box>
);

const gutter = 'xs';
const rowMarginBottom = 's';

storiesOf('Column Layout', module)
    .add('Fixed Layout', () => (
        <Wrapper>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={12}><ColumnBox label="12" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={1}><ColumnBox label="1" /></Col>
                <Col span={11}><ColumnBox label="11" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={2}><ColumnBox label="2" /></Col>
                <Col span={10}><ColumnBox label="10" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={3}><ColumnBox label="3" /></Col>
                <Col span={9}><ColumnBox label="9" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={4}><ColumnBox label="4" /></Col>
                <Col span={8}><ColumnBox label="8" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={5}><ColumnBox label="5" /></Col>
                <Col span={7}><ColumnBox label="7" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={6}><ColumnBox label="6" /></Col>
                <Col span={6}><ColumnBox label="6" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={7}><ColumnBox label="7" /></Col>
                <Col span={5}><ColumnBox label="5" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={8}><ColumnBox label="8" /></Col>
                <Col span={4}><ColumnBox label="4" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={9}><ColumnBox label="9" /></Col>
                <Col span={3}><ColumnBox label="3" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={10}><ColumnBox label="10" /></Col>
                <Col span={2}><ColumnBox label="2" /></Col>
            </Row>
            <Row gutter={gutter} mb={rowMarginBottom}>
                <Col span={11}><ColumnBox label="11" /></Col>
                <Col span={1}><ColumnBox label="1" /></Col>
            </Row>
        </Wrapper>
    ))
    .add('Responsive Layout', () => (
        <Wrapper>
            <Row gutter={gutter}>
                <Col span={[12, 12, 6]} mb={rowMarginBottom}><ColumnBox label="6" /></Col>
                <Col span={[12, 12, 6]} mb={rowMarginBottom}><ColumnBox label="6" /></Col>
            </Row>
            <Row gutter={gutter}>
                <Col span={[12, 12, 4]} mb={rowMarginBottom}><ColumnBox label="4" /></Col>
                <Col span={[12, 12, 4]} mb={rowMarginBottom}><ColumnBox label="4" /></Col>
                <Col span={[12, 12, 4]} mb={rowMarginBottom}><ColumnBox label="4" /></Col>
            </Row>
            <Row gutter={gutter}>
                <Col span={[12, 6, 3]} mb={rowMarginBottom}><ColumnBox label="3" /></Col>
                <Col span={[12, 6, 3]} mb={rowMarginBottom}><ColumnBox label="3" /></Col>
                <Col span={[12, 6, 3]} mb={rowMarginBottom}><ColumnBox label="3" /></Col>
                <Col span={[12, 6, 3]} mb={rowMarginBottom}><ColumnBox label="3" /></Col>
            </Row>
        </Wrapper>
    ));
