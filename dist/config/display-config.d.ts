import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';
export declare type DisplayProps = {
    display?: ResponsiveProp;
    clipPath?: ResponsiveProp;
    listStyle?: ResponsiveProp;
    textDecoration?: ResponsiveProp;
    resize?: ResponsiveProp;
};
export declare const displayConfig: CssPropertyConfig[];