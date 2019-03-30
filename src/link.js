import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
    font-family: ${props => props.theme.fonts.link.family};
    font-weight: ${props => props.theme.fonts.link.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.link.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const Link = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledLink
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledLink>
);

Link.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

Link.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default Link;
