import React from 'react';
import { shape, string, node, oneOfType, arrayOf, number } from 'prop-types';
import { withTheme } from 'styled-components';
import Box from './box';

// if only one gutter value is passed we assume that it should be used for all breakpoints
// if more than one value is passed we try to match it with the index of the passed span values

const getGutter = (gutters, index) => gutters.length === 1 ? gutters[0] || '0px' : gutters[index] || '0px';
const getWidth = gutters => (span, index) => `calc(${100 / 12 * span}% - ${span === 12 ? '0px' : getGutter(gutters, index)})`;

const Col = ({ theme, gutter, span, children, ...others }) => {
    const gutters = (Array.isArray(gutter) ? gutter : [gutter]).map(g => theme.spacing[g] || g);
    const spans = Array.isArray(span) ? span : [span];

    return (
        <Box display="inline-block" width={spans.map(getWidth(gutters))} {...others}>{children}</Box>
    );
};

Col.propTypes = {
    theme: shape({}).isRequired,
    gutter: oneOfType([arrayOf(string), string]),
    span: oneOfType([arrayOf(number), number]),
    children: node,
    others: shape({}),
};

Col.defaultProps = {
    gutter: undefined,
    span: undefined,
    children: undefined,
    others: {},
};

export default withTheme(Col);
