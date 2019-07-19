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
import clone from '../utils/clone';

const fontPropertyConfig = createFontPropertyConfig({ type: 'text' });

const propertyConfig = [
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(displayPropertyConfig),
];

const StyledText = styled.span`
    font-family: ${props => props.theme.fonts.text.family};
    vertical-align: ${props => props.theme.fonts.text.verticalAlign || 'middle'};
    ${buildCss(propertyConfig)}
`;

const Text = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledText {...scopedProps}>{children}</StyledText>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
