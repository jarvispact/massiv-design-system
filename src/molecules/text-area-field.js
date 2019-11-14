import React from 'react';
import { string, bool, oneOfType, number, object, array, func, shape } from 'prop-types';
import Stack from '../layout/stack';
import Text from '../atoms/text';
import TextArea from '../atoms/text-area';
import Icon from '../atoms/icon';

const defaultWrapperProps = {
    mb: 'm',
    spacing: 'xs',
};

const defaultLabelProps = {
    color: 'gray700',
};

const defaultTextAreaProps = {
    bg: 'white',
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

const TextAreaField = ({
    id,
    name,
    label,
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
        <TextArea
            rows="6"
            id={id || name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            outlineColor={getOutlineColor(warning, error)}
            {...defaultTextAreaProps}
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
    </Stack>
);

TextAreaField.propTypes = {
    id: string,
    name: string.isRequired,
    label: string,
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

TextAreaField.defaultProps = {
    id: undefined,
    label: undefined,
    value: '',
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

export default TextAreaField;
