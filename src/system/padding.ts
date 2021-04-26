import { Theme } from '../default-theme';
import { ResponsiveThemeProp } from '../utils/types';
import { SystemConfig } from './system';

export const paddingSystemConfig: SystemConfig[] = [
    {
        cssProp: 'padding',
        componentProp: 'p',
        themeScope: 'spacing',
    },
    {
        cssProp: 'padding-top',
        componentProp: 'pt',
        themeScope: 'spacing',
    },
    {
        cssProp: 'padding-left',
        componentProp: 'pl',
        themeScope: 'spacing',
    },
    {
        cssProp: 'padding-bottom',
        componentProp: 'pb',
        themeScope: 'spacing',
    },
    {
        cssProp: 'padding-right',
        componentProp: 'pr',
        themeScope: 'spacing',
    },
];

export type PaddingSystemProps<T extends Theme> = {
    p?: ResponsiveThemeProp<T, 'spacing'>;
    pt?: ResponsiveThemeProp<T, 'spacing'>;
    pl?: ResponsiveThemeProp<T, 'spacing'>;
    pb?: ResponsiveThemeProp<T, 'spacing'>;
    pr?: ResponsiveThemeProp<T, 'spacing'>;
};
