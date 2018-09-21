import React from 'react';
import { bool, string, func, node } from 'prop-types';
import StyledButton from './StyledButton';

const propTypes = {
    onClick: func.isRequired,
    type: string,
    disabled: bool,
    color: string,
    scale: string,
    bg: string,
    width: string,
    height: string,
    p: string,
    pt: string,
    pb: string,
    pl: string,
    pr: string,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    type: undefined,
    disabled: undefined,
    color: undefined,
    scale: undefined,
    bg: 'transparent',
    width: undefined,
    height: undefined,
    p: '0',
    pt: undefined,
    pb: undefined,
    pl: undefined,
    pr: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Button = ({ onClick, type, disabled, color, scale, bg, width, height, p, pt, pb, pl, pr, styles, className, children }) => (
    <StyledButton
        onClick={onClick}
        type={type}
        disabled={disabled}
        fontColor={color}
        fontScale={scale}
        bgColor={bg}
        w={width}
        h={height}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        styles={styles}
        className={className}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
