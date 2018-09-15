import styled from 'styled-components';
import { string, func } from 'prop-types';

const propTypes = {
    fontColor: string,
    fontScale: string,
    styles: func,
    className: string,
};

const defaultProps = {
    fontColor: undefined,
    fontScale: undefined,
    styles: undefined,
    className: undefined,
};

const getStyles = type => props => `
    font-family: ${props.theme.settings.fonts[type]};
    color: ${props.theme.color[props.fontColor] || props.fontColor || ''};
    font-size: ${props.theme.fontScale[props.fontScale] || props.fontScale || ''};
    ${props.styles ? props.styles(props) : ''};
`;

const Text = {
    H1: styled.h1`${getStyles('heading')}`,
    H2: styled.h2`${getStyles('heading')}`,
    H3: styled.h3`${getStyles('heading')}`,
    H4: styled.h4`${getStyles('heading')}`,
    H5: styled.h5`${getStyles('heading')}`,
    H6: styled.h6`${getStyles('heading')}`,
    P: styled.p`${getStyles('paragraph')}`,
    A: styled.a`${getStyles('anchor')}`,
    Span: styled.span`${getStyles('paragraph')}`,
    Label: styled.label`${getStyles('paragraph')}`,
};

Object.keys(Text).forEach((key) => {
    const Component = Text[key];
    Component.propTypes = propTypes;
    Component.defaultProps = defaultProps;
});

export default Text;
