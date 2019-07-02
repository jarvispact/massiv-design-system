import React from 'react';
import { string, bool, oneOfType, number, object, array, func, shape } from 'prop-types';
import Box from './box';
import Text from './text';
import Label from './label';
import Input from './input';
import Icon from './icon';

const defaultWrapperProps = {
    mb: 'm',
    width: '100%',
};

const defaultLabelProps = {
    color: 'black',
};

const defaultInputProps = {
    width: '100%',
    bg: 'white',
    color: 'black',
};

const defaultHintProps = {
    pl: '5px',
    scale: 'xs',
    color: 'gray300',
};

const defaultWarningProps = {
    pl: '5px',
    scale: 'xs',
    color: 'warning',
};

const defaultErrorProps = {
    pl: '5px',
    scale: 'xs',
    color: 'error',
};

const InputField = ({
    id,
    name,
    label,
    type,
    value,
    onChange,
    onBlur,
    disabled,
    hint,
    warning,
    error,
    wrapperProps,
    labelProps,
    hintProps,
    warningProps,
    errorProps,
    ...others
}) => (
    <Box {...defaultWrapperProps} {...wrapperProps}>
        {label && (
            <Label htmlFor={id || name} {...defaultLabelProps} {...labelProps}>
                {label}
            </Label>
        )}
        <Input
            id={id || name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            {...defaultInputProps}
            {...others}
        />
        {hint && !warning && !error && (
            <Text {...defaultHintProps} {...hintProps}>
                <Icon name="info" />
                {' '}
                {hint}
            </Text>
        )}
        {warning && !error && (
            <Text {...defaultWarningProps} {...warningProps}>
                <Icon name="warning" />
                {' '}
                {warning}
            </Text>
        )}
        {error && (
            <Text {...defaultErrorProps} {...errorProps}>
                <Icon name="error" />
                {' '}
                {error}
            </Text>
        )}
    </Box>
);

InputField.propTypes = {
    id: string,
    name: string.isRequired,
    label: string,
    type: string,
    value: oneOfType([array, object, string, number, bool]),
    onChange: func.isRequired,
    onBlur: func,
    disabled: bool,
    hint: string,
    warning: string,
    error: string,
    wrapperProps: shape({}),
    labelProps: shape({}),
    hintProps: shape({}),
    warningProps: shape({}),
    errorProps: shape({}),
};

InputField.defaultProps = {
    id: undefined,
    label: undefined,
    type: 'text',
    value: '',
    onBlur: undefined,
    disabled: undefined,
    hint: undefined,
    warning: undefined,
    error: undefined,
    wrapperProps: {},
    labelProps: {},
    hintProps: {},
    warningProps: {},
    errorProps: {},
};

export default InputField;
