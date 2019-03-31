import React from 'react';
import { string, bool, func, node } from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    border-style: none;
    &:focus { outline: 0; }
    padding: 0.4rem;
    border-radius: 2px;
    background-color: ${props => props.theme.colors[props.massivBg] || props.massivBg};
    cursor: ${props => (props.disabled && 'not-allowed')};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fonts.input.family};
    font-weight: ${props => props.theme.fonts.input.weights[props.massivFontWeight] || props.massivFontWeight || props.theme.fonts.input.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivFontScale] || props.massivFontScale};
    color: ${props => props.theme.colors[props.massivFontColor] || props.massivFontColor};
`;

const Input = ({
    type,
    id,
    name,
    value,
    disabled,
    onChange,
    onBlur,
    onFocus,
    fontWeight,
    fontScale,
    fontColor,
    bg,
    children,
    ...otherProps
}) => (
    <StyledInput
        type={type}
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        massivFontWeight={fontWeight}
        massivFontScale={fontScale}
        massivFontColor={fontColor}
        massivBg={bg}
        {...otherProps}
    >
        {children}
    </StyledInput>
);

Input.propTypes = {
    type: string,
    id: string,
    name: string,
    value: string,
    disabled: bool,
    onChange: func,
    onBlur: func,
    onFocus: func,
    fontWeight: string,
    fontScale: string,
    fontColor: string,
    bg: string,
    children: node,
};

Input.defaultProps = {
    type: 'text',
    id: undefined,
    name: undefined,
    value: undefined,
    disabled: false,
    onChange: undefined,
    onBlur: undefined,
    onFocus: undefined,
    fontWeight: undefined,
    fontScale: undefined,
    fontColor: undefined,
    bg: undefined,
    children: undefined,
};

export default Input;
