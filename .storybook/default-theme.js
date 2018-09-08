import IconStyles from '../src/atoms/Icon/Icon.styles';

const settings = {
    screen: {
        s: '450px',
        m: '750px',
        l: '1200px',
        xl: '1600px',
    },
    icons: {
        className: 'material-icons',
    },
    fonts: {
        heading: '"Josefin Sans", serif',
        paragraph: '"Raleway", sans-serif',
        anchor: '"Raleway", sans-serif',
    },
};

const color = {
    black: '#202021',
    white: '#F7F7F7',
    lightGray: '#d8d8d8',
    darkGray: '#4f4f4f',
    info: '#48C5FC',
    success: '#37B661',
    warning: '#DD9913',
    error: '#E25650',
    primary: '#3F51B5',
    secondary: '#FFC107',
    disabled: '#d8d8d8',
};

const fontScale = {
    xs: '0.5rem',
    s: '0.8rem',
    m: '1rem',
    l: '1.2rem',
    xl: '1.6rem',
    xxl: '2rem',
    xxxl: '3rem',
};

const components = {
    Icon: IconStyles,
};

export default {
    settings,
    color,
    fontScale,
    components,
};
