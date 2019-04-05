import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import fontPropertyConfig from '../utils/font-property-config';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const h4PropertyConfig = [
    {
        cssProperty: 'font-weight',
        componentProperty: 'weight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.h4.weights',
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...fontPropertyConfig,
    ...h4PropertyConfig,
];

const StyledH4 = styled.h4`
    font-family: ${props => props.theme.fonts.h4.family};
    ${buildCss(propertyConfig)}
`;

const H4 = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledH4 {...scopedProps}>{children}</StyledH4>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;

export default H4;
