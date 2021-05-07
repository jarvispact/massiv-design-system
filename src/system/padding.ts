// import { CSSProperties } from 'react';
// import { Theme } from '../theme/default-theme';
// import { ResponsiveThemeProp } from '../utils/types';
// import { SystemConfig } from './system';

import { Theme } from '../theme/default-theme';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';

// type Definition<T extends Theme> = {
//     themeScope: keyof T;
//     getCSS: (value: string) => CSSProperties;
// };

// type Definitions<T extends Theme> = Record<string, Definition<T>>;

export const paddingDefinitions = {
    padding: { themeScope: 'spacing', getCSS: (v: string) => ({ padding: v }) },
    p: { themeScope: 'spacing', getCSS: (v: string) => ({ padding: v }) },
    px: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingLeft: v, paddingRight: v }) },
    py: { themeScope: 'spacing', getCSS: (v: string) => ({ paddingTop: v, paddingBottom: v }) },
};

export type PaddingDefinitions = typeof paddingDefinitions;
export type PaddingKey = keyof PaddingDefinitions;
export type PaddingValue<T extends Theme> = LiteralUnion<UnpackThemeScope<T, 'spacing'>>;

// export const paddingSystemConfig: SystemConfig[] = [
//     {
//         cssProp: 'padding',
//         componentProp: 'p',
//         themeScope: 'spacing',
//     },
//     {
//         cssProp: 'padding-top',
//         componentProp: 'pt',
//         themeScope: 'spacing',
//     },
//     {
//         cssProp: 'padding-left',
//         componentProp: 'pl',
//         themeScope: 'spacing',
//     },
//     {
//         cssProp: 'padding-bottom',
//         componentProp: 'pb',
//         themeScope: 'spacing',
//     },
//     {
//         cssProp: 'padding-right',
//         componentProp: 'pr',
//         themeScope: 'spacing',
//     },
// ];

// export type PaddingSystemProps<T extends Theme> = {
//     p?: ResponsiveThemeProp<T, 'spacing'>;
//     pt?: ResponsiveThemeProp<T, 'spacing'>;
//     pl?: ResponsiveThemeProp<T, 'spacing'>;
//     pb?: ResponsiveThemeProp<T, 'spacing'>;
//     pr?: ResponsiveThemeProp<T, 'spacing'>;
// };
