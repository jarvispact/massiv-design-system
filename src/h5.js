import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import fontPropertyConfig from '../utils/font-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';

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
];

const propertyConfig = [
    ...spacingPropertyConfig,
    ...fontPropertyConfig,
    ...h5PropertyConfig,
];

const StyledH5 = styled.h5`
    font-family: ${props => props.theme.fonts.h5.family};
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
