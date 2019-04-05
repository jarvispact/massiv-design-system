import React from 'react';
import { node, bool, string } from 'prop-types';
import styled from 'styled-components';
import { arrayOfStringsOrString } from '../utils/prop-types';
import buildCss from '../utils/build-css';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import colorPropertyConfig from '../utils/color-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';

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
];

const propertyConfig = [
    ...colorPropertyConfig,
    ...spacingPropertyConfig,
    ...iconPropertyConfig,
];

const getCursor = (props) => {
    if (props.disabled) return 'not-allowed';
    if (props.onClick) return 'pointer';
    return undefined;
};

const StyledIcon = styled.i.attrs(props => ({ className: props.theme.fonts.iconClassName }))`
    vertical-align: -16%;
    cursor: ${getCursor};
    opacity: ${props => props.disabled && '0.5'};
    ${buildCss(propertyConfig)}
`;

const Icon = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    if (scopedProps.onClick && scopedProps.disabled) scopedProps.onClick = undefined;
    return (<StyledIcon {...scopedProps}>{scopedProps.name || children}</StyledIcon>);
};

const defaultPropTypes = {
    propTypes: { children: node, disabled: bool, name: string },
    defaultProps: { children: undefined, disabled: false, name: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
