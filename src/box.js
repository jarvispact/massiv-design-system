/* eslint-disable react/forbid-foreign-prop-types */

import React from 'react';
import { string, node, oneOfType, arrayOf } from 'prop-types';
import styled from 'styled-components';
import buildCss from '../utils/build-css';
import positionPropertyConfig from '../utils/position-property-config';
import spacingPropertyConfig from '../utils/spacing-property-config';
import widthPropertyConfig from '../utils/width-property-config';
import heightPropertyConfig from '../utils/height-property-config';
import flexChildPropertyConfig from '../utils/flex-child-property-config';
import colorPropertyConfig from '../utils/color-property-config';

const arrayOfStringsOrString = oneOfType([arrayOf(string), string]);

const boxPropertyConfig = [
    {
        cssProperty: 'overflow',
        componentProperty: 'overflow',
        scopedProperty: 'massivOverflow',
        themeProperty: null,
        propertyType: arrayOfStringsOrString,
        defaultProperty: undefined,
    },
    {
        cssProperty: 'overflow-x',
        componentProperty: 'overflowX',
        scopedProperty: 'massivOverflowX',
        themeProperty: null,
        propertyType: arrayOfStringsOrString,
        defaultProperty: undefined,
    },
    {
        cssProperty: 'overflow-y',
        componentProperty: 'overflowY',
        scopedProperty: 'massivOverflowY',
        themeProperty: null,
        propertyType: arrayOfStringsOrString,
        defaultProperty: undefined,
    },
];

const propertyConfig = [
    ...positionPropertyConfig,
    ...spacingPropertyConfig,
    ...widthPropertyConfig,
    ...heightPropertyConfig,
    ...flexChildPropertyConfig,
    ...colorPropertyConfig,
    ...boxPropertyConfig,
];

const StyledBox = styled.div`
    ${buildCss(propertyConfig)}
`;

// const StyledBox = styled.div`
//     display: ${props => props.massivDisplay};
//     position: ${props => props.massivPosition};
//     top: ${props => props.massivTop};
//     left: ${props => props.massivLeft};
//     bottom: ${props => props.massivBottom};
//     right: ${props => props.massivRight};
//     width: ${props => props.massivWidth};
//     height: ${props => props.massivHeight};
//     min-width: ${props => props.massivMinWidth};
//     min-height: ${props => props.massivMinHeight};
//     max-width: ${props => props.massivMaxWidth};
//     max-height: ${props => props.massivMaxHeight};
//     overflow: ${props => props.massivOverflow};
//     overflow-x: ${props => props.massivOverflowX};
//     overflow-y: ${props => props.massivOverflowY};
//     flex-order: ${props => props.massivFlexOrder};
//     flex-grow: ${props => props.massivFlexGrow};
//     flex-shrink: ${props => props.massivFlexShrink};
//     flex-basis: ${props => props.massivFlexBasis};
//     flex: ${props => props.massivFlex};
//     align-self: ${props => props.massivAlignSelf};
//     padding: ${props => props.theme.spacing[props.massivP] || props.massivP};
//     padding-top: ${props => props.theme.spacing[props.massivPt] || props.massivPt};
//     padding-left: ${props => props.theme.spacing[props.massivPl] || props.massivPl};
//     padding-bottom: ${props => props.theme.spacing[props.massivPb] || props.massivPb};
//     padding-right: ${props => props.theme.spacing[props.massivPr] || props.massivPr};
//     margin: ${props => props.theme.spacing[props.massivM] || props.massivM};
//     margin-top: ${props => props.theme.spacing[props.massivMt] || props.massivMt};
//     margin-left: ${props => props.theme.spacing[props.massivMl] || props.massivMl};
//     margin-bottom: ${props => props.theme.spacing[props.massivMb] || props.massivMb};
//     margin-right: ${props => props.theme.spacing[props.massivMr] || props.massivMr};
//     background-color: ${props => props.theme.colors[props.massivBg] || props.massivBg};
// `;

// const Box = ({
//     display,
//     position,
//     top,
//     left,
//     bottom,
//     right,
//     width,
//     height,
//     minWidth,
//     minHeight,
//     maxWidth,
//     maxHeight,
//     overflow,
//     overflowX,
//     overflowY,
//     flexOrder,
//     flexGrow,
//     flexShrink,
//     flexBasis,
//     flex,
//     alignSelf,
//     p,
//     pt,
//     pl,
//     pb,
//     pr,
//     m,
//     mt,
//     ml,
//     mb,
//     mr,
//     bg,
//     children,
//     ...otherProps
// }) => (
//     <StyledBox
//         massivDisplay={display}
//         massivPosition={position}
//         massivTop={top}
//         massivLeft={left}
//         massivBottom={bottom}
//         massivRight={right}
//         massivWidth={width}
//         massivHeight={height}
//         massivMinWidth={minWidth}
//         massivMinHeight={minHeight}
//         massivMaxWidth={maxWidth}
//         massivMaxHeight={maxHeight}
//         massivOverflow={overflow}
//         massivOverflowX={overflowX}
//         massivOverflowY={overflowY}
//         massivFlexOrder={flexOrder}
//         massivFlexGrow={flexGrow}
//         massivFlexShrink={flexShrink}
//         massivFlexBasis={flexBasis}
//         massivFlex={flex}
//         massivAlignSelf={alignSelf}
//         massivP={p}
//         massivPt={pt}
//         massivPl={pl}
//         massivPb={pb}
//         massivPr={pr}
//         massivM={m}
//         massivMt={mt}
//         massivMl={ml}
//         massivMb={mb}
//         massivMr={mr}
//         massivBg={bg}
//         {...otherProps}
//     >
//         {children}
//     </StyledBox>
// );

const Box = (_props) => {
    const { children, ...props } = _props;

    const scopedProps = Object.keys(props).reduce((acc, key) => {
        const config = propertyConfig.find(({ componentProperty }) => componentProperty === key);
        acc[config ? config.scopedProperty : key] = props[key];
        return acc;
    }, {});

    return (<StyledBox {...scopedProps}>{children}</StyledBox>);
};

const { propTypes, defaultProps } = propertyConfig.reduce((acc, config) => {
    acc.propTypes[config.componentProperty] = config.propertyType;
    acc.defaultProps[config.componentProperty] = config.defaultProperty;
    return acc;
}, {
    propTypes: { children: node },
    defaultProps: { children: undefined },
});

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
