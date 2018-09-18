import React from 'react';
import { string, func, node } from 'prop-types';
import StyledBox from './StyledBox';
import {
    boxPropTypes,
    boxDefaultProps,
    colorPropTypes,
    colorDefaultProps,
    positionPropTypes,
    positionDefaultProps,
    spacingPropTypes,
    spacingDefaultProps,
    borderPropTypes,
    borderDefaultProps,
} from './prop-types';

const propTypes = {
    ...boxPropTypes,
    ...colorPropTypes,
    ...positionPropTypes,
    ...spacingPropTypes,
    ...borderPropTypes,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    ...boxDefaultProps,
    ...colorDefaultProps,
    ...positionDefaultProps,
    ...spacingDefaultProps,
    ...borderDefaultProps,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const Box = ({
    display,
    shadow,
    color,
    bg,
    pos,
    top,
    bottom,
    left,
    right,
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
    <StyledBox
        boxDisplay={display}
        shadow={shadow}
        fontColor={color}
        bgColor={bg}
        pos={pos}
        top={top}
        bottom={bottom}
        left={left}
        right={right}
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
    </StyledBox>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
