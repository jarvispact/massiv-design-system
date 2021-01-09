import React from 'react';
import { Theme } from '../theme/default-theme';
import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveThemeProp } from '../utils/types';
import { boxConfig, BoxProps, createBox } from './box';

type Props = BoxProps<Theme, HTMLImageElement> & {
    cssWidth?: ResponsiveThemeProp<Theme, 'width'>;
    cssHeight?: ResponsiveThemeProp<Theme, 'height'>;
};

const imageConfig: CssPropertyConfig[] = [
    {
        cssProperty: 'width',
        componentProps: ['cssWidth'],
        themeScope: 'width',
    },
    {
        cssProperty: 'height',
        componentProps: ['cssHeight'],
        themeScope: 'height',
    },
];

const systemConfig = [...boxConfig, ...imageConfig];

const ImageBox = createBox({ forwardPropertyBlacklist: ['color', 'spacing', 'display', 'fontFamily', 'fontSize'], systemConfig });

export const Image: React.FC<Props> = (props) => <ImageBox as="img" {...props} />;
