import React from 'react';
import { node, shape } from 'prop-types';
import Button from './button';

const PrimaryButton = ({ children, ...others }) => (
    <Button
        bg="primary"
        color="white"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="primary"
        {...others}
    >
        {children}
    </Button>
);

PrimaryButton.propTypes = {
    children: node,
    others: shape({}),
};

PrimaryButton.defaultProps = {
    children: undefined,
    others: undefined,
};

export default PrimaryButton;
