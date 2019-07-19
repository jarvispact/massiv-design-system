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

const fontPropertyConfig = createFontPropertyConfig({ type: 'link' });

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
];

const StyledLink = styled.a`
    cursor: ${props => props.onClick && 'pointer'};
    font-family: ${props => props.theme.fonts.link.family};
    vertical-align: ${props => props.theme.fonts.link.verticalAlign || 'middle'};
    ${buildCss(propertyConfig)}
`;

const Link = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledLink {...scopedProps}>{children}</StyledLink>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
