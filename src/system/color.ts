import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';

export type ColorProps<T extends Theme> = {
    backgroundColor?: ResponsiveThemeProp<T, 'color'>;
    bg?: ResponsiveThemeProp<T, 'color'>;
    color?: ResponsiveThemeProp<T, 'color'>;
};

export const colorConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'background-color',
        componentProps: ['backgroundColor', 'bg'],
        themeScope: 'color',
    },
    {
        cssProperty: 'color',
        componentProps: ['color'],
        themeScope: 'color',
    },
];
