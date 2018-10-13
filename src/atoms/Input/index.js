import React from 'react';
import { string, func, bool } from 'prop-types';
import StyledInput from './StyledInput';
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
    type: string,
    name: string,
    value: string,
    onChange: func,
    onFocus: func,
    onBlur: func,
    disabled: bool,
    display: stringOrArray,
    scale: stringOrArray,
    styles: func,
    id: string,
    className: string,
};

const defaultProps = {
    ...colorDefaultProps,
    ...spacingDefaultProps,
    ...borderDefaultProps,
    name: undefined,
    onChange: undefined,
    onFocus: undefined,
    onBlur: undefined,
    disabled: undefined,
    display: undefined,
    scale: undefined,
    p: '0',
    type: 'text',
    value: '',
    bs: 'none',
    br: '2px',
    styles: undefined,
    id: undefined,
    className: undefined,
};

const Input = ({
    type,
    name,
    value,
    onChange,
    onFocus,
    onBlur,
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
    id,
    className,
}) => (
    <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        inputDisplay={display}
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
        id={id}
        className={className}
    />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
