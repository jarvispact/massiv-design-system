import React from 'react';
import { node } from 'prop-types';

const propTypes = {
    children: node.isRequired,
};

const Button = ({ children }) => (<button type="button">{children}</button>);

Button.propTypes = propTypes;

export default Button;
