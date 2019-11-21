import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/atoms/box';
import Select from '../src/atoms/select';

const options = [
    { value: '', label: 'Bitte auswählen' },
    { value: '1', label: 'eeins ywedcdvfd sdcscsac fvdvds sdc' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
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
