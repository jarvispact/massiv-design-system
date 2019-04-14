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

const labelPropertyConfig = [
    {
        cssProperty: 'font-weight',
        componentProperty: 'weight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.label.weights',
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(labelPropertyConfig),
];

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.label.family};
    ${buildCss(propertyConfig)}
`;

const Label = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledLabel {...scopedProps}>{children}</StyledLabel>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
