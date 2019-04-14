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
];

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(h3PropertyConfig),
];

const StyledH3 = styled.h3`
    font-family: ${props => props.theme.fonts.h3.family};
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
