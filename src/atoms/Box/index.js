import styled from 'styled-components';

const Box = styled.div`
    ${props => (props.flex ? `display: ${props.flex}` : undefined)};
    ${props => (props.flexDirection ? `flex-direction: ${props.flexDirection}` : undefined)};
    ${props => (props.flexWrap ? `flex-wrap: ${props.flexWrap}` : undefined)};
    ${props => (props.flexFlow ? `flex-flow: ${props.flexFlow}` : undefined)};
    ${props => (props.justifyContent ? `justify-content: ${props.justifyContent}` : undefined)};
    ${props => (props.alignItems ? `align-items: ${props.alignItems}` : undefined)};
    ${props => (props.alignContent ? `align-content: ${props.alignContent}` : undefined)};
    ${props => (props.bgColor ? `background-color: ${props.theme.color[props.bgColor] || props.bgColor}` : undefined)};
    ${props => (props.w ? `width: ${props.theme.scale[props.w] || props.w}` : undefined)};
    ${props => (props.h ? `height: ${props.theme.scale[props.h] || props.h}` : undefined)};
`;

export default Box;
