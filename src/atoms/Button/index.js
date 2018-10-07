import React from 'react';
import { bool, string, func, node } from 'prop-types';
import StyledButton from './StyledButton';
import {
    colorPropTypes,
    colorDefaultProps,
    spacingPropTypes,
    spacingDefaultProps,
    borderPropTypes,
    borderDefaultProps,
    stringOrArray,
} from '../../prop-types';

const propTypes = {
    ...colorPropTypes,
    ...spacingPropTypes,
    ...borderPropTypes,
    onClick: func.isRequired,
    type: string,
    disabled: bool,
    display: stringOrArray,
    scale: stringOrArray,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    ...colorDefaultProps,
    ...spacingDefaultProps,
    ...borderDefaultProps,
    type: undefined,
    disabled: undefined,
    display: undefined,
    scale: undefined,
    bg: 'transparent',
    p: '0',
    bs: 'none',
    br: '2px',
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
    bs,
    bw,
    bc,
    br,
    bts,
    btw,
    btc,
    bbs,
    bbw,
    bbc,
    bls,
    blw,
    blc,
    brs,
    brw,
    brc,
    btlr,
    btrr,
    bblr,
    bbrr,
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
        bs={bs}
        bw={bw}
        bc={bc}
        br={br}
        bts={bts}
        btw={btw}
        btc={btc}
        bbs={bbs}
        bbw={bbw}
        bbc={bbc}
        bls={bls}
        blw={blw}
        blc={blc}
        brs={brs}
        brw={brw}
        brc={brc}
        btlr={btlr}
        btrr={btrr}
        bblr={bblr}
        bbrr={bbrr}
        styles={styles}
        className={className}
    >
        {children}
    </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
