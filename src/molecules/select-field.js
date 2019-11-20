import React from 'react';
import { string, bool, oneOfType, number, object, array, func, shape, arrayOf } from 'prop-types';
import Stack from '../layout/stack';
import Text from '../atoms/text';
import Icon from '../atoms/icon';
import Select from '../atoms/select';

const defaultWrapperProps = {
    mb: 'm',
    spacing: 'xs',
};

const defaultLabelProps = {
    color: 'gray700',
};

const defaultHintProps = {
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'info',
};

const defaultWarningProps = {
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'warning',
};

const defaultErrorProps = {
    fontSize: 'xs',
    lineHeight: 'xs',
    color: 'error',
};

const getOutlineColor = (warning, error) => {
    if (warning) return 'warning';
    if (error) return 'error';
    return undefined;
};

const SelectField = ({
    id,
    name,
    label,
    defaultLabel,
    options,
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
    <Stack {...defaultWrapperProps} {...wrapperProps}>
        {label && (
            <Text as="label" htmlFor={id || name} {...defaultLabelProps} {...labelProps}>
                {label}
            </Text>
        )}
        <Select
            id={id || name}
            name={name}
            defaultLabel={defaultLabel}
            options={options}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            buttonProps={{
                outlineColor: getOutlineColor(warning, error),
                ...others.buttonProps,
            }}
            iconProps={others.iconProps}
            dropdownProps={others.dropdownProps}
        />
        {hint && !warning && !error && (
            <Text {...defaultHintProps} {...hintProps}>
                <Icon name="info" aria-hidden="true" />
                {' '}
                {hint}
            </Text>
        )}
        {warning && !error && (
            <Text {...defaultWarningProps} {...warningProps}>
                <Icon name="warning" aria-hidden="true" />
                {' '}
                {warning}
            </Text>
        )}
        {error && (
            <Text {...defaultErrorProps} {...errorProps}>
                <Icon name="error" aria-hidden="true" />
                {' '}
                {error}
            </Text>
        )}
    </Stack>
);

SelectField.propTypes = {
    id: string,
    name: string.isRequired,
    label: string,
    defaultLabel: string,
    options: arrayOf(shape({
        value: string.isRequired,
        label: string.isRequired,
    })).isRequired,
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

SelectField.defaultProps = {
    id: undefined,
    label: undefined,
    defaultLabel: undefined,
    value: undefined,
    onChange: undefined,
    onBlur: undefined,
    disabled: undefined,
    hint: undefined,
    warning: undefined,
    error: undefined,
    wrapperProps: undefined,
    labelProps: undefined,
    hintProps: undefined,
    warningProps: undefined,
    errorProps: undefined,
};

export default SelectField;
