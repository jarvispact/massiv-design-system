const breakpoint = {
    xs: '320px',
    s: '640px',
    m: '768px',
    l: '1024px',
    xl: '1280px',
    '2xl': '1600px',
    '3xl': '1920px',
};

const color = {
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray300: '#D4D4D4',
    gray400: '#A3A3A3',
    gray500: '#737373',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#171717',

    error50: '#FEF2F2',
    error100: '#FEE2E2',
    error200: '#FECACA',
    error300: '#FCA5A5',
    error400: '#F87171',
    error500: '#EF4444',
    error600: '#DC2626',
    error700: '#B91C1C',
    error800: '#991B1B',
    error900: '#7F1D1D',

    warning50: '#FFFBEB',
    warning100: '#FEF3C7',
    warning200: '#FDE68A',
    warning300: '#FCD34D',
    warning400: '#FBBF24',
    warning500: '#F59E0B',
    warning600: '#D97706',
    warning700: '#B45309',
    warning800: '#92400E',
    warning900: '#78350F',

    success50: '#F0FDF4',
    success100: '#DCFCE7',
    success200: '#BBF7D0',
    success300: '#86EFAC',
    success400: '#4ADE80',
    success500: '#22C55E',
    success600: '#16A34A',
    success700: '#15803D',
    success800: '#166534',
    success900: '#14532D',

    primary50: '#EFF6FF',
    primary100: '#DBEAFE',
    primary200: '#BFDBFE',
    primary300: '#93C5FD',
    primary400: '#60A5FA',
    primary500: '#3B82F6',
    primary600: '#2563EB',
    primary700: '#1D4ED8',
    primary800: '#1E40AF',
    primary900: '#1E3A8A',

    secondary50: '#FDF2F8',
    secondary100: '#FCE7F3',
    secondary200: '#FBCFE8',
    secondary300: '#F9A8D4',
    secondary400: '#F472B6',
    secondary500: '#EC4899',
    secondary600: '#DB2777',
    secondary700: '#BE185D',
    secondary800: '#9D174D',
    secondary900: '#831843',
};

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
};

const fontSize = {
    xxs: '0.5rem',
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
};

const fontWeight = {
    xxxs: '100',
    xxs: '200',
    xs: '300',
    s: '400',
    m: '500',
    l: '600',
    xl: '700',
    '2xl': '800',
    '3xl': '900',
};

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
};

const letterSpacing = {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
};

export const defaultTheme = {
    breakpoint,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
};

export type Theme = typeof defaultTheme;
