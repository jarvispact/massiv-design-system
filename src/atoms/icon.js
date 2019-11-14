import React from 'react';
import { node, bool, string } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import buildCss from '../../utils/build-css';
import buildScopedProps from '../../utils/build-scoped-props';
import buildPropTypes from '../../utils/build-prop-types';
import colorPropertyConfig from '../../utils/color-property-config';
import spacingPropertyConfig from '../../utils/spacing-property-config';
import clone from '../../utils/clone';
import fontPropertyConfig from '../../utils/font-property-config';
import positionPropertyConfig from '../../utils/position-property-config';
import displayPropertyConfig from '../../utils/display-property-config';
import flexChildPropertyConfig from '../../utils/flex-child-property-config';
import borderPropertyConfig from '../../utils/border-property-config';
import { arrayOfStringsOrString } from '../../utils/prop-types';

const iconPropertyConfig = [
    {
        componentProperty: 'loading',
        scopedProperty: 'massivLoading',
        themeProperty: null,
        propertyType: bool,
        defaultProperty: false,
    },
    {
        cssProperty: 'vertical-align',
        componentProperty: 'verticalAlign',
        scopedProperty: 'massivVerticalAlign',
        themeProperty: null,
        propertyType: arrayOfStringsOrString,
        defaultProperty: undefined,
    },
];

const propertyConfig = [
    ...clone(positionPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(fontPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(flexChildPropertyConfig),
    ...clone(iconPropertyConfig),
];

const getCursor = (props) => {
    if (props.massivLoading) return 'progress';
    if (props.disabled) return 'not-allowed';
    return undefined;
};

const StyledIcon = styled.i.attrs(props => ({ className: props.theme.icons.className }))`
    display: inline-block;
    vertical-align: ${props => props.theme.icons.verticalAlign || '-16%'};
    cursor: ${getCursor};
    opacity: ${props => props.disabled && '0.5'};
    ${buildCss(propertyConfig)}
`;

const Icon = (_props) => {
    const { children, theme, name, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledIcon {...scopedProps}>{name || children}</StyledIcon>);
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
