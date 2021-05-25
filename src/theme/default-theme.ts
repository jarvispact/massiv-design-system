import { useCss } from '../hooks/use-css';
import { HeadingVariant, TextVariant } from '../system/variant';

const breakpoint = {
    s: '640px',
    m: '768px',
    l: '1024px',
    xl: '1280px',
    xxl: '1600px',
    xxxl: '1920px',
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

const spacing = {
    px: '1px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
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
    xxs: '100',
    xs: '200',
    s: '300',
    m: '400',
    l: '500',
    xl: '600',
    '2xl': '700',
    '3xl': '800',
    '4xl': '900',
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
    xs: '-0.05em',
    s: '-0.025em',
    m: '0',
    l: '0.025em',
    xl: '0.05em',
    xxl: '0.1em',
};

const radii = {
    s: '2px',
    m: '4px',
    l: '6px',
    xl: '8px',
    circle: '9999px',
};

const shadow = {
    s: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    m: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    l: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

const zIndex = {
    '0': 0,
    '10': 0,
    '20': 0,
    '30': 0,
    '40': 0,
    '50': 0,
};

const components = {
    Heading: (variant?: HeadingVariant) => {
        const { css } = useCss();
        switch (variant) {
            case 'h1':
                return css({ fontFamily: 'serif', fontSize: { value: '3xl', m: '4xl' } });
            case 'h2':
                return css({ fontFamily: 'serif', fontSize: { value: '2xl', m: '3xl' } });
            case 'h3':
                return css({ fontFamily: 'serif', fontSize: { value: 'xl', m: '2xl' } });
            case 'h4':
                return css({ fontFamily: 'serif', fontSize: { value: 'l', m: 'xl' } });
            case 'h5':
                return css({ fontFamily: 'serif', fontSize: { value: 'm', m: 'l' } });
            case 'h6':
                return css({ fontFamily: 'serif', fontSize: { value: 'm', m: 'm' } });
            default:
                return css({ fontFamily: 'serif' });
        }
    },
    Text: (variant?: TextVariant) => {
        const { css } = useCss();
        switch (variant) {
            case 'bold':
                return css({ fontFamily: 'sans', fontSize: 'm', fontWeight: 'l' });
            case 'body1':
                return css({ fontFamily: 'sans', fontSize: 'm', fontWeight: 'm' });
            case 'body2':
                return css({ fontFamily: 'sans', fontSize: 'm', fontWeight: 's' });
            case 'body3':
                return css({ fontFamily: 'sans', fontSize: 's', fontWeight: 's' });
            case 'body4':
                return css({ fontFamily: 'sans', fontSize: 's', fontWeight: 'xs' });
            case 'body5':
                return css({ fontFamily: 'sans', fontSize: 'xs', fontWeight: 'xs' });
            default:
                return css({ fontFamily: 'sans' });
        }
    },
};

export const defaultTheme = {
    breakpoint,
    color,
    spacing,
    width: spacing,
    height: spacing,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    radii,
    shadow,
    zIndex,
    components,
};

export type Theme = typeof defaultTheme;
export type ThemeScope = keyof Theme;
