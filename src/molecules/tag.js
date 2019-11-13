import React from 'react';
import { string, func, shape, node } from 'prop-types';
import Flex from '../atoms/flex';
import Text from '../atoms/text';
import InvisibleButton from '../atoms/invisible-button';
import Icon from '../atoms/icon';

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

const defaultIconProps = {
    name: 'clear',
    fontSize: 'xs',
    lineHeight: 'xs',
    verticalAlign: '0px',
};

const Tag = ({ name, children, onRemove, wrapperProps, textProps, iconProps }) => (
    <Flex {...defaultWrapperProps} {...wrapperProps}>
        <Text {...defaultTextProps(onRemove)} {...textProps}>{name || children}</Text>
        {onRemove && (
            <InvisibleButton lineHeight="xs" onClick={onRemove}>
                <Icon {...defaultIconProps} {...iconProps} />
            </InvisibleButton>
        )}
    </Flex>
);

Tag.propTypes = {
    name: string,
    children: node,
    onRemove: func,
    wrapperProps: shape({}),
    textProps: shape({}),
    iconProps: shape({}),
};

Tag.defaultProps = {
    name: undefined,
    children: undefined,
    onRemove: undefined,
    wrapperProps: {},
    textProps: {},
    iconProps: {},
};

export default Tag;
