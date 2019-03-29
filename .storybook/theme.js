const settings = {
    breakpoints: [
        '450px',
        '650px',
        '900px',
        '1200px',
        '1600px',
    ],
    icons: {
        className: 'material-icons',
    },
};

// font-family: 'Josefin Slab', serif;
// font-family: 'M PLUS Rounded 1c', sans-serif;


// const fonts = {
//     heading: '"Josefin Sans", serif',
//     paragraph: '"Raleway", sans-serif',
//     anchor: '"Raleway", sans-serif',
//     span: '"Raleway", sans-serif',
//     label: '"Raleway", sans-serif',
//     input: '"Raleway", sans-serif',
//     button: '"Raleway", sans-serif',
// };

const fonts = {
    heading: {
        family: '"Josefin Slab", serif',
        weights: { light: '300', medium: '400', bold: '700' },
    },
    paragraph: {
        family: '"M PLUS Rounded 1c", sans-serif',
        weights: { light: '100', medium: '400', bold: '700' },
    },
    anchor: {
        family: '"M PLUS Rounded 1c", sans-serif',
        weights: { light: '100', medium: '400', bold: '700' },
    },
    span: {
        family: '"M PLUS Rounded 1c", sans-serif',
        weights: { light: '100', medium: '400', bold: '700' },
    },
    label: {
        family: '"M PLUS Rounded 1c", sans-serif',
        weights: { light: '100', medium: '400', bold: '700' },
    },
    input: {
        family: '"M PLUS Rounded 1c", sans-serif',
        weights: { light: '100', medium: '400', bold: '700' },
    },
    button: {
        family: '"M PLUS Rounded 1c", sans-serif',
        weights: { light: '100', medium: '400', bold: '700' },
    },
};



const color = {
    white: '#F7F7F7',
    background: '#F7F7F7',
    primary: '#3F51B5',
    secondary: '#FFC107',
    disabled: '#d8d8d8',
    info: '#48C5FC',
    success: '#37B661',
    warning: '#DD9913',
    error: '#E25650',
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

const spacing = {
    xs: '0.5rem',
    s: '1rem',
    m: '1.5rem',
    l: '2rem',
    xl: '3rem',
    xxl: '4rem',
    xxxl: '6rem',
};

const shadow = {
    s: '2px 2px 5px 0px rgba(0,0,0,0.75)',
    m: '4px 4px 5px 0px rgba(0,0,0,0.58)',
    l: '6px 6px 5px 0px rgba(0,0,0,0.45)',
    xl: '8px 8px 5px 0px rgba(0,0,0,0.45)',
};

export default {
    fonts,
    settings,
    color,
    fontScale,
    spacing,
    shadow,
};
