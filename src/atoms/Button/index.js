import React from 'react';
import { bool, string, func, node } from 'prop-types';
import StyledButton from './StyledButton';
import { colorPropTypes, colorDefaultProps, spacingPropTypes, spacingDefaultProps, stringOrArray } from '../../prop-types';

const propTypes = {
    ...colorPropTypes,
    ...spacingPropTypes,
    onClick: func.isRequired,
    type: string,
    disabled: bool,
    display: stringOrArray,
    scale: stringOrArray,
    width: stringOrArray,
    height: stringOrArray,
    minWidth: stringOrArray,
    minHeight: stringOrArray,
    maxWidth: stringOrArray,
    maxHeight: stringOrArray,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    ...colorDefaultProps,
    ...spacingDefaultProps,
    type: undefined,
    disabled: undefined,
    display: undefined,
    scale: undefined,
    bg: 'transparent',
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    p: '0',
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Button = ({
    onClick,
    type,
    disabled,
    display,
    color,
    scale,
    bg,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    p,
    pt,
    pb,
    pl,
    pr,
    m,
    mt,
    mb,
    ml,
    mr,
    styles,
    className,
    children,
}) => (
    <StyledButton
        onClick={onClick}
        type={type}
        disabled={disabled}
        buttonDisplay={display}
        fontColor={color}
        fontScale={scale}
        bgColor={bg}
        w={width}
        h={height}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        p={p}
        pt={pt}
        pb={pb}
        pl={pl}
        pr={pr}
        m={m}
        mt={mt}
        mb={mb}
        ml={ml}
        mr={mr}
        styles={styles}
        className={className}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
