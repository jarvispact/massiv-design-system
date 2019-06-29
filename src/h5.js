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

const h5PropertyConfig = [
    {
        cssProperty: 'font-weight',
        componentProperty: 'weight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.h5.weights',
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
    ...clone(h5PropertyConfig),
];

const StyledH5 = styled.h5`
    font-family: ${props => props.theme.fonts.h5.family};
    vertical-align: ${props => props.theme.fonts.h5.verticalAlign || 'middle'};
    ${buildCss(propertyConfig)}
`;

const H5 = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledH5 {...scopedProps}>{children}</StyledH5>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;

export default H5;
