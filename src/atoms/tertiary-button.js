import React from 'react';
import { node, shape, oneOf } from 'prop-types';
import Button from './button';

const getVariantProps = (variant) => ({
    color: variant,
    outlineColor: variant,
});

const TertiaryButton = ({ children, variant, ...others }) => (
    <Button
        bg="transparent"
        {...variant ? getVariantProps(variant) : {}}
        {...others}
    >
        {children}
    </Button>
);

TertiaryButton.propTypes = {
    children: node,
    variant: oneOf(['error', 'warning', 'info', 'success']),
    others: shape({}),
};

TertiaryButton.defaultProps = {
    children: undefined,
    variant: undefined,
    others: undefined,
};

export default TertiaryButton;
