import { CssPropertyConfig } from '../utils/build-css';
import { ResponsiveProp } from '../types';
export declare type FlexProps = {
    flexDirection?: ResponsiveProp;
    flexWrap?: ResponsiveProp;
    flexFlow?: ResponsiveProp;
    justifyContent?: ResponsiveProp;
    alignItems?: ResponsiveProp;
    alignContent?: ResponsiveProp;
    flexOrder?: ResponsiveProp;
    flexGrow?: ResponsiveProp;
    flexShrink?: ResponsiveProp;
    flexBasis?: ResponsiveProp;
    flex?: ResponsiveProp;
    alignSelf?: ResponsiveProp;
};
export declare const flexConfig: CssPropertyConfig[];
