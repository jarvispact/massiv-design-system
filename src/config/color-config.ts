import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type ColorProps = {
    backgroundColor?: ResponsiveProp;
    bg?: ResponsiveProp;
    color?: ResponsiveProp;
    outlineColor?: ResponsiveProp;
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
    {
        cssProperty: 'outline-color',
        componentProps: ['outlineColor'],
        themeScope: 'color',
    },
];
