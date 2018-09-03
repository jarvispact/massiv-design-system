import { css } from 'styled-components';

const getButtonType = (props) => {
    const { flat, raised, border } = props;
    let type;
    if (flat) type = 'flat';
    if (raised) type = 'raised';
    if (border) type = 'border';
    return type;
};

export const getBackgroundColor = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'flat':
    case 'border':
        return 'transparent';
    default:
        if (props.disabled) return props.theme.color.disabled;
        if (props.color) return props.theme.color[props.color] || props.color;
        return props.theme.color.primary;
    }
};

export const getBorder = () => (props) => {
    const type = getButtonType(props);
    const propColor = props.theme.color[props.color] || props.color;
    let borderColor = props.color ? propColor : props.theme.color.primary;
    if (props.disabled) borderColor = props.theme.color.disabled;

    switch (type) {
    case 'border':
    case 'raised':
        return css`
            border-style: solid;
            border-width: 1px;
            border-color: ${borderColor};
            border-radius: 2px;
        `;
    case 'flat':
    default:
        return css`border-style: none;`;
    }
};

export const getShadow = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'raised':
        return 'box-shadow: 2px 2px 7px 0px rgba(87,87,87,0.7);';
    default:
        return undefined;
    }
};

export const getFontColor = () => (props) => {
    const type = getButtonType(props);
    switch (type) {
    case 'flat':
    case 'border':
        if (props.disabled) return props.theme.color.disabled;
        if (props.fontColor) return props.theme.color[props.fontColor] || props.fontColor;
        if (props.color) return props.theme.color[props.color] || props.color;
        return props.theme.color.primary;
    default:
        if (props.disabled) return props.theme.color.darkGray;
        if (props.fontColor) return props.theme.color[props.fontColor] || props.fontColor;
        return props.theme.color.white;
    }
};
