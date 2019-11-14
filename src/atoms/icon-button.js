import React from 'react';
import { shape, string } from 'prop-types';
import Button from './button';
import Icon from './icon';

const IconButton = ({ name, ...others }) => (
    <Button
        bg="transparent"
        p="0"
        {...others}
    >
        <Icon name={name} />
    </Button>
);

IconButton.propTypes = {
    name: string.isRequired,
    others: shape({}),
};

IconButton.defaultProps = {
    others: undefined,
};

export default IconButton;
