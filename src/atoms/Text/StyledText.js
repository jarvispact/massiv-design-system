/* eslint-disable no-multi-spaces, comma-spacing */
import styled from 'styled-components';
import buildCss from '../../build-css';

const textProperties = [
    { cssProp: 'display',                   reactProp: 'textDisplay',   themeProp: null },
    { cssProp: 'color',                     reactProp: 'fontColor',     themeProp: 'color' },
    { cssProp: 'font-size',                 reactProp: 'fontScale',     themeProp: 'fontScale' },

    { cssProp: 'width',                     reactProp: 'w',             themeProp: 'spacing' },
    { cssProp: 'height',                    reactProp: 'h',             themeProp: 'spacing' },
    { cssProp: 'min-width',                 reactProp: 'minWidth',      themeProp: 'spacing' },
    { cssProp: 'min-height',                reactProp: 'minHeight',     themeProp: 'spacing' },
    { cssProp: 'max-width',                 reactProp: 'maxWidth',      themeProp: 'spacing' },
    { cssProp: 'max-height',                reactProp: 'maxHeight',     themeProp: 'spacing' },

    { cssProp: 'padding',                   reactProp: 'p',             themeProp: 'spacing' },
    { cssProp: 'padding-top',               reactProp: 'pt',            themeProp: 'spacing' },
    { cssProp: 'padding-bottom',            reactProp: 'pb',            themeProp: 'spacing' },
    { cssProp: 'padding-left',              reactProp: 'pl',            themeProp: 'spacing' },
    { cssProp: 'padding-right',             reactProp: 'pr',            themeProp: 'spacing' },

    { cssProp: 'margin',                    reactProp: 'm',             themeProp: 'spacing' },
    { cssProp: 'margin-top',                reactProp: 'mt',            themeProp: 'spacing' },
    { cssProp: 'margin-bottom',             reactProp: 'mb',            themeProp: 'spacing' },
    { cssProp: 'margin-left',               reactProp: 'ml',            themeProp: 'spacing' },
    { cssProp: 'margin-right',              reactProp: 'mr',            themeProp: 'spacing' },
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
