import styled, { keyframes, css } from 'styled-components';

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const StyledIcon = styled.i`
    color: ${props => props.theme.color[props.fontColor] || props.fontColor};
    font-size: ${props => props.theme.fontScale[props.fontScale] || props.fontScale};
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
