import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../../utils/build-css';
import buildScopedProps from '../../utils/build-scoped-props';
import buildPropTypes from '../../utils/build-prop-types';
import fontPropertyConfig from '../../utils/font-property-config';
import spacingPropertyConfig from '../../utils/spacing-property-config';
import overflowPropertyConfig from '../../utils/overflow-property-config';
import displayPropertyConfig from '../../utils/display-property-config';
import colorPropertyConfig from '../../utils/color-property-config';
import borderPropertyConfig from '../../utils/border-property-config';
import clone from '../../utils/clone';
import flexChildPropertyConfig from '../../utils/flex-child-property-config';
import positionPropertyConfig from '../../utils/position-property-config';
import widthPropertyConfig from '../../utils/width-property-config';
import heightPropertyConfig from '../../utils/height-property-config';

const propertyConfig = [
    ...clone(fontPropertyConfig),
    ...clone(positionPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(flexChildPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(overflowPropertyConfig),
];

const StyledText = styled.p`
    display: block;
    font-family: ${props => props.theme.fontFamilies[props.as] || props.theme.fontFamilies.default};
    font-size: ${props => props.theme.fontSizes[props.as || props.fontSize] || props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights[props.as || props.lineHeight] || props.theme.lineHeights.m};
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
