import React from 'react';
import { node, string, bool, func } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../../utils/build-css';
import buildScopedProps from '../../utils/build-scoped-props';
import buildPropTypes from '../../utils/build-prop-types';
import spacingPropertyConfig from '../../utils/spacing-property-config';
import widthPropertyConfig from '../../utils/width-property-config';
import heightPropertyConfig from '../../utils/height-property-config';
import colorPropertyConfig from '../../utils/color-property-config';
import borderPropertyConfig from '../../utils/border-property-config';
import displayPropertyConfig from '../../utils/display-property-config';
import fontPropertyConfig from '../../utils/font-property-config';
import boxShadowPropertyConfig from '../../utils/box-shadow-property-config';
import positionPropertyConfig from '../../utils/position-property-config';
import flexChildPropertyConfig from '../../utils/flex-child-property-config';
import LoadingIndicator from './loading-indicator';
import setProperty from '../../utils/set-property';
import clone from '../../utils/clone';

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
    ...clone(positionPropertyConfig),
    ...clone(flexChildPropertyConfig),
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
setProperty('padding', 'defaultProperty', '9px 12px', propertyConfig);
setProperty('font-size', 'defaultProperty', '16px', propertyConfig);
setProperty('line-height', 'defaultProperty', '14px', propertyConfig);
setProperty('outline-color', 'defaultProperty', 'info', propertyConfig);

const getCursor = (props) => {
    if (props.massivLoading) return 'progress';
    if (props.disabled) return 'not-allowed';
    return 'pointer';
};

const StyledButton = styled.button`
    cursor: ${getCursor};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fontFamilies.button || props.theme.fontFamilies.default};
    ${buildCss(propertyConfig)}
`;

const Button = React.forwardRef((_props, ref) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (
        <StyledButton
            ref={ref}
            {...scopedProps}
        >
            {scopedProps.massivLoading
                ? <LoadingIndicator color={scopedProps.massivColor} fontSize={scopedProps.fontSize || '16px'} />
                : children}
        </StyledButton>
    );
});

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
