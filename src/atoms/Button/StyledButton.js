import styled from 'styled-components';

const StyledButton = styled.button`
    border-style: none;
    border-radius: 2px;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${props => props.disabled && '0.5'};
    &:focus {
        outline: 0;
    }
    color: ${props => props.theme.color[props.fontColor] || props.fontColor};
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

export default StyledButton;
