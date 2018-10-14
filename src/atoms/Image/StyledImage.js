/* eslint-disable no-multi-spaces, comma-spacing */
import styled from 'styled-components';
import buildCss from '../../build-css';

const imageProperties = [
    { cssProp: 'display',                   reactProp: 'imageDisplay',  themeProp: null },

    { cssProp: 'width',                     reactProp: 'cssWidth',      themeProp: 'spacing' },
    { cssProp: 'height',                    reactProp: 'cssHeight',     themeProp: 'spacing' },

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

const StyledImage = styled.img`
    ${buildCss(imageProperties)};
    ${props => props.styles && props.styles(props)};
`;

export default StyledImage;
