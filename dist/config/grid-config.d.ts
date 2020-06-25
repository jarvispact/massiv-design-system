import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';
export declare type GridProps = {
    gridTemplateColumns?: ResponsiveProp;
    gridTemplateRows?: ResponsiveProp;
    gridTemplateAreas?: ResponsiveProp;
    columnGap?: ResponsiveProp;
    rowGap?: ResponsiveProp;
    gap?: ResponsiveProp;
    justifyItems?: ResponsiveProp;
    gridColumnStart?: ResponsiveProp;
    gridColumnEnd?: ResponsiveProp;
    gridRowStart?: ResponsiveProp;
    gridRowEnd?: ResponsiveProp;
    gridArea?: ResponsiveProp;
    justifySelf?: ResponsiveProp;
    placeSelf?: ResponsiveProp;
};
export declare const gridConfig: CssPropertyConfig[];
