import React from 'react';
import { string, func } from 'prop-types';
import StyledImage from './StyledImage';
import { stringOrArray, spacingPropTypes, spacingDefaultProps } from '../../prop-types';

const propTypes = {
    ...spacingPropTypes,
    display: stringOrArray,
    alt: string,
    src: string,
    width: string,
    height: string,
    cssWidth: stringOrArray,
    cssHeight: stringOrArray,
    styles: func,
    className: string,
};

const defaultProps = {
    ...spacingDefaultProps,
    display: undefined,
    alt: undefined,
    src: undefined,
    width: undefined,
    height: undefined,
    cssWidth: undefined,
    cssHeight: undefined,
    styles: undefined,
    className: undefined,
};

const Image = ({
    display,
    alt,
    src,
    width,
    height,
    cssWidth,
    cssHeight,
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
}) => (
    <StyledImage
        imageDisplay={display}
        alt={alt}
        src={src}
        width={width}
        height={height}
        cssWidth={cssWidth}
        cssHeight={cssHeight}
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
    />
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
