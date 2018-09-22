import styled from 'styled-components';

const StyledButton = styled.button`
    border-style: none;
    border-radius: 2px;
    &:focus {
        outline: 0;
    }
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => props.disabled && '0.5'};
    color: ${props => props.theme.color[props.fontColor] || props.fontColor};
    font-family: ${props => props.theme.settings.fonts.button};
    font-size: ${props => props.theme.fontScale[props.fontScale] || props.fontScale};
    background-color: ${props => props.theme.color[props.bgColor] || props.bgColor};
    width: ${props => props.w};
    height: ${props => props.h};
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

export default StyledButton;
