import React from 'react';
import { string, func, node } from 'prop-types';
import StyledButton from './StyledButton';

const propTypes = {
    onClick: func.isRequired,
    type: string,
    color: string,
    scale: string,
    bg: string,
    width: string,
    height: string,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    type: undefined,
    color: undefined,
    scale: undefined,
    bg: undefined,
    width: undefined,
    height: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Button = ({ onClick, type, color, scale, bg, width, height, styles, className, children }) => (
    <StyledButton
        onClick={onClick}
        type={type}
        fontColor={color}
        fontScale={scale}
        bgColor={bg}
        w={width}
        h={height}
        styles={styles}
        className={className}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
