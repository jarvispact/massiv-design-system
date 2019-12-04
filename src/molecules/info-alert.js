import React from 'react';
import { node, string, func, shape } from 'prop-types';
import Flex from '../atoms/flex';
import Box from '../atoms/box';
import Text from '../atoms/text';
import Icon from '../atoms/icon';
import TertiaryButton from '../atoms/tertiary-button';

const InfoAlert = ({ text, children, onClose, ...others }) => (
    <Flex
        bg="info300"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="info700"
        p="1.3rem"
        justifyContent="flex-start"
        alignItems="center"
        position={onClose ? 'relative' : undefined}
        {...others}
    >
        {onClose && (
            <TertiaryButton
                position="absolute"
                top="1px"
                right="1px"
                onClick={onClose}
                name="close"
                color="info700"
            >
                <Icon name="close" />
            </TertiaryButton>
        )}
        <Icon name="info" color="info700" />
        {(text && !children) && <Text color="info700" pl="1rem">{text}</Text>}
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
