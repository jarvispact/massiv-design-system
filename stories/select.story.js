import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/box';
import Select from '../src/select';

const options = [
    { value: '', label: 'Bitte auswählen' },
    { value: '1', label: 'eeins ywedcdvfd sdcscsac fvdvds sdc' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
];

storiesOf('Select', module)
    .add('Select', () => (
        <Box p="m">
            <Select name="select" value="" onChange={action('onChange')} options={options}>Click me</Select>
            <Box>SomeBox</Box>
        </Box>
    ));
