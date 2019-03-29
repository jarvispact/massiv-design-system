import styled from 'styled-components';
import { string } from 'prop-types';

const Box = styled.div`
    display: ${props => props.cssDisplay};
    position: ${props => props.cssPosition};
    top: ${props => props.cssTop};
    left: ${props => props.cssLeft};
    bottom: ${props => props.cssBottom};
    right: ${props => props.cssRight};
    width: ${props => props.cssWidth};
    height: ${props => props.cssHeight};
    min-width: ${props => props.cssMinWidth};
    min-height: ${props => props.cssMinHeight};
    max-width: ${props => props.cssMaxWidth};
    max-height: ${props => props.cssMaxHeight};
    overflow: ${props => props.cssOverflow};
    overflow-x: ${props => props.cssOverflowX};
    overflow-y: ${props => props.cssOverflowY};
    padding: ${props => props.cssPadding};
    padding-top: ${props => props.cssPaddingTop};
    padding-left: ${props => props.cssPaddingLeft};
    padding-bottom: ${props => props.cssPaddingBottom};
    padding-right: ${props => props.cssPaddingRight};
    margin: ${props => props.cssMargin};
    margin-top: ${props => props.cssMarginTop};
    margin-left: ${props => props.cssMarginLeft};
    margin-bottom: ${props => props.cssMarginBottom};
    margin-right: ${props => props.cssMarginRight};
`;

Box.propTypes = {
    cssDisplay: string,
    cssPosition: string,
    cssTop: string,
    cssLeft: string,
    cssBottom: string,
    cssRight: string,
    cssWidth: string,
    cssHeight: string,
    cssMinWidth: string,
    cssMinHeight: string,
    cssMaxWidth: string,
    cssMaxHeight: string,
    cssOverflow: string,
    cssOverflowX: string,
    cssOverflowY: string,
    cssPadding: string,
    cssPaddingTop: string,
    cssPaddingLeft: string,
    cssPaddingBottom: string,
    cssPaddingRight: string,
    cssMargin: string,
    cssMarginTop: string,
    cssMarginLeft: string,
    cssMarginBottom: string,
    cssMarginRight: string,
};

Box.defaultProps = {
    cssDisplay: undefined,
    cssPosition: undefined,
    cssTop: undefined,
    cssLeft: undefined,
    cssBottom: undefined,
    cssRight: undefined,
    cssWidth: undefined,
    cssHeight: undefined,
    cssMinWidth: undefined,
    cssMinHeight: undefined,
    cssMaxWidth: undefined,
    cssMaxHeight: undefined,
    cssOverflow: undefined,
    cssOverflowX: undefined,
    cssOverflowY: undefined,
    cssPadding: undefined,
    cssPaddingTop: undefined,
    cssPaddingLeft: undefined,
    cssPaddingBottom: undefined,
    cssPaddingRight: undefined,
    cssMargin: undefined,
    cssMarginTop: undefined,
    cssMarginLeft: undefined,
    cssMarginBottom: undefined,
    cssMarginRight: undefined,
};

export default Box;
