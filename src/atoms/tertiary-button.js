import React from 'react';
import { node, shape } from 'prop-types';
import Button from './button';

const TertiaryButton = ({ children, ...others }) => (
    <Button
        bg="transparent"
        {...others}
    >
        {children}
    </Button>
);

TertiaryButton.propTypes = {
    children: node,
    others: shape({}),
};

TertiaryButton.defaultProps = {
    children: undefined,
    others: undefined,
};

export default TertiaryButton;
