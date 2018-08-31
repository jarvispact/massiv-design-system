import React from 'react';
import { bool, func, node } from 'prop-types';

const propTypes = {
    disabled: bool,
    onClick: func.isRequired,
    children: node.isRequired,
};

const defaultProps = {
    disabled: undefined,
};

const Button = ({ disabled, onClick, children }) => (
    <button type="button" disabled={disabled} onClick={onClick}>{children}</button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
