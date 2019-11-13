import React from 'react';
import { node, bool, string } from 'prop-types';
import styled, { keyframes, css, withTheme } from 'styled-components';
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

const iconPropertyConfig = [
    {
        componentProperty: 'loading',
        scopedProperty: 'massivLoading',
        themeProperty: null,
        propertyType: bool,
        defaultProperty: false,
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

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const StyledIcon = styled.i.attrs(props => ({ className: props.theme.icons.className }))`
    display: inline-block;
    vertical-align: ${props => props.theme.icons.verticalAlign || '-16%'};
    cursor: ${getCursor};
    opacity: ${props => props.disabled && '0.5'};
    ${(props) => {
        if (props.massivLoading) {
            return css`
                animation: ${rotationKeyframes} 0.85s linear infinite;
            `;
        }
    }};
    ${buildCss(propertyConfig)}
`;

const Icon = (_props) => {
    const { children, theme, name, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledIcon {...scopedProps}>{scopedProps.massivLoading ? theme.icons.loadingIcon : name || children}</StyledIcon>);
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
