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

const fontPropertyConfig = createFontPropertyConfig({ type: 'h3' });

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
];

const StyledH3 = styled.h3`
    font-family: ${props => props.theme.fonts.h3.family};
    vertical-align: ${props => props.theme.fonts.h3.verticalAlign};
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
