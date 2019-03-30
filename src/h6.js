import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledH6 = styled.h6`
    font-family: ${props => props.theme.fonts.h6.family};
    font-weight: ${props => props.theme.fonts.h6.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.h6.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const H6 = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledH6
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledH6>
);

H6.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

H6.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default H6;
