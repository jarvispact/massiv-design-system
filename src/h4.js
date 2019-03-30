import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledH4 = styled.h4`
    font-family: ${props => props.theme.fonts.h4.family};
    font-weight: ${props => props.theme.fonts.h4.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.h4.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const H4 = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledH4
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledH4>
);

H4.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

H4.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default H4;
