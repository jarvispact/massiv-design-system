import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: ${props => props.theme.fonts.h1.family};
    font-weight: ${props => props.theme.fonts.h1.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.h1.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const H1 = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledH1
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledH1>
);

H1.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

H1.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default H1;
