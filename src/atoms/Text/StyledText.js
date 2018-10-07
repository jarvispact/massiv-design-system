/* eslint-disable no-multi-spaces, comma-spacing */
import styled from 'styled-components';
import buildCss from '../../build-css';

const textProperties = [
    { cssProp: 'display',   reactProp: 'textDisplay',   themeProp: null },
    { cssProp: 'color',     reactProp: 'fontColor',     themeProp: 'color' },
    { cssProp: 'font-size', reactProp: 'fontScale',     themeProp: 'fontScale' },
];

const getStyles = type => props => `
    ${buildCss(textProperties)(props)};
    font-family: ${props.theme.settings.fonts[type]};
    ${props.styles ? props.styles(props) : ''};
`;

const StyledText = {
    H1: styled.h1`${getStyles('heading')}`,
    H2: styled.h2`${getStyles('heading')}`,
    H3: styled.h3`${getStyles('heading')}`,
    H4: styled.h4`${getStyles('heading')}`,
    H5: styled.h5`${getStyles('heading')}`,
    H6: styled.h6`${getStyles('heading')}`,
    P: styled.p`${getStyles('paragraph')}`,
    Span: styled.span`${getStyles('paragraph')}`,
    Label: styled.label`${getStyles('paragraph')}`,
    A: styled.a`${getStyles('anchor')}`,
};

export default StyledText;
