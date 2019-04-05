import React from 'react';
import { string, bool, node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import { arrayOfStringsOrString } from '../utils/prop-types';
import colorPropertyConfig from '../utils/color-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import borderPropertyConfig from '../utils/border-property-config';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const inputPropertyConfig = [
    {
        cssProperty: 'font-weight',
        componentProperty: 'fontWeight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fonts.input.weights',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'font-size',
        componentProperty: 'fontSize',
        scopedProperty: 'massivFontSize',
        themeProperty: 'fonts.scales',
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
    ...colorPropertyConfig,
    ...spacingPropertyConfig,
    ...widthPropertyConfig,
    ...heightPropertyConfig,
    ...borderPropertyConfig,
    ...inputPropertyConfig,
];

const StyledInput = styled.input`
    &:focus { outline: 0; }
    cursor: ${props => (props.disabled && 'not-allowed')};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fonts.input.family};
    ${buildCss(propertyConfig)}
`;

const Input = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledInput {...scopedProps}>{children}</StyledInput>);
};

const defaultPropTypes = {
    propTypes: {
        type: string,
        id: string,
        name: string,
        value: string,
        disabled: bool,
        children: node,
    },
    defaultProps: {
        type: 'text',
        id: undefined,
        name: undefined,
        value: undefined,
        disabled: false,
        children: undefined,
    },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
