import styled from 'styled-components';

const H1 = styled.h1`
    font-family: ${props => props.theme.fonts.heading.family};
    font-weight: ${props => props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const H2 = styled.h2`
    font-family: ${props => props.theme.fonts.heading.family};
    font-weight: ${props => props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const H3 = styled.h3`
    font-family: ${props => props.theme.fonts.heading.family};
    font-weight: ${props => props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const H4 = styled.h4`
    font-family: ${props => props.theme.fonts.heading.family};
    font-weight: ${props => props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const H5 = styled.h5`
    font-family: ${props => props.theme.fonts.heading.family};
    font-weight: ${props => props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const H6 = styled.h6`
    font-family: ${props => props.theme.fonts.heading.family};
    font-weight: ${props => props.theme.fonts.heading.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.heading.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const P = styled.p`
    font-family: ${props => props.theme.fonts.paragraph.family};
    font-weight: ${props => props.theme.fonts.paragraph.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.paragraph.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const A = styled.a`
    font-family: ${props => props.theme.fonts.anchor.family};
    font-weight: ${props => props.theme.fonts.anchor.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.anchor.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const SPAN = styled.span`
    font-family: ${props => props.theme.fonts.span.family};
    font-weight: ${props => props.theme.fonts.span.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.span.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const LABEL = styled.label`
    font-family: ${props => props.theme.fonts.label.family};
    font-weight: ${props => props.theme.fonts.label.weights[props.fontWeight] || props.fontWeight || props.theme.fonts.label.weights.medium};
    color: ${props => props.theme.color[props.color] || props.color};
`;

const Text = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    A,
    SPAN,
    LABEL,
};

export default Text;
