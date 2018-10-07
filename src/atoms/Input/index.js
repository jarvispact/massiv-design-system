import React from 'react';
import { string, func, bool } from 'prop-types';
import StyledInput from './StyledInput';
import { colorPropTypes, colorDefaultProps, spacingPropTypes, spacingDefaultProps, stringOrArray } from '../../prop-types';

const propTypes = {
    ...colorPropTypes,
    ...spacingPropTypes,
    type: string,
    name: string,
    value: string,
    onChange: func,
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
};

const defaultProps = {
    ...colorDefaultProps,
    ...spacingDefaultProps,
    p: '0',
    type: 'text',
    name: undefined,
    value: '',
    onChange: undefined,
    disabled: undefined,
    display: undefined,
    scale: undefined,
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    styles: undefined,
    className: undefined,
};

const Input = ({
    type,
    name,
    value,
    onChange,
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
    className,
    styles,
}) => (
    <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
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
        className={className}
        styles={styles}
    />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
