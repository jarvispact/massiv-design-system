/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '.';
import Box from '../Box';

const S = 12;
const M = 6;
const L = 3;

storiesOf('Grid', module)
    .add('Grid', () => (
        <Grid.Row gutter="xs">
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="error">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="warning">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="info">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="primary">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="primary">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="info">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="warning">TEST</Box>
            </Grid.Col>
            <Grid.Col s={S} m={M} l={L}>
                <Box height="3rem" bg="error">TEST</Box>
            </Grid.Col>
        </Grid.Row>
    ));
