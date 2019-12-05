import React from 'react';
import { node, shape, oneOf } from 'prop-types';
import Button from './button';

const getVariantProps = (variant) => ({
    color: variant,
    borderColor: variant,
    outlineColor: variant,
});

const SecondaryButton = ({ children, variant, ...others }) => (
    <Button
        bg="transparent"
        color="primary"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="primary"
        {...variant ? getVariantProps(variant) : {}}
        {...others}
    >
        {children}
    </Button>
);

SecondaryButton.propTypes = {
    children: node,
    variant: oneOf(['error', 'warning', 'info', 'success']),
    others: shape({}),
};

SecondaryButton.defaultProps = {
    children: undefined,
    variant: undefined,
    others: undefined,
};

export default SecondaryButton;
