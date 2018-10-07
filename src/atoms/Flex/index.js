/* eslint-disable react/prop-types */
import React from 'react';
import { bool, string, func, node } from 'prop-types';
import StyledFlex from './StyledFlex';
import {
    colorPropTypes,
    colorDefaultProps,
    positionPropTypes,
    positionDefaultProps,
    spacingPropTypes,
    spacingDefaultProps,
    borderPropTypes,
    borderDefaultProps,
    stringOrArray,
} from '../../prop-types';

const parentPropTypes = {
    ...colorPropTypes,
    ...positionPropTypes,
    ...spacingPropTypes,
    ...borderPropTypes,
    inline: bool,
    dir: stringOrArray,
    wrap: stringOrArray,
    flow: stringOrArray,
    justifyContent: stringOrArray,
    alignItems: stringOrArray,
    alignContent: stringOrArray,
    styles: func,
    className: string,
    children: node,
};

const parentDefaultProps = {
    ...colorDefaultProps,
    ...positionDefaultProps,
    ...spacingDefaultProps,
    ...borderDefaultProps,
    inline: undefined,
    dir: undefined,
    wrap: undefined,
    flow: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    alignContent: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const childPropTypes = {
    ...colorPropTypes,
    ...positionPropTypes,
    ...spacingPropTypes,
    ...borderPropTypes,
    order: stringOrArray,
    grow: stringOrArray,
    shrink: stringOrArray,
    basis: stringOrArray,
    flex: stringOrArray,
    alignSelf: stringOrArray,
    styles: func,
    className: string,
    children: node,
};

const childDefaultProps = {
    ...colorDefaultProps,
    ...positionDefaultProps,
    ...spacingDefaultProps,
    ...borderDefaultProps,
    order: undefined,
    grow: undefined,
    shrink: undefined,
    basis: undefined,
    flex: undefined,
    alignSelf: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Parent = ({ inline, dir, wrap, flow, justifyContent, alignItems, alignContent, styles, className, children, ...others }) => (
    <StyledFlex.Parent
        flexDisplay={inline ? 'inline-flex' : 'flex'}
        flexDirection={dir}
        flexWrap={wrap}
        flexFlow={flow}
        justifyContent={justifyContent}
        alignItems={alignItems}
        alignContent={alignContent}
        styles={styles}
        className={className}
        {...others}
    >
        {children}
    </StyledFlex.Parent>
);

const Child = ({ order, grow, shrink, basis, flex, alignSelf, styles, className, children, ...others }) => (
    <StyledFlex.Child
        flexOrder={order}
        flexGrow={grow}
        flexShrink={shrink}
        flexBasis={basis}
        flex={flex}
        alignSelf={alignSelf}
        styles={styles}
        className={className}
        {...others}
    >
        {children}
    </StyledFlex.Child>
);

const Flex = { Parent, Child };

Flex.Parent.propTypes = parentPropTypes;
Flex.Parent.defaultProps = parentDefaultProps;

Flex.Child.propTypes = childPropTypes;
Flex.Child.defaultProps = childDefaultProps;

export default Flex;
