import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledBox = styled.div`
    display: ${props => props.massivDisplay};
    position: ${props => props.massivPosition};
    top: ${props => props.massivTop};
    left: ${props => props.massivLeft};
    bottom: ${props => props.massivBottom};
    right: ${props => props.massivRight};
    width: ${props => props.massivWidth};
    height: ${props => props.massivHeight};
    min-width: ${props => props.massivMinWidth};
    min-height: ${props => props.massivMinHeight};
    max-width: ${props => props.massivMaxWidth};
    max-height: ${props => props.massivMaxHeight};
    overflow: ${props => props.massivOverflow};
    overflow-x: ${props => props.massivOverflowX};
    overflow-y: ${props => props.massivOverflowY};
    flex-order: ${props => props.massivFlexOrder};
    flex-grow: ${props => props.massivFlexGrow};
    flex-shrink: ${props => props.massivFlexShrink};
    flex-basis: ${props => props.massivFlexBasis};
    flex: ${props => props.massivFlex};
    align-self: ${props => props.massivAlignSelf};
    padding: ${props => props.theme.spacing[props.massivP] || props.massivP};
    padding-top: ${props => props.theme.spacing[props.massivPt] || props.massivPt};
    padding-left: ${props => props.theme.spacing[props.massivPl] || props.massivPl};
    padding-bottom: ${props => props.theme.spacing[props.massivPb] || props.massivPb};
    padding-right: ${props => props.theme.spacing[props.massivPr] || props.massivPr};
    margin: ${props => props.theme.spacing[props.massivM] || props.massivM};
    margin-top: ${props => props.theme.spacing[props.massivMt] || props.massivMt};
    margin-left: ${props => props.theme.spacing[props.massivMl] || props.massivMl};
    margin-bottom: ${props => props.theme.spacing[props.massivMb] || props.massivMb};
    margin-right: ${props => props.theme.spacing[props.massivMr] || props.massivMr};
    background-color: ${props => props.theme.colors[props.massivBg] || props.massivBg};
`;

const Box = ({
    display,
    position,
    top,
    left,
    bottom,
    right,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    overflow,
    overflowX,
    overflowY,
    flexOrder,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    alignSelf,
    p,
    pt,
    pl,
    pb,
    pr,
    m,
    mt,
    ml,
    mb,
    mr,
    bg,
    children,
    ...otherProps
}) => (
    <StyledBox
        massivDisplay={display}
        massivPosition={position}
        massivTop={top}
        massivLeft={left}
        massivBottom={bottom}
        massivRight={right}
        massivWidth={width}
        massivHeight={height}
        massivMinWidth={minWidth}
        massivMinHeight={minHeight}
        massivMaxWidth={maxWidth}
        massivMaxHeight={maxHeight}
        massivOverflow={overflow}
        massivOverflowX={overflowX}
        massivOverflowY={overflowY}
        massivFlexOrder={flexOrder}
        massivFlexGrow={flexGrow}
        massivFlexShrink={flexShrink}
        massivFlexBasis={flexBasis}
        massivFlex={flex}
        massivAlignSelf={alignSelf}
        massivP={p}
        massivPt={pt}
        massivPl={pl}
        massivPb={pb}
        massivPr={pr}
        massivM={m}
        massivMt={mt}
        massivMl={ml}
        massivMb={mb}
        massivMr={mr}
        massivBg={bg}
        {...otherProps}
    >
        {children}
    </StyledBox>
);

Box.propTypes = {
    display: string,
    position: string,
    top: string,
    left: string,
    bottom: string,
    right: string,
    width: string,
    height: string,
    minWidth: string,
    minHeight: string,
    maxWidth: string,
    maxHeight: string,
    overflow: string,
    overflowX: string,
    overflowY: string,
    flexOrder: string,
    flexGrow: string,
    flexShrink: string,
    flexBasis: string,
    flex: string,
    alignSelf: string,
    p: string,
    pt: string,
    pl: string,
    pb: string,
    pr: string,
    m: string,
    mt: string,
    ml: string,
    mb: string,
    mr: string,
    bg: string,
    children: node,
};

Box.defaultProps = {
    display: undefined,
    position: undefined,
    top: undefined,
    left: undefined,
    bottom: undefined,
    right: undefined,
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    overflow: undefined,
    overflowX: undefined,
    overflowY: undefined,
    flexOrder: undefined,
    flexGrow: undefined,
    flexShrink: undefined,
    flexBasis: undefined,
    flex: undefined,
    alignSelf: undefined,
    p: undefined,
    pt: undefined,
    pl: undefined,
    pb: undefined,
    pr: undefined,
    m: undefined,
    mt: undefined,
    ml: undefined,
    mb: undefined,
    mr: undefined,
    bg: undefined,
    children: undefined,
};

export default Box;
