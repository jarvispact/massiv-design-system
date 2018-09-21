import styled from 'styled-components';

const mapRange = (inMin, inMax, outMin, outMax) => value => (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
const mapToPercent = mapRange(0, 12, 0, 100);

const StyledGrid = {
    Row: styled.div`
        box-sizing: border-box;
        ${props => props.styles && props.styles(props)};
    `,
    Col: styled.div`
        box-sizing: border-box;
        float: left;
        width: ${() => mapToPercent(12)}%;
        padding: ${props => props.theme.spacing[props.gutter] || props.gutter};
        @media screen and (min-width: ${props => props.theme.settings.screen.s}) {
            width: ${props => mapToPercent(props.colS)}%;
        }
        @media screen and (min-width: ${props => props.theme.settings.screen.m}) {
            width: ${props => mapToPercent(props.colM)}%;
        }
        @media screen and (min-width: ${props => props.theme.settings.screen.l}) {
            width: ${props => mapToPercent(props.colL)}%;
        }
        @media screen and (min-width: ${props => props.theme.settings.screen.xl}) {
            width: ${props => mapToPercent(props.colXL)}%;
        }
        @media screen and (min-width: ${props => props.theme.settings.screen.xxl}) {
            width: ${props => mapToPercent(props.colXXL)}%;
        }
        ${props => props.styles && props.styles(props)};
    `,
};

export default StyledGrid;
