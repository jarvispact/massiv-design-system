import React from 'react';
import { string, bool, node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import colorPropertyConfig from '../utils/color-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import createFontPropertyConfig from '../utils/create-font-property-config';
import boxShadowPropertyConfig from '../utils/box-shadow-property-config';
import setProperty from '../utils/set-property';
import clone from '../utils/clone';

const fontPropertyConfig = createFontPropertyConfig({ type: 'input' });

const propertyConfig = [
    ...clone(colorPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(boxShadowPropertyConfig),
];

setProperty('border-style', 'defaultProperty', 'none', propertyConfig);
setProperty('border-radius', 'defaultProperty', '2px', propertyConfig);
setProperty('padding', 'defaultProperty', '4px', propertyConfig);

const StyledInput = styled.input`
    &:focus { outline: 0; }
    cursor: ${props => (props.disabled && 'not-allowed')};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fonts.input.family};
    vertical-align: ${props => props.theme.fonts.input.verticalAlign};
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
