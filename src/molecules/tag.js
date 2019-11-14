import React from 'react';
import { string, func, shape, node } from 'prop-types';
import Flex from '../atoms/flex';
import Text from '../atoms/text';
import IconButton from '../atoms/icon-button';

const defaultWrapperProps = {
    inline: true,
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'gray300',
    p: '8px',
    borderRadius: '2px',
};

const defaultTextProps = (onDelete) => ({
    pr: onDelete ? '10px' : undefined,
    fontSize: 'xs',
    lineHeight: 'xs',
});

const defaultIconButtonProps = {
    name: 'clear',
    fontSize: 'xs',
    lineHeight: 'xs',
};

const Tag = ({ name, children, onRemove, wrapperProps, textProps, iconButtonProps }) => (
    <Flex {...defaultWrapperProps} {...wrapperProps}>
        <Text {...defaultTextProps(onRemove)} {...textProps}>{name || children}</Text>
        {onRemove && (
            <IconButton onClick={onRemove} {...defaultIconButtonProps} {...iconButtonProps} />
        )}
    </Flex>
);

Tag.propTypes = {
    name: string,
    children: node,
    onRemove: func,
    wrapperProps: shape({}),
    textProps: shape({}),
    iconButtonProps: shape({}),
};

Tag.defaultProps = {
    name: undefined,
    children: undefined,
    onRemove: undefined,
    wrapperProps: undefined,
    textProps: undefined,
    iconButtonProps: undefined,
};

export default Tag;
