import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import Box from '../src/box';

storiesOf('Box', module)
    .add('Box', () => (
        <Box
            display={array('display', [])}
            position={array('position', [])}
            top={array('top', [])}
            left={array('left', [])}
            bottom={array('bottom', [])}
            right={array('right', [])}
            width={array('width', [])}
            height={array('height', [])}
            minWidth={array('minWidth', [])}
            minHeight={array('minHeight', [])}
            maxWidth={array('maxWidth', [])}
            maxHeight={array('maxHeight', [])}
            overflow={array('overflow', [])}
            overflowX={array('overflowX', [])}
            overflowY={array('overflowY', [])}
            p={array('p', [])}
            pt={array('pt', [])}
            pl={array('pl', [])}
            pb={array('pb', [])}
            pr={array('pr', [])}
            m={array('m', [])}
            mt={array('mt', [])}
            ml={array('ml', [])}
            mb={array('mb', [])}
            mr={array('mr', [])}
            color={array('color', [])}
            bg={array('bg', [])}
            borderStyle={array('borderStyle', [])}
            borderWidth={array('borderWidth', [])}
            borderColor={array('borderColor', [])}
            borderRadius={array('borderRadius', [])}
            borderTopStyle={array('borderTopStyle', [])}
            borderTopWidth={array('borderTopWidth', [])}
            borderTopColor={array('borderTopColor', [])}
            borderBottomStyle={array('borderBottomStyle', [])}
            borderBottomWidth={array('borderBottomWidth', [])}
            borderBottomColor={array('borderBottomColor', [])}
            borderLeftStyle={array('borderLeftStyle', [])}
            borderLeftWidth={array('borderLeftWidth', [])}
            borderLeftColor={array('borderLeftColor', [])}
            borderRightStyle={array('borderRightStyle', [])}
            borderRightWidth={array('borderRightWidth', [])}
            borderRightColor={array('borderRightColor', [])}
            borderTopLeftRadius={array('borderTopLeftRadius', [])}
            borderTopRightRadius={array('borderTopRightRadius', [])}
            borderBottomLeftRadius={array('borderBottomLeftRadius', [])}
            borderBottomRightRadius={array('borderBottomRightRadius', [])}
            boxShadow={array('boxShadow', [])}
        >
            Box Test
        </Box>
    ));
