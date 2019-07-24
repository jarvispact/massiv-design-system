import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import createFontPropertyConfig from '../utils/create-font-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import overflowPropertyConfig from '../utils/overflow-property-config';
import displayPropertyConfig from '../utils/display-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import clone from '../utils/clone';

const fontPropertyConfig = createFontPropertyConfig({ type: 'label' });

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
];

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.label.family};
    vertical-align: ${props => props.theme.fonts.label.verticalAlign};
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
