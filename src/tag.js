import React from 'react';
import { string, func, shape, node } from 'prop-types';
import Flex from './flex';
import Text from './text';
import InvisibleButton from './invisible-button';
import Icon from './icon';

const defaultWrapperProps = {
    inline: true,
    alignItems: 'center',
    justifyContent: 'center',
    bg: 'gray300',
    p: '5px 3px 5px 3px',
    borderRadius: '2px',
};

const defaultTextProps = (onDelete) => ({
    pr: onDelete ? '10px' : undefined,
    fontSize: 'xs',
});

const defaultIconProps = {
    name: 'clear',
    fontSize: 'xs',
};

const Tag = ({ name, children, onDelete, wrapperProps, textProps, iconProps }) => (
    <Flex {...defaultWrapperProps} {...wrapperProps}>
        <Text {...defaultTextProps(onDelete)} {...textProps}>{name || children}</Text>
        {onDelete && (
            <InvisibleButton fontSize="13px" onClick={onDelete}>
                <Icon {...defaultIconProps} {...iconProps} />
            </InvisibleButton>
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
