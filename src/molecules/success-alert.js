import React from 'react';
import { node, string, func, shape } from 'prop-types';
import Flex from '../atoms/flex';
import Box from '../atoms/box';
import Text from '../atoms/text';
import Icon from '../atoms/icon';
import IconButton from '../atoms/icon-button';

const SuccessAlert = ({ text, children, onClose, ...others }) => (
    <Flex
        bg="success300"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="success700"
        p="1.3rem"
        justifyContent="flex-start"
        alignItems="center"
        position={onClose ? 'relative' : undefined}
        {...others}
    >
        {onClose && (
            <IconButton
                position="absolute"
                top="5px"
                right="5px"
                onClick={onClose}
                name="close"
                color="success700"
            />
        )}
        <Icon name="check" color="success700" />
        {(text && !children) && <Text color="success700" pl="1rem">{text}</Text>}
        {(!text && children) && (
            <Box pl="1rem">
                {children}
            </Box>
        )}
    </Flex>
);

SuccessAlert.propTypes = {
    text: string,
    children: node,
    onClose: func,
    others: shape({}),
};

SuccessAlert.defaultProps = {
    text: undefined,
    children: undefined,
    onClose: undefined,
    others: undefined,
};

export default SuccessAlert;
