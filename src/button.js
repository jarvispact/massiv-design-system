import React from 'react';
import { node, string, bool, func } from 'prop-types';
import styled from 'styled-components';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import setProperty from '../utils/set-property';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const buttonPropertyConfig = [
    {
        cssProperty: 'display',
        componentProperty: 'display',
        scopedProperty: 'massivDisplay',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'font-size',
        componentProperty: 'fontSize',
        scopedProperty: 'massivFontSize',
        themeProperty: 'fonts.scales',
        propertyType,
        defaultProperty: 'm',
    },
    {
        cssProperty: 'font-weight',
        componentProperty: 'fontWeight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.h1.weights',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'letter-spacing',
        componentProperty: 'letterSpacing',
        scopedProperty: 'massivLetterSpacing',
        themeProperty: 'fonts.letterSpacings',
        propertyType,
        defaultProperty,
    },
];

const propertyConfig = [
    ...widthPropertyConfig,
    ...heightPropertyConfig,
    ...spacingPropertyConfig,
    ...colorPropertyConfig,
    ...borderPropertyConfig,
    ...buttonPropertyConfig,
];

setProperty('border-style', 'defaultProperty', 'none', propertyConfig);
setProperty('border-radius', 'defaultProperty', '2px', propertyConfig);
setProperty('padding', 'defaultProperty', '4px 8px', propertyConfig);

const StyledButton = styled.button`
    &:focus { outline: 0; }
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fonts.button.family};
    ${buildCss(propertyConfig)}
`;

const Button = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledButton {...scopedProps}>{children}</StyledButton>);
};

const defaultPropTypes = {
    propTypes: {
        children: node,
        type: string,
        disabled: bool,
        onClick: func.isRequired,
    },
    defaultProps: {
        children: undefined,
        type: undefined,
        disabled: false,
    },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
