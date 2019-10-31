import React from 'react';
import { node, shape } from 'prop-types';
import Button from './button';

const InvisibleButton = ({ children, ...others }) => (
    <Button
        bg="transparent"
        p="0"
        {...others}
    >
        {children}
    </Button>
);

InvisibleButton.propTypes = {
    children: node,
    others: shape({}),
};

InvisibleButton.defaultProps = {
    children: undefined,
    others: undefined,
};

export default InvisibleButton;
