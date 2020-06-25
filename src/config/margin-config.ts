import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type MarginProps = {
    margin?: ResponsiveProp;
    m?: ResponsiveProp;
    marginTop?: ResponsiveProp;
    mt?: ResponsiveProp;
    marginLeft?: ResponsiveProp;
    ml?: ResponsiveProp;
    marginBottom?: ResponsiveProp;
    mb?: ResponsiveProp;
    marginRight?: ResponsiveProp;
    mr?: ResponsiveProp;
};

export const marginConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'margin',
        componentProps: ['margin', 'm'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'margin-top',
        componentProps: ['marginTop', 'mt'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'margin-left',
        componentProps: ['marginLeft', 'ml'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'margin-bottom',
        componentProps: ['marginBottom', 'mb'],
        themeScope: 'spacing',
    },
    {
        cssProperty: 'margin-right',
        componentProps: ['marginRight', 'mr'],
        themeScope: 'spacing',
    },
];
