import React from 'react';
import { string, func, shape, node } from 'prop-types';
import Flex from '../atoms/flex';
import Text from '../atoms/text';
import TertiaryButton from '../atoms/tertiary-button';
import Icon from '../atoms/icon';

const Tag = ({ content, children, onRemove, contentProps, removeButtonProps, iconProps, ...others }) => (
    <Flex
        inline
        alignItems="center"
        justifyContent="center"
        bg="gray300"
        p="8px"
        borderRadius="2px"
        {...others}
    >
        {(content && !children) && (
            <>
                <Text
                    pr={onRemove ? '6px' : undefined}
                    fontSize="xs"
                    lineHeight="xs"
                    {...contentProps}
                >
                    {content}
                </Text>
                {onRemove && (
                    <TertiaryButton p="0px" fontSize="xs" lineHeight="xs" onClick={onRemove} {...removeButtonProps}>
                        <Icon name="clear" {...iconProps} />
                    </TertiaryButton>
                )}
            </>
        )}
        {(!content && children) && children}
    </Flex>
);

Tag.propTypes = {
    content: string,
    children: node,
    onRemove: func,
    others: shape({}),
    contentProps: shape({}),
    removeButtonProps: shape({}),
    iconProps: shape({}),
};

Tag.defaultProps = {
    content: undefined,
    children: undefined,
    onRemove: undefined,
    others: undefined,
    contentProps: undefined,
    removeButtonProps: undefined,
    iconProps: undefined,
};

export default Tag;
