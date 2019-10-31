import React from 'react';
import { node, string, func, shape } from 'prop-types';
import Flex from './flex';
import Box from './box';
import Text from './text';
import Icon from './icon';
import InvisibleButton from './invisible-button';

const InfoAlert = ({ text, children, onClose, ...others }) => (
    <Flex
        bg="info300"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="info900"
        p="1.3rem"
        justifyContent="flex-start"
        alignItems="center"
        position={onClose ? 'relative' : undefined}
        {...others}
    >
        {onClose && (
            <Box position="absolute" top="5px" right="5px">
                <InvisibleButton onClick={onClose}>
                    <Icon name="close" color="info900" />
                </InvisibleButton>
            </Box>
        )}
        <Icon name="info" color="info900" />
        {(text && !children) && <Text color="info900" pl="1rem">{text}</Text>}
        {(!text && children) && (
            <Box pl="1rem">
                {children}
            </Box>
        )}
    </Flex>
);

InfoAlert.propTypes = {
    text: string,
    children: node,
    onClose: func,
    others: shape({}),
};

InfoAlert.defaultProps = {
    text: undefined,
    children: undefined,
    onClose: undefined,
    others: undefined,
};

export default InfoAlert;
