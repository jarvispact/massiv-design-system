import React from 'react';
import { node, shape, oneOf } from 'prop-types';
import Button from './button';

const getVariantProps = (variant) => ({
    bg: variant,
    borderColor: variant,
    outlineColor: variant,
});

const PrimaryButton = ({ children, variant, ...others }) => (
    <Button
        bg="primary"
        color="white"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="primary"
        {...variant ? getVariantProps(variant) : {}}
        {...others}
    >
        {children}
    </Button>
);

PrimaryButton.propTypes = {
    children: node,
    variant: oneOf(['error', 'warning', 'info', 'success']),
    others: shape({}),
};

PrimaryButton.defaultProps = {
    children: undefined,
    variant: undefined,
    others: undefined,
};

export default PrimaryButton;
