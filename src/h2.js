import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    font-family: ${props => props.theme.fonts.h2.family};
    font-weight: ${props => props.theme.fonts.h2.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.h2.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const H2 = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledH2
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledH2>
);

H2.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

H2.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default H2;
