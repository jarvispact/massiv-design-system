import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type WidthProps = {
    width?: ResponsiveProp;
    w?: ResponsiveProp;
    minWidth?: ResponsiveProp;
    minW?: ResponsiveProp;
    maxWidth?: ResponsiveProp;
    maxW?: ResponsiveProp;
};

export const widthConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'width',
        componentProps: ['width', 'w'],
        themeScope: 'width',
    },
    {
        cssProperty: 'min-width',
        componentProps: ['minWidth', 'minW'],
        themeScope: 'width',
    },
    {
        cssProperty: 'max-width',
        componentProps: ['maxWidth', 'maxW'],
        themeScope: 'width',
    },
];
