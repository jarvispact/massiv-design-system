const screen = {
    s: '640px',
    m: '768px',
    l: '1024px',
    xl: '1280px',
    '2xl': '1600px',
    '3xl': '1920px',
} as const;

const color = {
    gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
    },
    error: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
    },
    warning: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
    },
    success: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
    },
    primary: {
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#90cdf4',
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
        800: '#2c5282',
        900: '#2a4365',
    },
    secondary: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
    },
} as const;

const spacing = {
    xs: '0.15rem',
    s: '0.25rem',
    m: '0.5rem',
    l: '0.75rem',
    xl: '1rem',
    '2xl': '2rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '5rem',
    '6xl': '6rem',
} as const;

const boxShadow = {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    s: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    m: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    l: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
} as const;

const width = {
    ...spacing,
    '1/2': '50%',
} as const;

const height = {
    ...spacing,
    '1/2': '50%',
} as const;

const fontFamily = {
    sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
    ].join(', '),
    serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(', '),
    mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(', '),
} as const;

const fontSize = {
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
} as const;

const fontWeight = {
    xxs: '100',
    xs: '200',
    s: '300',
    m: '400',
    l: '500',
    xl: '600',
    '2xl': '700',
    '3xl': '800',
    '4xl': '900',
} as const;

const lineHeight = {
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
} as const;

const letterSpacing = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
} as const;

const textShadow = {} as const;

const radii = {
    s: '2px',
    m: '4px',
    l: '8px',
} as const;

const icon = {
    className: '',
} as const;

export type Theme = {
    screen: typeof screen;
    color: typeof color;
    spacing: typeof spacing;
    boxShadow: typeof boxShadow;
    width: typeof width;
    height: typeof height;
    fontFamily: typeof fontFamily;
    fontSize: typeof fontSize;
    fontWeight: typeof fontWeight;
    lineHeight: typeof lineHeight;
    letterSpacing: typeof letterSpacing;
    textShadow: typeof textShadow;
    radii: typeof radii;
    icon: typeof icon;
};

export type ThemeScope = keyof Theme;

export type WithTheme<T> = T & { theme: Theme };

export const defaultTheme: Theme = {
    screen,
    color,
    spacing,
    boxShadow,
    width,
    height,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    textShadow,
    radii,
    icon,
};
