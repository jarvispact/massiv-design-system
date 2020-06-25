import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';

export type BorderProps = {
    borderStyle?: ResponsiveProp;
    bs?: ResponsiveProp;
    borderWidth?: ResponsiveProp;
    bw?: ResponsiveProp;
    borderColor?: ResponsiveProp;
    bc?: ResponsiveProp;
    borderRadius?: ResponsiveProp;
    br?: ResponsiveProp;

    borderTopStyle?: ResponsiveProp;
    bts?: ResponsiveProp;
    borderTopWidth?: ResponsiveProp;
    btw?: ResponsiveProp;
    borderTopColor?: ResponsiveProp;
    btc?: ResponsiveProp;

    borderBottomStyle?: ResponsiveProp;
    bbs?: ResponsiveProp;
    borderBottomWidth?: ResponsiveProp;
    bbw?: ResponsiveProp;
    borderBottomColor?: ResponsiveProp;
    bbc?: ResponsiveProp;

    borderLeftStyle?: ResponsiveProp;
    bls?: ResponsiveProp;
    borderLeftWidth?: ResponsiveProp;
    blw?: ResponsiveProp;
    borderLeftColor?: ResponsiveProp;
    blc?: ResponsiveProp;

    borderRightStyle?: ResponsiveProp;
    brs?: ResponsiveProp;
    borderRightWidth?: ResponsiveProp;
    brw?: ResponsiveProp;
    borderRightColor?: ResponsiveProp;
    brc?: ResponsiveProp;

    borderTopLeftRadius?: ResponsiveProp;
    btlr?: ResponsiveProp;
    borderTopRightRadius?: ResponsiveProp;
    btrr?: ResponsiveProp;
    borderBottomLeftRadius?: ResponsiveProp;
    bblr?: ResponsiveProp;
    borderBottomRghtRadius?: ResponsiveProp;
    bbrr?: ResponsiveProp;
};

export const borderConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'border-style',
        componentProps: ['borderStyle', 'bs'],
        themeScope: null,
    },
    {
        cssProperty: 'border-width',
        componentProps: ['borderWidth', 'bw'],
        themeScope: 'width',
    },
    {
        cssProperty: 'border-color',
        componentProps: ['borderColor', 'bc'],
        themeScope: 'color',
    },
    {
        cssProperty: 'border-radius',
        componentProps: ['borderRadius', 'br'],
        themeScope: 'radii',
    },

    {
        cssProperty: 'border-top-style',
        componentProps: ['borderTopStyle', 'bts'],
        themeScope: null,
    },
    {
        cssProperty: 'border-top-width',
        componentProps: ['borderTopWidth', 'btw'],
        themeScope: 'width',
    },
    {
        cssProperty: 'border-top-color',
        componentProps: ['borderTopColor', 'btc'],
        themeScope: 'color',
    },

    {
        cssProperty: 'border-bottom-style',
        componentProps: ['borderBottomStyle', 'bbs'],
        themeScope: null,
    },
    {
        cssProperty: 'border-bottom-width',
        componentProps: ['borderBottomWidth', 'bbw'],
        themeScope: 'width',
    },
    {
        cssProperty: 'border-bottom-color',
        componentProps: ['borderBottomColor', 'bbc'],
        themeScope: 'color',
    },

    {
        cssProperty: 'border-left-style',
        componentProps: ['borderLeftStyle', 'bls'],
        themeScope: null,
    },
    {
        cssProperty: 'border-left-width',
        componentProps: ['borderLeftWidth', 'blw'],
        themeScope: 'width',
    },
    {
        cssProperty: 'border-left-color',
        componentProps: ['borderLeftColor', 'blc'],
        themeScope: 'color',
    },

    {
        cssProperty: 'border-right-style',
        componentProps: ['borderRightStyle', 'brs'],
        themeScope: null,
    },
    {
        cssProperty: 'border-right-width',
        componentProps: ['borderRightWidth', 'brw'],
        themeScope: 'width',
    },
    {
        cssProperty: 'border-right-color',
        componentProps: ['borderRightColor', 'brc'],
        themeScope: 'color',
    },

    {
        cssProperty: 'border-top-left-radius',
        componentProps: ['borderTopLeftRadius', 'btlr'],
        themeScope: 'radii',
    },
    {
        cssProperty: 'border-top-right-radius',
        componentProps: ['borderTopRightRadius', 'btrr'],
        themeScope: 'radii',
    },
    {
        cssProperty: 'border-bottom-left-radius',
        componentProps: ['borderBottomLeftRadius', 'bblr'],
        themeScope: 'radii',
    },
    {
        cssProperty: 'border-bottom-right-radius',
        componentProps: ['borderBottomRightRadius', 'bbrr'],
        themeScope: 'radii',
    },
];
