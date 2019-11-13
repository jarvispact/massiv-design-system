import React from 'react';
import { node, string, func, shape } from 'prop-types';
import Flex from './flex';
import Box from './box';
import Text from './text';
import Icon from './icon';
import InvisibleButton from './invisible-button';

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
            <Box position="absolute" top="5px" right="5px">
                <InvisibleButton onClick={onClose}>
                    <Icon name="close" color="error700" />
                </InvisibleButton>
            </Box>
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
