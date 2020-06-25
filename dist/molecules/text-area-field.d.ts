import React from 'react';
declare type Props = {
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
export declare const TextAreaField: ({ inline, disabled, gridArea, name, value, onChange, label, hint, warning, error, ...others }: Props) => JSX.Element;
export {};
