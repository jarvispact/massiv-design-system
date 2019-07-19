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

const fontPropertyConfig = createFontPropertyConfig({ type: 'h4' });

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
];

const StyledH4 = styled.h4`
    font-family: ${props => props.theme.fonts.h4.family};
    vertical-align: ${props => props.theme.fonts.h4.verticalAlign || 'middle'};
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
