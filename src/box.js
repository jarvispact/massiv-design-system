import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import positionPropertyConfig from '../utils/position-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import flexChildPropertyConfig from '../utils/flex-child-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';

const themeProperty = null;
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const boxPropertyConfig = [
    {
        cssProperty: 'overflow',
        componentProperty: 'overflow',
        scopedProperty: 'massivOverflow',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'overflow-x',
        componentProperty: 'overflowX',
        scopedProperty: 'massivOverflowX',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'overflow-y',
        componentProperty: 'overflowY',
        scopedProperty: 'massivOverflowY',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...positionPropertyConfig,
    ...spacingPropertyConfig,
    ...widthPropertyConfig,
    ...heightPropertyConfig,
    ...flexChildPropertyConfig,
    ...colorPropertyConfig,
    ...borderPropertyConfig,
    ...boxPropertyConfig,
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
