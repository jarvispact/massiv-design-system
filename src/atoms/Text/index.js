/* eslint-disable react/prop-types */
import React from 'react';
import { string, func, node } from 'prop-types';
import StyledText from './StyledText';

const propTypes = {
    color: string,
    scale: string,
    styles: func,
    className: string,
    children: node,
};

const defaultProps = {
    color: undefined,
    scale: undefined,
    styles: undefined,
    className: undefined,
    children: undefined,
};

const H1 = ({ color, scale, styles, className, children }) => (
    <StyledText.H1
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H1>
);

const H2 = ({ color, scale, styles, className, children }) => (
    <StyledText.H2
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H2>
);

const H3 = ({ color, scale, styles, className, children }) => (
    <StyledText.H3
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H3>
);

const H4 = ({ color, scale, styles, className, children }) => (
    <StyledText.H4
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H4>
);

const H5 = ({ color, scale, styles, className, children }) => (
    <StyledText.H5
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H5>
);

const H6 = ({ color, scale, styles, className, children }) => (
    <StyledText.H6
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.H6>
);

const P = ({ color, scale, styles, className, children }) => (
    <StyledText.P
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.P>
);

const Span = ({ color, scale, styles, className, children }) => (
    <StyledText.Span
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.Span>
);

const Label = ({ color, scale, styles, className, children }) => (
    <StyledText.Label
        fontColor={color}
        fontScale={scale}
        styles={styles}
        className={className}
    >
        {children}
    </StyledText.Label>
);

const A = ({ color, scale, styles, className, href, rel, target, download, children }) => (
    <StyledText.A
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
