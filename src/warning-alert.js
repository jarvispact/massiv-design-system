import React from 'react';
import { node, string, func, shape } from 'prop-types';
import Flex from './atoms/flex';
import Box from './atoms/box';
import Text from './atoms/text';
import Icon from './atoms/icon';
import InvisibleButton from './atoms/invisible-button';

const WarningAlert = ({ text, children, onClose, ...others }) => (
    <Flex
        bg="warning300"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="warning700"
        p="1.3rem"
        justifyContent="flex-start"
        alignItems="center"
        position={onClose ? 'relative' : undefined}
        {...others}
    >
        {onClose && (
            <Box position="absolute" top="5px" right="5px">
                <InvisibleButton onClick={onClose}>
                    <Icon name="close" color="warning700" />
                </InvisibleButton>
            </Box>
        )}
        <Icon name="warning" color="warning700" />
        {(text && !children) && <Text color="warning700" pl="1rem">{text}</Text>}
        {(!text && children) && (
            <Box pl="1rem">
                {children}
            </Box>
        )}
    </Flex>
);

WarningAlert.propTypes = {
    text: string,
    children: node,
    onClose: func,
    others: shape({}),
};

WarningAlert.defaultProps = {
    text: undefined,
    children: undefined,
    onClose: undefined,
    others: undefined,
};

export default WarningAlert;
