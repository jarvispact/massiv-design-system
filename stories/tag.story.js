/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/atoms/box';
import Tag from '../src/molecules/tag';
import Inline from '../src/layout/inline';
import Icon from '../src/atoms/icon';
import TertiaryButton from '../src/atoms/tertiary-button';

const tags = ['0123456789', '9876543210', '0192837465'];

storiesOf('Tag', module)
    .add('Tag', () => (
        <Box p="m">
            <Inline spacing="xs">
                {tags.map((tag) => (
                    <Tag key={tag} content={tag} onRemove={action(`remove ${tag}`)} />
                ))}
            </Inline>
        </Box>
    ))
    .add('without onRemove', () => (
        <Box p="m">
            <Inline spacing="xs">
                {tags.map((tag) => (
                    <Tag key={tag} content={tag} />
                ))}
            </Inline>
        </Box>
    ))
    .add('with custom Component', () => (
        <Box p="m">
            <Inline spacing="xs">
                {['label', 'label'].map((tag) => (
                    <Tag key={tag}>
                        <Icon name={tag} pr="15px" />
                        <TertiaryButton p="0px" onClick={action('remove')}>
                            <Icon name="clear" />
                        </TertiaryButton>
                    </Tag>
                ))}
            </Inline>
        </Box>
    ));
