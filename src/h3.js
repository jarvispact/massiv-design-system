import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledH3 = styled.h3`
    font-family: ${props => props.theme.fonts.h3.family};
    font-weight: ${props => props.theme.fonts.h3.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.h3.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const H3 = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledH3
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledH3>
);

H3.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

H3.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default H3;
