/* eslint-disable indent */
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
        width: ${() => mapGridToPercent(12)}%;
        padding: ${props => props.theme.spacing[props.gutter] || props.gutter};
        ${(props) => {
            if (props.colS) {
                return css`
                    @media screen and (min-width: ${props.theme.settings.breakpoints.s}) {
                        width: ${mapGridToPercent(props.colS)}%;
                    }
                `;
            }
        }};
        ${(props) => {
            if (props.colM) {
                return css`
                    @media screen and (min-width: ${props.theme.settings.breakpoints.m}) {
                        width: ${mapGridToPercent(props.colM)}%;
                    }
                `;
            }
        }};
        ${(props) => {
            if (props.colL) {
                return css`
                    @media screen and (min-width: ${props.theme.settings.breakpoints.l}) {
                        width: ${mapGridToPercent(props.colL)}%;
                    }
                `;
            }
        }};
        ${(props) => {
            if (props.colXL) {
                return css`
                    @media screen and (min-width: ${props.theme.settings.breakpoints.xl}) {
                        width: ${mapGridToPercent(props.colXL)}%;
                    }
                `;
            }
        }};
        ${(props) => {
            if (props.colXXL) {
                return css`
                    @media screen and (min-width: ${props.theme.settings.breakpoints.xxl}) {
                        width: ${mapGridToPercent(props.colXXL)}%;
                    }
                `;
            }
        }};
        ${props => props.styles && props.styles(props)};
    `,
};

export default StyledGrid;
