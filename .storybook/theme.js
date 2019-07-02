const sharedFontHeadingConfig = {
    family: '"Josefin Slab", serif',
    weights: { s: '300', m: '400', l: '700' },
};

const sharedFontTextConfig = {
    family: '"Nunito", sans-serif',
    weights: { s: '200', m: '400', l: '700' },
};

const fonts = {
    h1: sharedFontHeadingConfig,
    h2: sharedFontHeadingConfig,
    h3: sharedFontHeadingConfig,
    h4: sharedFontHeadingConfig,
    h5: sharedFontHeadingConfig,
    h6: sharedFontHeadingConfig,
    text: sharedFontTextConfig,
    link: sharedFontTextConfig,
    label: sharedFontTextConfig,
    input: sharedFontTextConfig,
    textarea: sharedFontTextConfig,
    button: sharedFontTextConfig,
    icon: {
        className: 'material-icons',
        loadingIcon: 'settings',
    },
    scales: {
        xxs: '0.5rem',
        xs: '0.6rem',
        s: '0.8rem',
        m: '1rem',
        l: '1.2rem',
        xl: '1.5rem',
        xxl: '2rem',
        xxxl: '2.5rem',
    },
    letterSpacings: {
        s: '0.1rem',
        m: '0.2rem',
        l: '0.3rem',
    },
};

const colors = {
    white: '#F7F7F7',
    background: '#F7F7F7',
    primary: '#3F51B5',
    secondary: '#FFC107',
    disabled: '#d8d8d8',
    info: '#48C5FC',
    success: '#37B661',
    warning: '#DD9913',
    error: '#E25650',
    gray300: '#B3B3B3',
    gray200: '#e0e0e0',
};

const spacing = {
    xxs: '0.4rem',
    xs: '0.6rem',
    s: '0.8rem',
    m: '1rem',
    l: '1.2rem',
    xl: '1.4rem',
    xxl: '1.6rem',
}

const breakpoints = [
    '450px',
    '650px',
    '900px',
    '1200px',
    '1600px',
];

const widths = {
    s: '100px',
    m: '200px',
    l: '300px',
};

const heights = {
    s: '100px',
    m: '200px',
    l: '300px',
};

const radii = {
    s: '2px',
    m: '4px',
    l: '6px',
};

export default {
    breakpoints,
    fonts,
    colors,
    spacing,
    widths,
    heights,
    radii,
};
