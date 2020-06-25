import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type PaddingProps = {
    padding?: ResponsiveProp;
    p?: ResponsiveProp;
    paddingTop?: ResponsiveProp;
    pt?: ResponsiveProp;
    paddingLeft?: ResponsiveProp;
    pl?: ResponsiveProp;
    paddingBottom?: ResponsiveProp;
    pb?: ResponsiveProp;
    paddingRight?: ResponsiveProp;
    pr?: ResponsiveProp;
};

export const paddingConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'padding',
        componentProps: ['padding', 'p'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'padding-top',
        componentProps: ['paddingTop', 'pt'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'padding-left',
        componentProps: ['paddingLeft', 'pl'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'padding-bottom',
        componentProps: ['paddingBottom', 'pb'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'padding-right',
        componentProps: ['paddingRight', 'pr'],
        themeScope: 'spacing',
    },
];
