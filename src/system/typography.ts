import { Theme } from '../default-theme';
import { ResponsiveThemeProp } from '../utils/types';
import { SystemConfig } from './system';

export const textSystemConfig: SystemConfig[] = [
    {
        cssProp: 'fontFamily',
        componentProp: 'fontFamily',
        themeScope: 'fontFamily',
    },
    {
        cssProp: 'fontSize',
        componentProp: 'fontSize',
        themeScope: 'fontSize',
    },
    {
        cssProp: 'fontWeight',
        componentProp: 'fontWeight',
        themeScope: 'fontWeight',
    },
    {
        cssProp: 'lineHeight',
        componentProp: 'lineHeight',
        themeScope: 'lineHeight',
    },
    {
        cssProp: 'letterSpacing',
        componentProp: 'letterSpacing',
        themeScope: 'letterSpacing',
    },
];

export type TextSystemProps<T extends Theme> = {
    fontFamily?: ResponsiveThemeProp<T, 'fontFamily'>;
    fontSize?: ResponsiveThemeProp<T, 'fontSize'>;
    fontWeight?: ResponsiveThemeProp<T, 'fontWeight'>;
    lineHeight?: ResponsiveThemeProp<T, 'lineHeight'>;
    letterSpacing?: ResponsiveThemeProp<T, 'letterSpacing'>;
};
