/* eslint-disable no-multi-spaces, comma-spacing */
import styled from 'styled-components';
import buildCss from '../../build-css';

const buttonProperties = [
    { cssProp: 'display',                   reactProp: 'buttonDisplay', themeProp: null },
    { cssProp: 'font-size',                 reactProp: 'fontScale',     themeProp: 'fontScale' },
    { cssProp: 'color',                     reactProp: 'fontColor',     themeProp: 'color' },
    { cssProp: 'background-color',          reactProp: 'bgColor',       themeProp: 'color' },

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

const StyledButton = styled.button`
    ${buildCss(buttonProperties)};
    border-style: none;
    border-radius: 2px;
    &:focus { outline: 0; }
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => props.disabled && '0.5'};
    font-family: ${props => props.theme.settings.fonts.button};
    ${props => props.styles && props.styles(props)};
`;

export default StyledButton;
