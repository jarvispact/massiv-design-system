import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp, ResponsiveThemeProp } from '../utils/types';

export type OutlineProps<T extends Theme> = {
    outline?: ResponsiveProp;
    outlineColor?: ResponsiveThemeProp<T, 'color'>;
};

export const colorConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'outline',
        componentProps: ['outline'],
        themeScope: null,
    },
    {
        cssProperty: 'outline-color',
        componentProps: ['outlineColor'],
        themeScope: 'color',
    },
];
