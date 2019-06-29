import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import fontPropertyConfig from '../utils/font-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import clone from '../utils/clone';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const h3PropertyConfig = [
    {
        cssProperty: 'font-weight',
        componentProperty: 'weight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.h3.weights',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'display',
        componentProperty: 'display',
        scopedProperty: 'massivDisplay',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'overflow',
        componentProperty: 'overflow',
        scopedProperty: 'massivOverflow',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'overflow-x',
        componentProperty: 'overflowX',
        scopedProperty: 'massivOverflowX',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'overflow-y',
        componentProperty: 'overflowY',
        scopedProperty: 'massivOverflowY',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'text-align',
        componentProperty: 'textAlign',
        scopedProperty: 'massivTextAlign',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'white-space',
        componentProperty: 'whiteSpace',
        scopedProperty: 'massivWhiteSpace',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'text-overflow',
        componentProperty: 'textOverflow',
        scopedProperty: 'massivTextOverflow',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(h3PropertyConfig),
];

const StyledH3 = styled.h3`
    font-family: ${props => props.theme.fonts.h3.family};
    vertical-align: ${props => props.theme.fonts.h3.verticalAlign || 'middle'};
    ${buildCss(propertyConfig)}
`;

const H3 = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledH3 {...scopedProps}>{children}</StyledH3>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;

export default H3;
