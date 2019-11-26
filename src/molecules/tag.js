import React from 'react';
import { string, func, shape, node } from 'prop-types';
import Flex from '../atoms/flex';
import Text from '../atoms/text';
import IconButton from './icon-button';

const Tag = ({ content, children, onRemove, textProps, iconButtonProps, ...others }) => (
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
                    {...textProps}
                >
                    {content}
                </Text>
                {onRemove && (
                    <IconButton
                        name="clear"
                        fontSize="xs"
                        lineHeight="xs"
                        onClick={onRemove}
                        {...iconButtonProps}
                    />
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
    textProps: shape({}),
    iconButtonProps: shape({}),
};

Tag.defaultProps = {
    content: undefined,
    children: undefined,
    onRemove: undefined,
    others: undefined,
    textProps: undefined,
    iconButtonProps: undefined,
};

export default Tag;
