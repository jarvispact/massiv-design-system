import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import positionPropertyConfig from '../utils/position-property-config';
import displayPropertyConfig from '../utils/display-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import boxShadowPropertyConfig from '../utils/box-shadow-property-config';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import clone from '../utils/clone';

const propertyConfig = [
    ...clone(positionPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(boxShadowPropertyConfig),
];

const StyledImage = styled.img`
    ${buildCss(propertyConfig)}
`;

const Image = (_props) => {
    const { children, imageWidth, imageHeight, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledImage width={imageWidth} height={imageHeight} {...scopedProps}>{children}</StyledImage>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
