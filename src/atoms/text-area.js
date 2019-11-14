import React from 'react';
import { string, bool, node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../../utils/build-css';
import buildScopedProps from '../../utils/build-scoped-props';
import buildPropTypes from '../../utils/build-prop-types';
import colorPropertyConfig from '../../utils/color-property-config';
import spacingPropertyConfig from '../../utils/spacing-property-config';
import widthPropertyConfig from '../../utils/width-property-config';
import heightPropertyConfig from '../../utils/height-property-config';
import borderPropertyConfig from '../../utils/border-property-config';
import fontPropertyConfig from '../../utils/font-property-config';
import boxShadowPropertyConfig from '../../utils/box-shadow-property-config';
import positionPropertyConfig from '../../utils/position-property-config';
import flexChildPropertyConfig from '../../utils/flex-child-property-config';
import displayPropertyConfig from '../../utils/display-property-config';
import setProperty from '../../utils/set-property';
import clone from '../../utils/clone';

const propertyConfig = [
    ...clone(positionPropertyConfig),
    ...clone(flexChildPropertyConfig),
    ...clone(displayPropertyConfig),
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
setProperty('padding', 'defaultProperty', '6px', propertyConfig);
setProperty('outline-color', 'defaultProperty', 'info', propertyConfig);
setProperty('font-size', 'defaultProperty', '16px', propertyConfig);
setProperty('vertical-align', 'defaultProperty', 'top', propertyConfig);

const StyledTextArea = styled.textarea`
    resize: none;
    cursor: ${props => (props.disabled && 'not-allowed')};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.fontFamilies.textarea || props.theme.fontFamilies.default};
    ${buildCss(propertyConfig)}
`;

const TextArea = React.forwardRef((_props, ref) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);
    return (<StyledTextArea ref={ref} {...scopedProps}>{children}</StyledTextArea>);
});

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
