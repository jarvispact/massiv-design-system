import styled from 'styled-components';
import { string, node, func } from 'prop-types';

const propTypes = {
    color: string,
    scale: string,
    className: string,
    children: node,
    styles: func,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
    styles: undefined,
};

const font = type => props => `
    font-family: ${props.theme.fonts[type]};
`;

const textStyle = () => props => `
    color: ${props.theme.color[props.color] || props.color};
    font-size: ${props.theme.fontScale[props.scale] || props.scale};
    ${props.styles && props.styles(props)};
`;

const Text = {
    H1: styled.h1`${font('heading')} ${textStyle()}`,
    H2: styled.h2`${font('heading')} ${textStyle()}`,
    H3: styled.h3`${font('heading')} ${textStyle()}`,
    H4: styled.h4`${font('heading')} ${textStyle()}`,
    H5: styled.h5`${font('heading')} ${textStyle()}`,
    H6: styled.h6`${font('heading')} ${textStyle()}`,
    P: styled.p`${font('paragraph')} ${textStyle()}`,
    Label: styled.label`${font('paragraph')} ${textStyle()}`,
    Span: styled.span`${font('paragraph')} ${textStyle()}`,
    A: styled.a`${font('anchor')} ${textStyle()}`,
};

Object.keys(Text).forEach((key) => {
    Text[key].propTypes = propTypes;
    Text[key].defaultProps = defaultProps;
});

export default Text;
