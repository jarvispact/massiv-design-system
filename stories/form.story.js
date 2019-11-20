/* eslint-disable react/prop-types */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Flex from '../src/atoms/flex';
import Box from '../src/atoms/box';
import ErrorAlert from '../src/molecules/error-alert';
import InputField from '../src/molecules/input-field';
import TextAreaField from '../src/molecules/text-area-field';
import SelectField from '../src/molecules/select-field';
import LoadingIndicator from '../src/atoms/loading-indicator';
import PrimaryButton from '../src/atoms/primary-button';
import SecondaryButton from '../src/atoms/secondary-button';
import useForm from '../src/hooks/use-form';
import Row from '../src/layout/row';
import Col from '../src/layout/col';

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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Wrapper = ({ children }) => (
    <Flex justifyContent="center" alignItems="center" mt="xl" mb="xl">
        {children}
    </Flex>
);

const Form = ({ form }) => (
    <Box minWidth={['95%', '95%', '450px']} maxWidth={['95%', '95%', '450px']}>
        {form.loading && (
            <Flex justifyContent="center" alignItems="center" p="m">
                <LoadingIndicator fontSize="45px" color="primary" />
            </Flex>
        )}
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
            autoFocus
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
        <SelectField
            label="Typ"
            defaultLabel="Typ auswählen"
            name="type"
            options={options}
            value={form.values.type}
            warning={form.warnings.type}
            error={form.errors.type}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            buttonProps={{ width: '100%' }}
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

const validateSuccessForm = ({ email, password, info, type }) => {
    const errors = {};
    const warnings = {};

    if (!email) errors.email = 'Die E-Mail Adresse darf nicht leer sein';
    if (email && !email.includes('@')) errors.email = 'Das Format der E-Mail Adressestimmt nicht';

    if (!password) errors.password = 'Das Passwort darf nicht leer sein';
    if (password && password.length < 5) warnings.password = 'Ein Passwort sollte mindestens 5 Zeichen lang sein';

    if (!info) warnings.info = 'Es sollte eine Info eingetragen werden';

    if (!type) errors.type = 'Es muss ein Typ ausgewählt werden';
    if (type && type === '1') warnings.type = 'Es sollte ventuell eine andere Option ausgewählt werden';

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
    await sleep(10000);
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
