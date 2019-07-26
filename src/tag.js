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

const defaultTextProps = (onDelete) => ({
    pr: onDelete ? '5px' : undefined,
    scale: 'xs',
});

const defaultIconProps = {
    name: 'clear',
    pl: '5px',
    scale: 'xs',
};

const Tag = ({ name, children, onDelete, wrapperProps, textProps, iconProps }) => (
    <Flex {...defaultWrapperProps} {...wrapperProps}>
        <Text {...defaultTextProps(onDelete)} {...textProps}>{name || children}</Text>
        {onDelete && (
            <Button bg="transparent" p="0" onClick={onDelete}>
                <Icon {...defaultIconProps} {...iconProps} />
            </Button>
        )}
    </Flex>
);

Tag.propTypes = {
    name: string,
    children: node,
    onDelete: func,
    wrapperProps: shape({}),
    textProps: shape({}),
    iconProps: shape({}),
};

Tag.defaultProps = {
    name: undefined,
    children: undefined,
    onDelete: undefined,
    wrapperProps: {},
    textProps: {},
    iconProps: {},
};

export default Tag;
