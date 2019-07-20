import React from 'react';
import { node, string, bool, func } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import displayPropertyConfig from '../utils/display-property-config';
import createFontPropertyConfig from '../utils/create-font-property-config';
import boxShadowPropertyConfig from '../utils/box-shadow-property-config';
import setProperty from '../utils/set-property';
import clone from '../utils/clone';
import Icon from './icon';

const fontPropertyConfig = createFontPropertyConfig({ type: 'button' });

const buttonPropertyConfig = [
    {
        componentProperty: 'loading',
        scopedProperty: 'massivLoading',
        themeProperty: null,
        propertyType: bool,
        defaultProperty: false,
    },
];

const propertyConfig = [
    ...clone(colorPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(boxShadowPropertyConfig),
    ...clone(buttonPropertyConfig),
];

setProperty('border-style', 'defaultProperty', 'none', propertyConfig);
setProperty('border-radius', 'defaultProperty', '2px', propertyConfig);
setProperty('padding', 'defaultProperty', '4px 8px', propertyConfig);

const getCursor = (props) => {
    if (props.massivLoading) return 'progress';
    if (props.disabled) return 'not-allowed';
    return 'pointer';
};

const StyledButton = styled.button`
    &:focus { outline: 0; }
    cursor: ${getCursor};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fonts.button.family};
    ${buildCss(propertyConfig)}
`;

const Button = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledButton {...scopedProps}>{scopedProps.massivLoading ? <Icon loading /> : children}</StyledButton>);
};

const defaultPropTypes = {
    propTypes: {
        children: node,
        type: string,
        disabled: bool,
        loading: bool,
        onClick: func.isRequired,
    },
    defaultProps: {
        children: undefined,
        type: undefined,
        disabled: false,
        loading: false,
    },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
