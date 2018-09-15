import styled from 'styled-components';
import { string, func, node } from 'prop-types';

const propTypes = {
    bgColor: string,
    fontColor: string,
    w: string,
    h: string,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    bgColor: undefined,
    fontColor: undefined,
    w: undefined,
    h: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Button = styled.button`
    padding: 0.5rem 1rem;
    border-style: none;
    border-radius: 2px;
    &:focus {
        outline: 0;
    }
    ${props => (props.bgColor ? `background-color: ${props.theme.color[props.bgColor] || props.bgColor}` : 'background-color: transparent')};
    ${props => (props.fontColor ? `color: ${props.theme.color[props.fontColor] || props.fontColor}` : undefined)};
    ${props => (props.w ? `width: ${props.theme.scale[props.w] || props.w}` : undefined)};
    ${props => (props.h ? `height: ${props.theme.scale[props.h] || props.h}` : undefined)};
    ${props => (props.styles ? props.styles(props) : '')};
`;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
