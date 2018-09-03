import styled, { keyframes, css } from 'styled-components';

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const StyledIcon = styled.i`
    vertical-align: -16%;
    padding: 0 0.25rem;
    cursor: ${(props) => {
        if (props.loading) return 'not-allowed';
        if (props.onClick) return 'pointer';
    }};
    color: ${(props) => {
        const themeColor = props.theme.color;
        return themeColor[props.color] || props.color;
    }};
    font-size: ${(props) => {
        const themeScale = props.theme.scale;
        return themeScale[props.scale] || props.scale;
    }};
    ${(props) => {
        if (props.loading) {
            return css`
                display: inline-block;
                animation: ${rotationKeyframes} 0.85s linear infinite;
            `;
        }
    }};
    ${props => props.styles && props.styles(props)};
`;

export default StyledIcon;
