import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Box from './box';

storiesOf('Box', module)
    .add('Box', () => (
        <Box
            cssDisplay={text('cssDisplay', undefined)}
            cssPosition={text('cssPosition', undefined)}
            cssTop={text('cssTop', undefined)}
            cssLeft={text('cssLeft', undefined)}
            cssBottom={text('cssBottom', undefined)}
            cssRight={text('cssRight', undefined)}
            cssWidth={text('cssWidth', undefined)}
            cssHeight={text('cssHeight', undefined)}
            cssMinWidth={text('cssMinWidth', undefined)}
            cssMinHeight={text('cssMinHeight', undefined)}
            cssMaxWidth={text('cssMaxWidth', undefined)}
            cssMaxHeight={text('cssMaxHeight', undefined)}
            cssOverflow={text('cssOverflow', undefined)}
            cssOverflowX={text('cssOverflowX', undefined)}
            cssOverflowY={text('cssOverflowY', undefined)}
            cssPadding={text('cssPadding', undefined)}
            cssPaddingTop={text('cssPaddingTop', undefined)}
            cssPaddingLeft={text('cssPaddingLeft', undefined)}
            cssPaddingBottom={text('cssPaddingBottom', undefined)}
            cssPaddingRight={text('cssPaddingRight', undefined)}
            cssMargin={text('cssMargin', undefined)}
            cssMarginTop={text('cssMarginTop', undefined)}
            cssMarginLeft={text('cssMarginLeft', undefined)}
            cssMarginBottom={text('cssMarginBottom', undefined)}
            cssMarginRight={text('cssMarginRight', undefined)}
        >
            Box Test
        </Box>
    ));
