/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '.';
import Box from '../Box';

storiesOf('Grid', module)
    .add('Grid', () => (
        <Grid.Row gutter={['xs', 's', 'm']} columns={[12, 12, 6, 3]}>
            <Grid.Col>
                <Box height="3rem" bg="error">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="warning">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="info">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="primary">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="primary">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="info">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="warning">TEST</Box>
            </Grid.Col>
            <Grid.Col>
                <Box height="3rem" bg="error">TEST</Box>
            </Grid.Col>
        </Grid.Row>
    ));
