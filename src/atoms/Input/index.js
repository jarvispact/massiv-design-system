import React from 'react';
import { string, func, bool } from 'prop-types';
import StyledInput from './StyledInput';

const propTypes = {
    type: string,
    name: string,
    value: string,
    onChange: func,
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
};

const defaultProps = {
    type: 'text',
    name: undefined,
    value: '',
    onChange: undefined,
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
};

const Input = ({ type, name, value, onChange, disabled, color, scale, bg, width, height, p, pt, pb, pl, pr, className, styles }) => (
    <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
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
        className={className}
        styles={styles}
    />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
