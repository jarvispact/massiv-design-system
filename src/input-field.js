import React from 'react';
import { string, bool, oneOfType, number, object, array, func, shape } from 'prop-types';
import Box from './box';
import Text from './text';
import Input from './input';
import Icon from './icon';

const defaultWrapperProps = {
    mb: 'm',
};

const defaultLabelProps = {
    pb: '2px',
    color: 'gray700',
};

const defaultInputProps = {
    bg: 'white',
    color: 'black',
};

const defaultHintProps = {
    pl: '3px',
    pt: '1px',
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'info',
};

const defaultWarningProps = {
    pl: '3px',
    pt: '1px',
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'warning',
};

const defaultErrorProps = {
    pl: '3px',
    pt: '1px',
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'error',
};

const getOutlineColor = (warning, error) => {
    if (warning) return 'warning';
    if (error) return 'error';
    return undefined;
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
            <Text as="label" htmlFor={id || name} {...defaultLabelProps} {...labelProps}>
                {label}
            </Text>
        )}
        <Input
            id={id || name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            outlineColor={getOutlineColor(warning, error)}
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
    onChange: func,
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
    value: undefined,
    onChange: undefined,
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
