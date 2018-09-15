import styled from 'styled-components';
import { string, func, node } from 'prop-types';

const propTypes = {
    bgColor: string,
    fontColor: string,
    pos: string,
    top: string,
    bottom: string,
    left: string,
    right: string,
    w: string,
    h: string,
    boxDisplay: string,
    flexDirection: string,
    flexWrap: string,
    flexFlow: string,
    justifyContent: string,
    alignItems: string,
    alignContent: string,
    flexOrder: string,
    flexGrow: string,
    flexShrink: string,
    flexBasis: string,
    flex: string,
    alignSelf: string,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    bgColor: undefined,
    fontColor: undefined,
    pos: undefined,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
    w: undefined,
    h: undefined,
    boxDisplay: undefined,
    flexDirection: undefined,
    flexWrap: undefined,
    flexFlow: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    alignContent: undefined,
    flexOrder: undefined,
    flexGrow: undefined,
    flexShrink: undefined,
    flexBasis: undefined,
    flex: undefined,
    alignSelf: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Box = styled.div`
    ${props => (props.bgColor ? `background-color: ${props.theme.color[props.bgColor] || props.bgColor}` : undefined)};
    ${props => (props.fontColor ? `color: ${props.theme.color[props.fontColor] || props.fontColor}` : undefined)};
    ${props => (props.pos ? `position: ${props.pos}` : undefined)};
    ${props => (props.top ? `top: ${props.theme.scale[props.top] || props.top}` : undefined)};
    ${props => (props.bottom ? `bottom: ${props.theme.scale[props.bottom] || props.bottom}` : undefined)};
    ${props => (props.left ? `left: ${props.theme.scale[props.left] || props.left}` : undefined)};
    ${props => (props.right ? `right: ${props.theme.scale[props.right] || props.right}` : undefined)};
    ${props => (props.w ? `width: ${props.theme.scale[props.w] || props.w}` : undefined)};
    ${props => (props.h ? `height: ${props.theme.scale[props.h] || props.h}` : undefined)};
    ${props => (props.boxDisplay ? `display: ${props.boxDisplay}` : undefined)};
    ${props => (props.flexDirection ? `flex-direction: ${props.flexDirection}` : undefined)};
    ${props => (props.flexWrap ? `flex-wrap: ${props.flexWrap}` : undefined)};
    ${props => (props.flexFlow ? `flex-flow: ${props.flexFlow}` : undefined)};
    ${props => (props.justifyContent ? `justify-content: ${props.justifyContent}` : undefined)};
    ${props => (props.alignItems ? `align-items: ${props.alignItems}` : undefined)};
    ${props => (props.alignContent ? `align-content: ${props.alignContent}` : undefined)};
    ${props => (props.flexOrder ? `order: ${props.flexOrder}` : undefined)};
    ${props => (props.flexGrow ? `flex-grow: ${props.flexGrow}` : undefined)};
    ${props => (props.flexShrink ? `flex-shrink: ${props.flexShrink}` : undefined)};
    ${props => (props.flexBasis ? `flex-basis: ${props.flexBasis}` : undefined)};
    ${props => (props.flex ? `flex: ${props.flex}` : undefined)};
    ${props => (props.alignSelf ? `align-self: ${props.alignSelf}` : undefined)};
    ${props => (props.styles ? props.styles(props) : '')};
`;

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
