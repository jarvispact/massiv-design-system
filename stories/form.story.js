/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Flex from '../src/flex';
import Box from '../src/box';
import ErrorAlert from '../src/error-alert';
import { InputField, PrimaryButton, SecondaryButton, useForm, Row, Col } from '../src';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Wrapper = ({ children }) => (
    <Box height="100vh">
        <Flex justifyContent="center" alignItems="center" height="100%">
            {children}
        </Flex>
    </Box>
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

const initialValues = { email: '', password: '' };

const validateSuccessForm = ({ email, password }) => {
    const errors = {};
    const warnings = {};

    if (!email) errors.email = 'Email is required';
    if (email && !email.includes('@')) errors.email = 'Email needs a @';

    if (!password) errors.password = 'Password is required';
    if (password && password.length < 5) warnings.password = 'Password min length is 5 characters';

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
    ));
