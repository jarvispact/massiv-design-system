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

const error500 = '#ff4444';
const error700 = '#cc0000';

const error = {
    error: error500,
    error500,
    error700,
};

const warning500 = '#ffbb33';
const warning700 = '#ff8800';

const warning = {
    warning: warning500,
    warning500,
    warning700,
};

const success500 = '#00C851';
const success700 = '#007e33';

const success = {
    success: success500,
    success500,
    success700,
}

const info500 = '#33b5e5';
const info700 = '#0099cc';

const info = {
    info: info500,
    info500,
    info700,
};

const primary500 = '#4285f4';
const primary700 = '#0d47a1';

const primary = {
    primary: primary500,
    primary500,
    primary700,
};

const secondary500 = '#aa66cc';
const secondary700 = '#9933CC';

const secondary = {
    secondary: secondary500,
    secondary500,
    secondary700,
};

const colors = {
    white: '#FFFFFF',
    ...error,
    ...warning,
    ...success,
    ...info,
    ...primary,
    ...secondary,
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

const widths = {};

const heights = {};

const radii = {
    s: '2px',
    m: '4px',
    l: '6px',
};

const boxShadows = {
    s: '2px 2px',
    m: '4px 4px',
    l: '6px 6px',
}

const textShadows = {
    m: '4px 4px 2px rgba(150, 150, 150, 1)',
}

export default {
    breakpoints,
    fonts,
    colors,
    spacing,
    widths,
    heights,
    radii,
    boxShadows,
    textShadows,
};
