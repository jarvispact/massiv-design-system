import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import positionPropertyConfig from '../utils/position-property-config';
import displayPropertyConfig from '../utils/display-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import colorPropertyConfig from '../utils/color-property-config';
import borderPropertyConfig from '../utils/border-property-config';
import overflowPropertyConfig from '../utils/overflow-property-config';
import boxShadowPropertyConfig from '../utils/box-shadow-property-config';
import buildScopedProps from '../utils/build-scoped-props';
import buildPropTypes from '../utils/build-prop-types';
import setProperty from '../utils/set-property';
import clone from '../utils/clone';

const propertyConfig = [
    ...clone(positionPropertyConfig),
    ...clone(displayPropertyConfig),
    ...clone(spacingPropertyConfig),
    ...clone(widthPropertyConfig),
    ...clone(heightPropertyConfig),
    ...clone(colorPropertyConfig),
    ...clone(borderPropertyConfig),
    ...clone(overflowPropertyConfig),
    ...clone(boxShadowPropertyConfig),
];

setProperty('overflow', 'defaultProperty', 'auto', propertyConfig);

const StyledPre = styled.pre`
    ${buildCss(propertyConfig)}
`;

const getDisplayStrategy = (children) => {
    if (children instanceof Error) {
        return JSON.stringify({ errorMessage: children.message, error: children }, null, 2);
    }

    if (typeof children === 'object') {
        return JSON.stringify(children, null, 2);
    }

    return children;
};

const Code = (_props) => {
    const { children, ...props } = _props;
    const scopedProps = buildScopedProps(propertyConfig, props);

    return (
        <StyledPre {...scopedProps}>
            <code>{getDisplayStrategy(children)}</code>
        </StyledPre>
    );
};

const defaultPropTypes = {
    propTypes: { children: node },
    defaultProps: { children: undefined },
};

const { propTypes, defaultProps } = buildPropTypes(propertyConfig, defaultPropTypes);

Code.propTypes = propTypes;
Code.defaultProps = defaultProps;

export default Code;
