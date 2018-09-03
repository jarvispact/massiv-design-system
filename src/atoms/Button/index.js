import React from 'react';
import { bool, string, func, node, oneOf } from 'prop-types';
import StyledButton from './StyledButton';

const propTypes = {
    type: oneOf(['submit', 'button']),
    flat: bool,
    raised: bool,
    border: bool,
    disabled: bool,
    color: string,
    fontColor: string,
    scale: string,
    className: string,
    children: node,
    onClick: func,
    styles: func,
};

const defaultProps = {
    type: 'button',
    flat: undefined,
    raised: undefined,
    border: undefined,
    disabled: undefined,
    color: undefined,
    fontColor: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
    onClick: undefined,
    styles: undefined,
};

const Button = ({ type, flat, raised, border, disabled, color, fontColor, scale, className, children, onClick, styles }) => (
    <StyledButton
        type={type}
        flat={flat}
        raised={raised}
        border={border}
        disabled={disabled}
        color={color}
        fontColor={fontColor}
        scale={scale}
        className={className}
        onClick={onClick}
        styles={styles}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
