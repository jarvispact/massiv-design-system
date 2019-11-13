import React, { Children, cloneElement } from 'react';
import { node, string, oneOfType, arrayOf, shape } from 'prop-types';
import Flex from './atoms/flex';

const Row = ({ gutter, children, ...others }) => (
    <Flex
        wrap="wrap"
        justifyContent="space-between"
        {...others}
    >
        {Children.map(children, child => cloneElement(child, { gutter }))}
    </Flex>
);

Row.propTypes = {
    gutter: oneOfType([arrayOf(string), string]),
    children: node,
    others: shape({}),
};

Row.defaultProps = {
    gutter: undefined,
    children: undefined,
    others: {},
};

export default Row;
