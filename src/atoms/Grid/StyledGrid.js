/* eslint-disable indent, no-multi-spaces, comma-spacing */
import styled, { css } from 'styled-components';

const mapRange = (inMin, inMax, outMin, outMax) => value => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
const mapGridToPercent = mapRange(0, 12, 0, 100);

const StyledGrid = {
    Row: styled.div`
        box-sizing: border-box;
        ${props => props.styles && props.styles(props)};
    `,
    Col: styled.div`
        box-sizing: border-box;
        float: left;
        width: ${props => mapGridToPercent(props.columns[0])}%;
        padding: ${(props) => {
            const { theme } = props;
            const gutter = Array.isArray(props.gutter) ? props.gutter : [props.gutter];
            return gutter[0] ? theme.spacing[gutter[0]] : gutter[0];
        }};
        ${(props) => {
            const { breakpoints } = props.theme.settings;
            const gutter = Array.isArray(props.gutter) ? props.gutter : [props.gutter];
            const columns = Array.isArray(props.columns) ? props.columns : [props.columns];
            const cssArray = [];
            breakpoints.forEach((breakpoint, breakpointIndex) => {
                const propIndex = breakpointIndex + 1;
                if (gutter[propIndex] || columns[propIndex]) {
                    const breakpointCss = css`
                        @media screen and (min-width: ${breakpoints[breakpointIndex]}) {
                            ${gutter[propIndex] ? `padding: ${props.theme.spacing[gutter[propIndex]] || gutter[propIndex]}` : ''};
                            ${columns[propIndex] ? `width: ${mapGridToPercent(columns[propIndex])}%` : ''};
                        }
                    `;
                    cssArray.push(breakpointCss.join(''));
                }
            });
            return cssArray.join('\n');
        }};
        ${props => props.styles && props.styles(props)};
    `,
};

export default StyledGrid;
