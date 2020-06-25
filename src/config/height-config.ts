import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type HeightProps = {
    height?: ResponsiveProp;
    h?: ResponsiveProp;
    minHeight?: ResponsiveProp;
    minH?: ResponsiveProp;
    maxHeight?: ResponsiveProp;
    maxH?: ResponsiveProp;
};

export const heightConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'height',
        componentProps: ['height', 'h'],
        themeScope: 'height',
    },
    {
        cssProperty: 'min-height',
        componentProps: ['minHeight', 'minH'],
        themeScope: 'height',
    },
    {
        cssProperty: 'max-height',
        componentProps: ['maxHeight', 'maxH'],
        themeScope: 'height',
    },
];
