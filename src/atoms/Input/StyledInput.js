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
    width: ${props => props.w};
    height: ${props => props.h};
    padding: ${props => props.theme.spacing[props.p] || props.p};
    padding-top: ${props => props.theme.spacing[props.pt] || props.pt};
    padding-bottom: ${props => props.theme.spacing[props.pb] || props.pb};
    padding-left: ${props => props.theme.spacing[props.pl] || props.pl};
    padding-right: ${props => props.theme.spacing[props.pr] || props.pr};
    ${props => props.styles && props.styles(props)};
`;

export default StyledInput;
