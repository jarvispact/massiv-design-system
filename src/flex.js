import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';

const themeProperty = null;
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const propertyConfig = [
    {
        cssProperty: 'flex-direction',
        componentProperty: 'direction',
        scopedProperty: 'massivFlexDirection',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'flex-wrap',
        componentProperty: 'wrap',
        scopedProperty: 'massivFlexWrap',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'flex-flow',
        componentProperty: 'flow',
        scopedProperty: 'massivFlexFlow',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'justify-content',
        componentProperty: 'justifyContent',
        scopedProperty: 'massivJustifyContent',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'align-items',
        componentProperty: 'alignItems',
        scopedProperty: 'massivAlignItems',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'align-content',
        componentProperty: 'alignContent',
        scopedProperty: 'massivAlignContent',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];

const StyledFlex = styled.div`
    display: ${props => props.inline ? 'inline-flex' : 'flex'};
    ${buildCss(propertyConfig)}
`;

const Flex = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledFlex {...scopedProps}>{children}</StyledFlex>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;

export default Flex;