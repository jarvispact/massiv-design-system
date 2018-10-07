/* eslint-disable no-multi-spaces, comma-spacing */
import styled, { keyframes, css } from 'styled-components';
import buildCss from '../../build-css';

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const iconProperties = [
    { cssProp: 'display',   reactProp: 'iconDisplay',   themeProp: null },
    { cssProp: 'color',     reactProp: 'fontColor',     themeProp: 'color' },
    { cssProp: 'font-size', reactProp: 'fontScale',     themeProp: 'fontScale' },
];

const StyledIcon = styled.i`
    ${buildCss(iconProperties)};
    vertical-align: -16%;
    ${(props) => {
        if (props.loading) {
            return css`
                display: inline-block;
                animation: ${rotationKeyframes} 0.85s linear infinite;
            `;
        }
    }};
    ${props => props.styles && props.styles(props)};
`;

export default StyledIcon;
