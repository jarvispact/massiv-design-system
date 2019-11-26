import React from 'react';
import { shape, string } from 'prop-types';
import TertiaryButton from '../atoms/tertiary-button';
import Icon from '../atoms/icon';

const IconButton = ({ name, iconProps, ...others }) => (
    <TertiaryButton p="0px" {...others}>
        <Icon name={name} {...iconProps} />
    </TertiaryButton>
);

IconButton.propTypes = {
    name: string.isRequired,
    iconProps: shape({}),
    others: shape({}),
};

IconButton.defaultProps = {
    iconProps: undefined,
    others: undefined,
};

export default IconButton;
