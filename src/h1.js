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

const h1PropertyConfig = [
    {
        cssProperty: 'font-weight',
        componentProperty: 'weight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.h1.weights',
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(h1PropertyConfig),
];

const StyledH1 = styled.h1`
    font-family: ${props => props.theme.fonts.h1.family};
    ${buildCss(propertyConfig)}
`;

const H1 = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledH1 {...scopedProps}>{children}</StyledH1>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;

export default H1;
