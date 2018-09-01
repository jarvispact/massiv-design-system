import styled from 'styled-components';
import { string, node } from 'prop-types';

const propTypes = {
    color: string,
    scale: string,
    className: string,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
};

const textStyle = () => props => `
    color: ${props.theme.color[props.color] || props.color};
    font-size: ${props.theme.scale[props.scale] || props.scale};
`;

const font = type => props => `
    font-family: ${props.theme.fonts[type]};
`;

const Text = {
    H1: styled.h1`${textStyle()} ${font('heading')}`,
    H2: styled.h2`${textStyle()} ${font('heading')}`,
    H3: styled.h3`${textStyle()} ${font('heading')}`,
    H4: styled.h4`${textStyle()} ${font('heading')}`,
    H5: styled.h5`${textStyle()} ${font('heading')}`,
    H6: styled.h6`${textStyle()} ${font('heading')}`,
    P: styled.p`${textStyle()} ${font('paragraph')}`,
    Label: styled.label`${textStyle()} ${font('paragraph')}`,
    Span: styled.span`${textStyle()} ${font('paragraph')}`,
    A: styled.a`${textStyle()} ${font('anchor')}`,
};

Object.keys(Text).forEach((key) => {
    Text[key].propTypes = propTypes;
    Text[key].defaultProps = defaultProps;
});

export default Text;
