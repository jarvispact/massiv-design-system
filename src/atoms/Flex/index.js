/* eslint-disable react/prop-types */
import React from 'react';
import { bool, string, func, node } from 'prop-types';
import StyledFlex from './StyledFlex';

const parentPropTypes = {
    inline: bool,
    dir: string,
    wrap: string,
    flow: string,
    justifyContent: string,
    alignItems: string,
    alignContent: string,
    styles: func,
    className: string,
    children: node,
};

const parentDefaultProps = {
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
    order: string,
    grow: string,
    shrink: string,
    basis: string,
    flex: string,
    alignSelf: string,
    styles: func,
    className: string,
    children: node,
};

const childDefaultProps = {
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
