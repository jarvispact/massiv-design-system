import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import displayPropertyConfig from '../utils/display-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import overflowPropertyConfig from '../utils/overflow-property-config';
import boxShadowPropertyConfig from '../utils/box-shadow-property-config';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import setProperty from '../utils/set-property';
import clone from '../utils/clone';

const themeProperty = null;
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const trPropertyConfig = [
    {
        cssProperty: 'text-align',
        componentProperty: 'textAlign',
        scopedProperty: 'massivTextAlign',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...clone(displayPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(boxShadowPropertyConfig),
    ...clone(trPropertyConfig),
];

setProperty('border-bottom-style', 'defaultProperty', 'solid', propertyConfig);
setProperty('border-bottom-color', 'defaultProperty', 'gray200', propertyConfig);
setProperty('border-bottom-width', 'defaultProperty', '1px', propertyConfig);

const StyledTR = styled.tr`
    ${buildCss(propertyConfig)}
`;

const TR = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledTR {...scopedProps}>{children}</StyledTR>);
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

TR.propTypes = propTypes;
TR.defaultProps = defaultProps;

export default TR;
