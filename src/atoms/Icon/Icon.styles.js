import { keyframes, css } from 'styled-components';

const rotationKeyframes = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const rotationAnimation = css`
    display: inline-block;
    animation: ${rotationKeyframes} 0.85s linear infinite;
`;

export default (props) => {
    const color = props.theme.color[props.color] || props.color;
    const fontScale = props.theme.fontScale[props.scale] || props.scale;

    return `
        color: ${color};
        font-size: ${fontScale};
        ${props.loading ? rotationAnimation.join('') : ''};
    `;
};
