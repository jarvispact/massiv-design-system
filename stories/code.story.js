import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../src/box';
import Code from '../src/code';

const error = new Error('this is some error');
error.code = 'E_INTERNAL_ERROR';

error.data = {
    foo: 'sdfkafkssxascsdf ccdscdscdsc scds',
    bar: {
        baz: {
            blub: 'adsc sc d dscs ewfewf cs dcds vdfverf',
        },
    },
};

const str = `
var foo = 'bar';

// some fn
const fn = () => {
    return foo;
};
`;

const data = {
    foo: 'sdfkafkssxascsdf ccdscdscdsc scds',
    bar: {
        baz: {
            blub: 'adsc sc d dscs ewfewf cs dcds vdfverf',
        },
    },
};

storiesOf('Code', module)
    .add('Code', () => (
        <Box p="l" width="300px">
            <Code>{data}</Code>
        </Box>
    ));
