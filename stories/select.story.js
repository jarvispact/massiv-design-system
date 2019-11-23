import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../src/atoms/box';
import Select from '../src/atoms/select';

const options = [
    { value: '', label: 'Bitte auswählen' },
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
    { value: '4', label: 'four' },
    { value: '5', label: 'five' },
    { value: '6', label: 'six' },
    { value: '7', label: 'seven' },
    { value: '8', label: 'eight' },
    { value: '9', label: 'nine' },
    { value: '10', label: 'ten' },
    { value: '11', label: 'eleven' },
    { value: '12', label: 'twelve' },
    { value: '13', label: 'thirteen' },
    { value: '14', label: 'fourteen' },
    { value: '15', label: 'fifteen' },
    { value: '16', label: 'sixteen' },
    { value: '17', label: 'seventeen' },
    { value: '18', label: 'eighteen' },
    { value: '19', label: 'nineteen' },
    { value: '20', label: 'twenty' },
];

const Field = () => {
    const [state, setState] = useState('');
    return <Select name="select" value={state} onChange={e => setState(e.target.value)} options={options} />;
};

storiesOf('Select', module)
    .add('Select', () => (
        <Box p="m">
            <Field />
        </Box>
    ));
