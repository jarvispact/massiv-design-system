import React from 'react';
import { string, func, shape } from 'prop-types';
import Flex from './flex';
import Text from './text';
import Button from './button';
import Icon from './icon';

const Tag = ({ name, onClose, wrapperProps, textProps, iconProps }) => (
    <Flex {...wrapperProps}>
        <Text {...textProps}>{name}</Text>
        <Button bg="transparent" p="0" onClick={onClose}>
            <Icon {...iconProps} />
        </Button>
    </Flex>
);

Tag.propTypes = {
    name: string.isRequired,
    onClose: func.isRequired,
    wrapperProps: shape({}),
    textProps: shape({}),
    iconProps: shape({}),
};

Tag.defaultProps = {
    wrapperProps: {
        inline: true,
        alignItems: 'center',
        bg: 'gray300',
        pl: '5px',
        pr: '5px',
        pt: '2px',
        pb: '2px',
        borderRadius: 's',
    },
    textProps: {
        pr: '5px',
        scale: 'xs',
    },
    iconProps: {
        name: 'clear',
        pl: '5px',
        scale: 'xs',
    },
};

export default Tag;
