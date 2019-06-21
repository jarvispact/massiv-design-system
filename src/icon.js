import React from 'react';
import { node, bool, string } from 'prop-types';
import styled, { keyframes, css, withTheme } from 'styled-components';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import colorPropertyConfig from '../utils/color-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import clone from '../utils/clone';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

const iconPropertyConfig = [
    {
        cssProperty: 'font-size',
        componentProperty: 'scale',
        scopedProperty: 'massivFontSize',
        themeProperty: 'fonts.scales',
        propertyType,
        defaultProperty,
    },
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
    ...clone(iconPropertyConfig),
];

const getCursor = (props) => {
    if (props.massivLoading) return 'progress';
    if (props.disabled) return 'not-allowed';
    return 'pointer';
};

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const StyledIcon = styled.i.attrs(props => ({ className: props.theme.fonts.icon.className }))`
    vertical-align: ${props => props.theme.fonts.icon.verticalAlign || '-0.3rem'};
    cursor: ${getCursor};
    opacity: ${props => props.disabled && '0.5'};
    ${(props) => {
        if (props.massivLoading) {
            return css`
                display: inline-block;
                animation: ${rotationKeyframes} 0.85s linear infinite;
            `;
        }
    }};
    ${buildCss(propertyConfig)}
`;

const Icon = (_props) => {
    const { children, theme, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    if (scopedProps.onClick && scopedProps.disabled) scopedProps.onClick = undefined;
    return (<StyledIcon {...scopedProps}>{scopedProps.massivLoading ? theme.fonts.icon.loadingIcon : scopedProps.name || children}</StyledIcon>);
};

const defaultPropTypes = {
    propTypes: {
        children: node,
        disabled: bool,
        name: string,
    },
    defaultProps: {
        children: undefined,
        disabled: false,
        name: undefined,
    },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
