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
import setProperty from '../utils/set-property';
import clone from '../utils/clone';

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
        defaultProperty: 'm',
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
    ...clone(colorPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(inputPropertyConfig),
];

setProperty('border-style', 'defaultProperty', 'none', propertyConfig);
setProperty('border-radius', 'defaultProperty', '2px', propertyConfig);
setProperty('padding', 'defaultProperty', '4px', propertyConfig);

const StyledTextArea = styled.textarea`
    &:focus { outline: 0; }
    resize: none;
    cursor: ${props => (props.disabled && 'not-allowed')};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fonts.textarea.family};
    vertical-align: ${props => props.theme.fonts.textarea.verticalAlign || 'middle'};
    ${buildCss(propertyConfig)}
`;

const TextArea = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledTextArea {...scopedProps}>{children}</StyledTextArea>);
};

const defaultPropTypes = {
    propTypes: {
        rows: string,
        id: string,
        name: string,
        value: string,
        disabled: bool,
        children: node,
    },
    defaultProps: {
        rows: '6',
        id: undefined,
        name: undefined,
        value: undefined,
        disabled: false,
        children: undefined,
    },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

TextArea.propTypes = propTypes;
TextArea.defaultProps = defaultProps;

export default TextArea;
