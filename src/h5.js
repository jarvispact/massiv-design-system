import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledH5 = styled.h5`
    font-family: ${props => props.theme.fonts.h5.family};
    font-weight: ${props => props.theme.fonts.h5.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.h5.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const H5 = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledH5
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledH5>
);

H5.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

H5.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default H5;
