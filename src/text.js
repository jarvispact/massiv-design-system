import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.span`
    font-family: ${props => props.theme.fonts.text.family};
    font-weight: ${props => props.theme.fonts.text.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.text.weights.m};
    font-size: ${props => props.theme.fonts.scales[props.massivScale] || props.massivScale};
    color: ${props => props.theme.colors[props.massivColor] || props.massivColor};
`;

const Text = ({ weight, scale, color, children, ...otherProps }) => (
    <StyledText
        massivWeight={weight}
        massivScale={scale}
        massivColor={color}
        {...otherProps}
    >
        {children}
    </StyledText>
);

Text.propTypes = {
    weight: string,
    scale: string,
    color: string,
    children: node,
};

Text.defaultProps = {
    weight: undefined,
    scale: undefined,
    color: undefined,
    children: undefined,
};

export default Text;
