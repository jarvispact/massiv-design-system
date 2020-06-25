import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type FontProps = {
    fontFamily?: ResponsiveProp;
    fontSize?: ResponsiveProp;
    fontWeight?: ResponsiveProp;
    lineHeight?: ResponsiveProp;
    letterSpacing?: ResponsiveProp;
    textOverflow?: ResponsiveProp;
    textShadow?: ResponsiveProp;
    whiteSpace?: ResponsiveProp;
    textAlign?: ResponsiveProp;
    verticalAlign?: ResponsiveProp;
    textTransform?: ResponsiveProp;
};

export const fontConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'font-family',
        componentProps: ['fontFamily'],
        themeScope: 'fontFamily',
    },
    {
        cssProperty: 'font-size',
        componentProps: ['fontSize'],
        themeScope: 'fontSize',
    },
    {
        cssProperty: 'font-weight',
        componentProps: ['fontWeight'],
        themeScope: 'fontWeight',
    },
    {
        cssProperty: 'line-height',
        componentProps: ['lineHeight'],
        themeScope: 'lineHeight',
    },
    {
        cssProperty: 'letter-spacing',
        componentProps: ['letterSpacing'],
        themeScope: 'letterSpacing',
    },
    {
        cssProperty: 'text-overflow',
        componentProps: ['textOverflow'],
        themeScope: null,
    },
    {
        cssProperty: 'text-shadow',
        componentProps: ['textShadow'],
        themeScope: 'textShadow',
    },
    {
        cssProperty: 'white-space',
        componentProps: ['whiteSpace'],
        themeScope: null,
    },
    {
        cssProperty: 'text-align',
        componentProps: ['textAlign'],
        themeScope: null,
    },
    {
        cssProperty: 'vertical-align',
        componentProps: ['verticalAlign'],
        themeScope: null,
    },
    {
        cssProperty: 'text-transform',
        componentProps: ['textTransform'],
        themeScope: null,
    },
];
