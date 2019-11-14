/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Flex from '../src/atoms/flex';
import Box from '../src/atoms/box';
import ErrorAlert from '../src/molecules/error-alert';
import { InputField, PrimaryButton, SecondaryButton, useForm, Row, Col, Input, TextAreaField } from '../src';
import Select from '../src/atoms/select';
import Inline from '../src/layout/inline';

const options = [
    { value: '', label: 'Bitte auswählen' },
    { value: '1', label: 'one' },
    { value: '2', label: 'two' },
    { value: '3', label: 'three' },
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Wrapper = ({ children }) => (
    <Flex justifyContent="center" alignItems="center" mt="xl">
        {children}
    </Flex>
);

const Form = ({ form }) => (
    <Box minWidth={['95%', '95%', '450px']} maxWidth={['95%', '95%', '450px']}>
        {form.formError && (
            <ErrorAlert
                mb="1rem"
                text={`Es ist ein Fehler aufgetreten. Fehlercode: ${form.formError.code}`}
                onClose={() => {
                    form.setFormError(null);
                    form.setFieldValue('email', 'test', true);
                }}
            />
        )}
        <InputField
            autoComplete="off"
            label="E-Mail"
            name="email"
            value={form.values.email}
            warning={form.warnings.email}
            error={form.errors.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            width="100%"
        />
        <InputField
            autoComplete="off"
            label="Passwort"
            type="password"
            name="password"
            value={form.values.password}
            warning={form.warnings.password}
            error={form.errors.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            width="100%"
        />
        <TextAreaField
            label="Info"
            name="info"
            value={form.values.info}
            warning={form.warnings.info}
            error={form.errors.info}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            width="100%"
        />
        <Select
            name="type"
            options={options}
            value={form.values.type}
            onChange={form.handleChange}
            buttonProps={{ width: '100%', mb: 's' }}
        />
        <Row gutter="5px">
            <Col span={[12, 6]}>
                <SecondaryButton
                    width="100%"
                    onClick={action('cancel')}
                >
                    Abbrechen
                </SecondaryButton>
            </Col>
            <Col span={[12, 6]}>
                <PrimaryButton
                    mt={['s', '0']}
                    width="100%"
                    onClick={form.handleSubmit}
                    disabled={form.submitDisabled}
                    loading={form.loading}
                >
                    Speichern
                </PrimaryButton>
            </Col>
        </Row>
    </Box>
);

const initialValues = { email: '', password: '', type: '', info: '' };

const validateSuccessForm = ({ email, password, info }) => {
    const errors = {};
    const warnings = {};

    if (!email) errors.email = 'Email is required';
    if (email && !email.includes('@')) errors.email = 'Email needs a @';

    if (!password) errors.password = 'Password is required';
    if (password && password.length < 5) warnings.password = 'Password min length is 5 characters';

    if (!info) warnings.info = 'You should enter a info';

    return { errors, warnings };
};

const validateErrorForm = ({ email }) => {
    const errors = {};
    const warnings = {};

    if (email && email.length < 5) warnings.email = 'Email should be at least 5 characters long';

    return { errors, warnings };
};

const success = async (values) => {
    await sleep(3000);
    action('submit')(values);
    return values;
};

const error = async () => {
    await sleep(1000);
    const err = new Error('a server error occured');
    err.code = 'E_INTERNAL';
    throw err;
};

const onSubmitSuccess = action('submit success');
const onSubmitError = action('submit error');
const validateOnChange = true;
const validateOnBlur = true;

const SuccessForm = ({ onSubmit }) => {
    const form = useForm({
        initialValues,
        validate: validateSuccessForm,
        onSubmit,
        onSubmitSuccess,
        onSubmitError,
        validateOnChange,
        validateOnBlur,
    });

    return (
        <Form form={form} />
    );
};

const ErrorForm = ({ onSubmit }) => {
    const form = useForm({
        initialValues,
        validate: validateErrorForm,
        onSubmit,
        onSubmitSuccess,
        onSubmitError,
        validateOnChange,
        validateOnBlur,
    });

    return (
        <Form form={form} />
    );
};

storiesOf('Form', module)
    .add('Responsive Form (Success)', () => (
        <Wrapper>
            <SuccessForm onSubmit={success} />
        </Wrapper>
    ))
    .add('Responsive Form (Error)', () => (
        <Wrapper>
            <ErrorForm onSubmit={error} />
        </Wrapper>
    ))
    .add('Inline', () => (
        <Wrapper>
            <Inline>
                <Input />
                <PrimaryButton onClick={action('submit')}>Submit</PrimaryButton>
            </Inline>
        </Wrapper>
    ));
