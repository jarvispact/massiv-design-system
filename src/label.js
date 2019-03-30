import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.label.family};
    font-weight: ${props => props.theme.fonts.label.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.label.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const Label = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledLabel
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledLabel>
);

Label.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

Label.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default Label;
