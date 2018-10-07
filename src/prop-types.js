import { string, number, arrayOf, oneOfType } from 'prop-types';

export const stringOrArray = oneOfType([string, arrayOf(string)]);
export const numberOrArray = oneOfType([number, arrayOf(number)]);

export const colorPropTypes = {
    color: stringOrArray,
    bg: stringOrArray,
};

export const colorDefaultProps = {
    color: undefined,
    bg: undefined,
};

export const positionPropTypes = {
    pos: stringOrArray,
    top: stringOrArray,
    bottom: stringOrArray,
    left: stringOrArray,
    right: stringOrArray,
};

export const positionDefaultProps = {
    pos: undefined,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
};

export const spacingPropTypes = {
    p: stringOrArray,
    pt: stringOrArray,
    pb: stringOrArray,
    pl: stringOrArray,
    pr: stringOrArray,
    m: stringOrArray,
    mt: stringOrArray,
    mb: stringOrArray,
    ml: stringOrArray,
    mr: stringOrArray,
    width: stringOrArray,
    height: stringOrArray,
    minWidth: stringOrArray,
    minHeight: stringOrArray,
    maxWidth: stringOrArray,
    maxHeight: stringOrArray,
};

export const spacingDefaultProps = {
    p: undefined,
    pt: undefined,
    pb: undefined,
    pl: undefined,
    pr: undefined,
    m: undefined,
    mt: undefined,
    mb: undefined,
    ml: undefined,
    mr: undefined,
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
};

export const borderPropTypes = {
    bs: stringOrArray,
    bw: stringOrArray,
    bc: stringOrArray,
    br: stringOrArray,
    bts: stringOrArray,
    btw: stringOrArray,
    btc: stringOrArray,
    bbs: stringOrArray,
    bbw: stringOrArray,
    bbc: stringOrArray,
    bls: stringOrArray,
    blw: stringOrArray,
    blc: stringOrArray,
    brs: stringOrArray,
    brw: stringOrArray,
    brc: stringOrArray,
    btlr: stringOrArray,
    btrr: stringOrArray,
    bblr: stringOrArray,
    bbrr: stringOrArray,
};

export const borderDefaultProps = {
    bs: undefined,
    bw: undefined,
    bc: undefined,
    br: undefined,
    bts: undefined,
    btw: undefined,
    btc: undefined,
    bbs: undefined,
    bbw: undefined,
    bbc: undefined,
    bls: undefined,
    blw: undefined,
    blc: undefined,
    brs: undefined,
    brw: undefined,
    brc: undefined,
    btlr: undefined,
    btrr: undefined,
    bblr: undefined,
    bbrr: undefined,
};
