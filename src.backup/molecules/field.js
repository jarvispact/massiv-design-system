import React from 'react';
import { string, shape, node } from 'prop-types';
import Stack from '../layout/stack';
import Text from '../atoms/text';
import Icon from '../atoms/icon';

const Field = ({
    name,
    label,
    hint,
    warning,
    error,
    wrapperProps,
    labelProps,
    hintProps,
    warningProps,
    errorProps,
    children,
}) => (
    <Stack mb="m" spacing="xs" {...wrapperProps}>
        {label && (
            <Text as="label" id={`${name}-label`} htmlFor={name} color="gray700" {...labelProps}>
                {label}
            </Text>
        )}
        {children}
        {hint && !warning && !error && (
            <Text fontSize="xs" lineHeight="xs" color="info" {...hintProps}>
                <Icon name="info" aria-hidden="true" />
                {' '}
                {hint}
            </Text>
        )}
        {warning && !error && (
            <Text fontSize="xs" lineHeight="xs" color="warning" {...warningProps}>
                <Icon name="warning" aria-hidden="true" />
                {' '}
                {warning}
            </Text>
        )}
        {error && (
            <Text fontSize="xs" lineHeight="xs" color="error" {...errorProps}>
                <Icon name="error" aria-hidden="true" />
                {' '}
                {error}
            </Text>
        )}
    </Stack>
);

Field.propTypes = {
    name: string.isRequired,
    label: string,
    hint: string,
    warning: string,
    error: string,
    wrapperProps: shape({}),
    labelProps: shape({}),
    hintProps: shape({}),
    warningProps: shape({}),
    errorProps: shape({}),
    children: node.isRequired,
};

Field.defaultProps = {
    label: undefined,
    hint: undefined,
    warning: undefined,
    error: undefined,
    wrapperProps: undefined,
    labelProps: undefined,
    hintProps: undefined,
    warningProps: undefined,
    errorProps: undefined,
};

export default Field;
