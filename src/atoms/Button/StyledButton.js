import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) => {
        const themeColor = props.theme.color;
        if (props.disabled) return themeColor.lightGray;
        if (props.color) return themeColor[props.color] || props.color;
        return themeColor.white;
    }};
    font-size: ${(props) => {
        const themeScale = props.theme.scale;
        if (props.scale) return themeScale[props.scale] || props.scale;
        return themeScale.m;
    }};
    padding: 0.5rem 1rem;
    border-style: none;
    border-radius: 2px;

    &:focus {
        outline: 0;
    }
`;

export default StyledButton;
