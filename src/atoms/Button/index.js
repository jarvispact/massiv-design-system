import React from 'react';
import { bool, string, func, node } from 'prop-types';
import StyledButton from './StyledButton';

const propTypes = {
    disabled: bool,
    color: string,
    scale: string,
    fontColor: string,
    onClick: func.isRequired,
    children: node.isRequired,
};

const defaultProps = {
    disabled: undefined,
    color: undefined,
    scale: undefined,
    fontColor: undefined,
};

const Button = ({ disabled, color, scale, fontColor, onClick, children }) => (
    <StyledButton
        type="button"
        disabled={disabled}
        onClick={onClick}
        color={color}
        scale={scale}
        fontColor={fontColor}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
