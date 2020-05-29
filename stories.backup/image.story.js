import React from 'react';
import { storiesOf } from '@storybook/react';
import { array, text } from '@storybook/addon-knobs';
import Image from '../src/image';

storiesOf('Image', module)
    .add('Image', () => (
        <Image
            src={text('src', 'https://miro.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png')}
            imageWidth={text('imageWidth', undefined)}
            imageHeight={text('imageHeight', undefined)}
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
        />
    ));
