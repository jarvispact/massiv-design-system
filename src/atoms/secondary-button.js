import React from 'react';
import { node, shape } from 'prop-types';
import Button from './button';

const SecondaryButton = ({ children, ...others }) => (
    <Button
        bg="transparent"
        color="primary"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="primary"
        {...others}
    >
        {children}
    </Button>
);

SecondaryButton.propTypes = {
    children: node,
    others: shape({}),
};

SecondaryButton.defaultProps = {
    children: undefined,
    others: undefined,
};

export default SecondaryButton;
