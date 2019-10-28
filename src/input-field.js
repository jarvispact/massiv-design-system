import React from 'react';
import { string, bool, oneOfType, number, object, array, func, shape } from 'prop-types';
import Box from './box';
import Text from './text';
import Label from './label';
import Input from './input';
import Icon from './icon';

const defaultWrapperProps = {
    mb: 'm',
};

const defaultLabelProps = {
    display: 'block',
    pb: '2px',
    color: 'gray700',
};

const defaultInputProps = {
    bg: 'white',
    color: 'black',
};

const defaultHintProps = {
    display: 'block',
    pl: '3px',
    pt: '1px',
    fontSize: 'xs',
    color: 'info',
};

const defaultWarningProps = {
    display: 'block',
    pl: '3px',
    pt: '1px',
    fontSize: 'xs',
    color: 'warning',
};

const defaultErrorProps = {
    display: 'block',
    pl: '3px',
    pt: '1px',
    fontSize: 'xs',
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
