import styled from 'styled-components';

const StyledInput = styled.input`
    border-style: none;
    border-radius: 2px
    &:focus {
        outline: 0;
    }
    cursor: ${props => (props.disabled && 'not-allowed')};
    opacity: ${props => props.disabled && '0.5'};
    color: ${props => props.theme.color[props.fontColor] || props.fontColor};
    font-family: ${props => props.theme.settings.fonts.input};
    font-size: ${props => props.theme.fontScale[props.fontScale] || props.fontScale};
    background-color: ${props => props.theme.color[props.bgColor] || props.bgColor};
    width: ${props => props.theme.spacing[props.w] || props.w};
    height: ${props => props.theme.spacing[props.h] || props.h};
    min-width: ${props => props.theme.spacing[props.minWidth] || props.minWidth};
    min-height: ${props => props.theme.spacing[props.minHeight] || props.minHeight};
    max-width: ${props => props.theme.spacing[props.maxWidth] || props.maxWidth};
    max-height: ${props => props.theme.spacing[props.maxHeight] || props.maxHeight};
    padding: ${props => props.theme.spacing[props.p] || props.p};
    padding-top: ${props => props.theme.spacing[props.pt] || props.pt};
    padding-bottom: ${props => props.theme.spacing[props.pb] || props.pb};
    padding-left: ${props => props.theme.spacing[props.pl] || props.pl};
    padding-right: ${props => props.theme.spacing[props.pr] || props.pr};
    margin: ${props => props.theme.spacing[props.m] || props.m};
    margin-top: ${props => props.theme.spacing[props.mt] || props.mt};
    margin-bottom: ${props => props.theme.spacing[props.mb] || props.mb};
    margin-left: ${props => props.theme.spacing[props.ml] || props.ml};
    margin-right: ${props => props.theme.spacing[props.mr] || props.mr};
    ${props => props.styles && props.styles(props)};
`;

export default StyledInput;
