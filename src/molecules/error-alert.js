import React from 'react';
import { node, string, func, shape } from 'prop-types';
import Flex from '../atoms/flex';
import Box from '../atoms/box';
import Text from '../atoms/text';
import Icon from '../atoms/icon';
import IconButton from './icon-button';

const ErrorAlert = ({ text, children, onClose, ...others }) => (
    <Flex
        bg="error300"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="error700"
        p="1.3rem"
        justifyContent="flex-start"
        alignItems="center"
        position={onClose ? 'relative' : undefined}
        {...others}
    >
        {onClose && (
            <IconButton
                position="absolute"
                top="10px"
                right="10px"
                onClick={onClose}
                name="close"
                color="error700"
            />
        )}
        <Icon name="error" color="error700" />
        {(text && !children) && <Text color="error700" pl="1rem">{text}</Text>}
        {(!text && children) && (
            <Box pl="1rem">
                {children}
            </Box>
        )}
    </Flex>
);

ErrorAlert.propTypes = {
    text: string,
    children: node,
    onClose: func,
    others: shape({}),
};

ErrorAlert.defaultProps = {
    text: undefined,
    children: undefined,
    onClose: undefined,
    others: undefined,
};

export default ErrorAlert;
