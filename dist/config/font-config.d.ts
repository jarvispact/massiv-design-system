import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';
export declare type FontProps = {
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
export declare const fontConfig: CssPropertyConfig[];
