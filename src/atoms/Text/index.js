/* eslint-disable react/prop-types */
import React from 'react';
import { string, func, node } from 'prop-types';
import StyledText from './StyledText';
import { stringOrArray } from '../../prop-types';

const propTypes = {
    display: stringOrArray,
    color: stringOrArray,
    scale: stringOrArray,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    display: undefined,
    color: undefined,
    scale: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const H1 = ({ display, color, scale, styles, className, children }) => (
    <StyledText.H1
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H1>
);

const H2 = ({ display, color, scale, styles, className, children }) => (
    <StyledText.H2
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H2>
);

const H3 = ({ display, color, scale, styles, className, children }) => (
    <StyledText.H3
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H3>
);

const H4 = ({ display, color, scale, styles, className, children }) => (
    <StyledText.H4
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H4>
);

const H5 = ({ display, color, scale, styles, className, children }) => (
    <StyledText.H5
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H5>
);

const H6 = ({ display, color, scale, styles, className, children }) => (
    <StyledText.H6
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H6>
);

const P = ({ display, color, scale, styles, className, children }) => (
    <StyledText.P
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.P>
);

const Span = ({ display, color, scale, styles, className, children }) => (
    <StyledText.Span
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.Span>
);

const Label = ({ display, color, scale, styles, className, children }) => (
    <StyledText.Label
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.Label>
);

const A = ({ display, color, scale, styles, className, href, rel, target, download, children }) => (
    <StyledText.A
        textDisplay={display}
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
        href={href}
        rel={rel}
        target={target}
        download={download}
    >
        {children}
    </StyledText.A>
);

const Text = { H1, H2, H3, H4, H5, H6, P, Span, Label, A };

Object.keys(Text).forEach((key) => {
    const Component = Text[key];
    Component.propTypes = propTypes;
    Component.defaultProps = defaultProps;
});

export default Text;
