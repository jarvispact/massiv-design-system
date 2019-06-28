import React from 'react';
import { string, func, shape, node } from 'prop-types';
import Flex from './flex';
import Text from './text';
import Button from './button';
import Icon from './icon';

const defaultWrapperProps = {
    inline: true,
    alignItems: 'center',
    bg: 'gray300',
    pl: '5px',
    pr: '5px',
    pt: '2px',
    pb: '2px',
    borderRadius: 's',
};

const defaultTextProps = {
    pr: '5px',
    scale: 'xs',
};

const defaultIconProps = {
    name: 'clear',
    pl: '5px',
    scale: 'xs',
};

const Tag = ({ name, children, onClose, wrapperProps, textProps, iconProps }) => (
    <Flex {...defaultWrapperProps} {...wrapperProps}>
        <Text {...defaultTextProps} {...textProps}>{name || children}</Text>
        <Button bg="transparent" p="0" onClick={onClose}>
            <Icon {...defaultIconProps} {...iconProps} />
        </Button>
    </Flex>
);

Tag.propTypes = {
    name: string,
    children: node,
    onClose: func,
    wrapperProps: shape({}),
    textProps: shape({}),
    iconProps: shape({}),
};

Tag.defaultProps = {
    name: undefined,
    children: undefined,
    onClose: undefined,
    wrapperProps: defaultWrapperProps,
    textProps: defaultTextProps,
    iconProps: defaultIconProps,
};

export default Tag;
