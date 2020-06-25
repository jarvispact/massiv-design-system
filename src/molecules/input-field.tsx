import React from 'react';
import { Input, Text, Icon } from '../atoms';
import { Stack } from '../layout';

type Props = {
    inline?: boolean;
    disabled?: boolean;
    gridArea?: string;
    name: string;
    value?: unknown;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    hint?: string;
    warning?: string;
    error?: string;
    [x: string]: unknown;
};

const getOutlineColor = (error?: string, warning?: string): string => {
    if (error) return 'error.500';
    if (warning) return 'warning.500';
    return 'primary.500';
};

export const InputField = ({
    inline,
    disabled,
    gridArea,
    name,
    value,
    onChange,
    label,
    hint,
    warning,
    error,
    ...others
}: Props) => (
    <Stack spacing="s" inline={inline} {...(inline ? { mr: 'xl' } : { mb: 'xl' })} gridArea={gridArea || name}>
        {label && (
            <Text as="label" htmlFor={name} color="gray.700" display="block">
                {label}
            </Text>
        )}
        <Input
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            aria-describedby={`${name}-aria-description`}
            outlineColor={getOutlineColor(error, warning)}
            disabled={disabled}
            {...others}
        />
        {hint && !warning && !error && (
            <Text id={`${name}-aria-description`} fontSize="xs" color="gray.700">
                <Icon aria-hidden="true">info</Icon> {hint}
            </Text>
        )}
        {warning && !error && (
            <Text id={`${name}-aria-description`} fontSize="xs" color="warning.700">
                <Icon aria-hidden="true">warning</Icon> {warning}
            </Text>
        )}
        {error && (
            <Text id={`${name}-aria-description`} fontSize="xs" color="error.700">
                <Icon aria-hidden="true">error</Icon> {error}
            </Text>
        )}
    </Stack>
);
