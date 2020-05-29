import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../../utils/build-css';
import positionPropertyConfig from '../../utils/position-property-config';
import displayPropertyConfig from '../../utils/display-property-config';
import spacingPropertyConfig from '../../utils/spacing-property-config';
import widthPropertyConfig from '../../utils/width-property-config';
import heightPropertyConfig from '../../utils/height-property-config';
import flexChildPropertyConfig from '../../utils/flex-child-property-config';
import colorPropertyConfig from '../../utils/color-property-config';
import borderPropertyConfig from '../../utils/border-property-config';
import overflowPropertyConfig from '../../utils/overflow-property-config';
import boxShadowPropertyConfig from '../../utils/box-shadow-property-config';
import buildScopedProps from '../../utils/build-scoped-props';
import buildPropTypes from '../../utils/build-prop-types';
import clone from '../../utils/clone';
import fontPropertyConfig from '../../utils/font-property-config';

const propertyConfig = [
    ...clone(positionPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(flexChildPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(boxShadowPropertyConfig),
    ...clone(fontPropertyConfig),
];

const StyledBox = styled.div`
    ${buildCss(propertyConfig)}
`;

const Box = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledBox {...scopedProps}>{children}</StyledBox>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
