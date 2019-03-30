const sharedFontHeadingConfig = {
    family: '"Josefin Slab", serif',
    weights: { s: '300', m: '400', l: '700' },
};

const sharedFontTextConfig = {
    family: '"M PLUS Rounded 1c", sans-serif',
    weights: { s: '100', m: '400', l: '700' },
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
    button: sharedFontTextConfig,
    scales: {
        xxs: '0.3rem',
        xs: '0.5rem',
        s: '0.8rem',
        m: '1rem',
        l: '1.2rem',
        xl: '1.5rem',
        xxl: '2rem',
        xxxl: '2.5rem',
    }
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
};

export default {
    fonts,
    colors,
};
