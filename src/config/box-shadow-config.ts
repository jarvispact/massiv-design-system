import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type BoxShadowProps = {
    boxShadow?: ResponsiveProp;
};

export const boxShadowConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'box-shadow',
        componentProps: ['boxShadow'],
        themeScope: 'boxShadow',
    },
];
