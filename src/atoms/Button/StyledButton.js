import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 0.5rem;
    border-style: none;
    border-radius: 2px;
    &:focus {
        outline: 0;
    }
    color: ${props => props.theme.color[props.fontColor] || props.fontColor};
    font-size: ${props => props.theme.fontScale[props.fontScale] || props.fontScale};
    background-color: ${props => props.theme.color[props.bgColor] || props.bgColor || 'transparent'};
    width: ${props => props.w};
    height: ${props => props.h};
    ${props => (props.styles ? props.styles(props) : '')};
`;

export default StyledButton;
