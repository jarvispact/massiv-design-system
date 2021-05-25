import { Theme } from '../theme/default-theme';
import { CustomPaddingSystemObj, PaddingSystemObj } from '../system/padding';
import { CustomMarginSystemObj, MarginSystemObj } from '../system/margin';
import { CustomTypographySystemObj, TypographySystemObj } from '../system/typography';
import { ColorSystemObj, CustomColorSystemObj } from './color';
import { BorderSystemObj, CustomBorderSystemObj } from './border';
import { FlexSystemObj } from './flex';
import { GridSystemObj, CustomGridSystemObj } from './grid';
import { WidthSystemObj, CustomWidthSystemObj } from './width';
import { HeightSystemObj, CustomHeightSystemObj } from './height';
import { MiscSystemObj, CustomMiscSystemObj } from './misc';
import { AnimationSystemObj } from './animation';
import { TransitionSystemObj } from './transition';
import { CSSProperties } from 'react';
export declare const allSystemDefinitions: {
    transition: {
        themeScope: null;
        getCSS: (v: string) => {
            transition: string;
        };
    };
    transitionDelay: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionDelay: string;
        };
    };
    transitionDuration: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionDuration: string;
        };
    };
    transitionProperty: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionProperty: string;
        };
    };
    transitionTimingFunction: {
        themeScope: null;
        getCSS: (v: string) => {
            transitionTimingFunction: string;
        };
    };
    animation: {
        themeScope: null;
        getCSS: (v: string) => {
            animation: string;
        };
    };
    animationName: {
        themeScope: null;
        getCSS: (v: string) => {
            animationName: string;
        };
    };
    animationDuration: {
        themeScope: null;
        getCSS: (v: string) => {
            animationDuration: string;
        };
    };
    animationDelay: {
        themeScope: null;
        getCSS: (v: string) => {
            animationDelay: string;
        };
    };
    animationIterationCount: {
        themeScope: null;
        getCSS: (v: string) => {
            animationIterationCount: string;
        };
    };
    animationDirection: {
        themeScope: null;
        getCSS: (v: string) => {
            animationDirection: string;
        };
    };
    animationTimingFunction: {
        themeScope: null;
        getCSS: (v: string) => {
            animationTimingFunction: string;
        };
    };
    animationFillMode: {
        themeScope: null;
        getCSS: (v: string) => {
            animationFillMode: string;
        };
    };
    display: {
        themeScope: null;
        getCSS: (v: string) => {
            display: string;
        };
    };
    clipPath: {
        themeScope: null;
        getCSS: (v: string) => {
            clipPath: string;
        };
    };
    listStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            listStyle: string;
        };
    };
    textDecoration: {
        themeScope: null;
        getCSS: (v: string) => {
            textDecoration: string;
        };
    };
    resize: {
        themeScope: null;
        getCSS: (v: string) => {
            resize: string;
        };
    };
    position: {
        themeScope: null;
        getCSS: (v: string) => {
            position: string;
        };
    };
    top: {
        themeScope: null;
        getCSS: (v: string) => {
            top: string;
        };
    };
    left: {
        themeScope: null;
        getCSS: (v: string) => {
            left: string;
        };
    };
    bottom: {
        themeScope: null;
        getCSS: (v: string) => {
            bottom: string;
        };
    };
    right: {
        themeScope: null;
        getCSS: (v: string) => {
            right: string;
        };
    };
    zIndex: {
        themeScope: null;
        getCSS: (v: string) => {
            zIndex: string;
        };
    };
    boxShadow: {
        themeScope: string;
        getCSS: (v: string) => {
            boxShadow: string;
        };
    };
    outline: {
        themeScope: null;
        getCSS: (v: string) => {
            outline: string;
        };
    };
    outlineColor: {
        themeScope: string;
        getCSS: (v: string) => {
            outlineColor: string;
        };
    };
    overflow: {
        themeScope: string;
        getCSS: (v: string) => {
            overflow: string;
        };
    };
    overflowX: {
        themeScope: string;
        getCSS: (v: string) => {
            overflowX: string;
        };
    };
    overflowY: {
        themeScope: string;
        getCSS: (v: string) => {
            overflowY: string;
        };
    };
    height: {
        themeScope: string;
        getCSS: (v: string) => {
            height: string;
        };
    };
    h: {
        themeScope: string;
        getCSS: (v: string) => {
            height: string;
        };
    };
    minHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            minHeight: string;
        };
    };
    minH: {
        themeScope: string;
        getCSS: (v: string) => {
            minHeight: string;
        };
    };
    maxHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            maxHeight: string;
        };
    };
    maxH: {
        themeScope: string;
        getCSS: (v: string) => {
            maxHeight: string;
        };
    };
    width: {
        themeScope: string;
        getCSS: (v: string) => {
            width: string;
        };
    };
    w: {
        themeScope: string;
        getCSS: (v: string) => {
            width: string;
        };
    };
    minWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            minWidth: string;
        };
    };
    minW: {
        themeScope: string;
        getCSS: (v: string) => {
            minWidth: string;
        };
    };
    maxWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            maxWidth: string;
        };
    };
    maxW: {
        themeScope: string;
        getCSS: (v: string) => {
            maxWidth: string;
        };
    };
    gridTemplateColumns: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateColumns: string;
        };
    };
    gridTemplateRows: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateRows: string;
        };
    };
    gridTemplateAreas: {
        themeScope: null;
        getCSS: (v: string) => {
            gridTemplateAreas: string;
        };
    };
    columnGap: {
        themeScope: string;
        getCSS: (v: string) => {
            columnGap: string;
        };
    };
    rowGap: {
        themeScope: string;
        getCSS: (v: string) => {
            rowGap: string;
        };
    };
    gap: {
        themeScope: string;
        getCSS: (v: string) => {
            gap: string;
        };
    };
    justifyItems: {
        themeScope: null;
        getCSS: (v: string) => {
            justifyItems: string;
        };
    };
    gridColumnStart: {
        themeScope: null;
        getCSS: (v: string) => {
            gridColumnStart: string;
        };
    };
    gridColumnEnd: {
        themeScope: null;
        getCSS: (v: string) => {
            gridColumnEnd: string;
        };
    };
    gridRowStart: {
        themeScope: null;
        getCSS: (v: string) => {
            gridRowStart: string;
        };
    };
    gridRowEnd: {
        themeScope: null;
        getCSS: (v: string) => {
            gridRowEnd: string;
        };
    };
    gridArea: {
        themeScope: null;
        getCSS: (v: string) => {
            gridArea: string;
        };
    };
    justifySelf: {
        themeScope: null;
        getCSS: (v: string) => {
            justifySelf: string;
        };
    };
    placeSelf: {
        themeScope: null;
        getCSS: (v: string) => {
            placeSelf: string;
        };
    };
    flexDirection: {
        themeScope: null;
        getCSS: (v: string) => {
            flexDirection: string;
        };
    };
    flexWrap: {
        themeScope: null;
        getCSS: (v: string) => {
            flexWrap: string;
        };
    };
    flexFlow: {
        themeScope: null;
        getCSS: (v: string) => {
            flexFlow: string;
        };
    };
    justifyContent: {
        themeScope: null;
        getCSS: (v: string) => {
            justifyContent: string;
        };
    };
    alignItems: {
        themeScope: null;
        getCSS: (v: string) => {
            alignItems: string;
        };
    };
    alignContent: {
        themeScope: null;
        getCSS: (v: string) => {
            alignContent: string;
        };
    };
    flexGrow: {
        themeScope: null;
        getCSS: (v: string) => {
            flexGrow: string;
        };
    };
    flexShrink: {
        themeScope: null;
        getCSS: (v: string) => {
            flexShrink: string;
        };
    };
    flexBasis: {
        themeScope: null;
        getCSS: (v: string) => {
            flexBasis: string;
        };
    };
    flex: {
        themeScope: null;
        getCSS: (v: string) => {
            flex: string;
        };
    };
    alignSelf: {
        themeScope: null;
        getCSS: (v: string) => {
            alignSelf: string;
        };
    };
    borderStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderStyle: string;
        };
    };
    bs: {
        themeScope: null;
        getCSS: (v: string) => {
            borderStyle: string;
        };
    };
    borderWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderWidth: string;
        };
    };
    bw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderWidth: string;
        };
    };
    borderColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderColor: string;
        };
    };
    bc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderColor: string;
        };
    };
    borderRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRadius: string;
        };
    };
    br: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRadius: string;
        };
    };
    borderTopStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderTopStyle: string;
        };
    };
    bts: {
        themeScope: null;
        getCSS: (v: string) => {
            borderTopStyle: string;
        };
    };
    borderTopWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopWidth: string;
        };
    };
    btw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopWidth: string;
        };
    };
    borderTopColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopColor: string;
        };
    };
    btc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopColor: string;
        };
    };
    borderBottomStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderBottomStyle: string;
        };
    };
    bbs: {
        themeScope: null;
        getCSS: (v: string) => {
            borderBottomStyle: string;
        };
    };
    borderBottomWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomWidth: string;
        };
    };
    bbw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomWidth: string;
        };
    };
    borderBottomColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomColor: string;
        };
    };
    bbc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomColor: string;
        };
    };
    borderLeftStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderLeftStyle: string;
        };
    };
    bls: {
        themeScope: null;
        getCSS: (v: string) => {
            borderLeftStyle: string;
        };
    };
    borderLeftWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftWidth: string;
        };
    };
    blw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftWidth: string;
        };
    };
    borderLeftColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftColor: string;
        };
    };
    blc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderLeftColor: string;
        };
    };
    borderRightStyle: {
        themeScope: null;
        getCSS: (v: string) => {
            borderRightStyle: string;
        };
    };
    brs: {
        themeScope: null;
        getCSS: (v: string) => {
            borderRightStyle: string;
        };
    };
    borderRightWidth: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightWidth: string;
        };
    };
    brw: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightWidth: string;
        };
    };
    borderRightColor: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightColor: string;
        };
    };
    brc: {
        themeScope: string;
        getCSS: (v: string) => {
            borderRightColor: string;
        };
    };
    borderTopLeftRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopLeftRadius: string;
        };
    };
    btlr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopLeftRadius: string;
        };
    };
    borderTopRightRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopRightRadius: string;
        };
    };
    btrr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderTopRightRadius: string;
        };
    };
    borderBottomLeftRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomLeftRadius: string;
        };
    };
    bblr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomLeftRadius: string;
        };
    };
    borderBottomRghtRadius: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomRightRadius: string;
        };
    };
    bbrr: {
        themeScope: string;
        getCSS: (v: string) => {
            borderBottomRightRadius: string;
        };
    };
    backgroundColor: {
        themeScope: string;
        getCSS: (v: string) => {
            backgroundColor: string;
        };
    };
    bg: {
        themeScope: string;
        getCSS: (v: string) => {
            backgroundColor: string;
        };
    };
    color: {
        themeScope: string;
        getCSS: (v: string) => {
            color: string;
        };
    };
    fontFamily: {
        themeScope: string;
        getCSS: (v: string) => {
            fontFamily: string;
        };
    };
    fontSize: {
        themeScope: string;
        getCSS: (v: string) => {
            fontSize: string;
        };
    };
    fontWeight: {
        themeScope: string;
        getCSS: (v: string) => {
            fontWeight: string;
        };
    };
    lineHeight: {
        themeScope: string;
        getCSS: (v: string) => {
            lineHeight: string;
        };
    };
    letterSpacing: {
        themeScope: string;
        getCSS: (v: string) => {
            letterSpacing: string;
        };
    };
    textOverflow: {
        themeScope: null;
        getCSS: (v: string) => {
            textOverflow: string;
        };
    };
    whiteSpace: {
        themeScope: null;
        getCSS: (v: string) => {
            whiteSpace: string;
        };
    };
    verticalAlign: {
        themeScope: null;
        getCSS: (v: string) => {
            verticalAlign: string;
        };
    };
    textTransform: {
        themeScope: null;
        getCSS: (v: string) => {
            textTransform: string;
        };
    };
    margin: {
        themeScope: string;
        getCSS: (v: string) => {
            margin: string;
        };
    };
    m: {
        themeScope: string;
        getCSS: (v: string) => {
            margin: string;
        };
    };
    mt: {
        themeScope: string;
        getCSS: (v: string) => {
            marginTop: string;
        };
    };
    mr: {
        themeScope: string;
        getCSS: (v: string) => {
            marginRight: string;
        };
    };
    mb: {
        themeScope: string;
        getCSS: (v: string) => {
            marginBottom: string;
        };
    };
    ml: {
        themeScope: string;
        getCSS: (v: string) => {
            marginLeft: string;
        };
    };
    mx: {
        themeScope: string;
        getCSS: (v: string) => {
            marginLeft: string;
            marginRight: string;
        };
    };
    my: {
        themeScope: string;
        getCSS: (v: string) => {
            marginTop: string;
            marginBottom: string;
        };
    };
    padding: {
        themeScope: string;
        getCSS: (v: string) => {
            padding: string;
        };
    };
    p: {
        themeScope: string;
        getCSS: (v: string) => {
            padding: string;
        };
    };
    pt: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingTop: string;
        };
    };
    pr: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingRight: string;
        };
    };
    pb: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingBottom: string;
        };
    };
    pl: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingLeft: string;
        };
    };
    px: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingLeft: string;
            paddingRight: string;
        };
    };
    py: {
        themeScope: string;
        getCSS: (v: string) => {
            paddingTop: string;
            paddingBottom: string;
        };
    };
};
declare type SystemObject<T extends Theme> = PaddingSystemObj<T> & MarginSystemObj<T> & TypographySystemObj<T> & ColorSystemObj<T> & BorderSystemObj<T> & FlexSystemObj & GridSystemObj<T> & WidthSystemObj<T> & HeightSystemObj<T> & MiscSystemObj<T> & AnimationSystemObj & TransitionSystemObj;
export declare type CustomSelectorSystemObject<T extends Theme> = CustomPaddingSystemObj<T> & CustomMarginSystemObj<T> & CustomTypographySystemObj<T> & CustomColorSystemObj<T> & CustomBorderSystemObj<T> & FlexSystemObj & CustomGridSystemObj<T> & CustomWidthSystemObj<T> & CustomHeightSystemObj<T> & CustomMiscSystemObj<T> & AnimationSystemObj & TransitionSystemObj;
export declare type SystemObj<T extends Theme> = {
    customSelectors?: Record<string, CustomSelectorSystemObject<T>>;
} & SystemObject<T>;
export declare type SystemDefinition<T extends Theme> = {
    themeScope: keyof T | null;
    getCSS: (value: string) => CSSProperties;
};
export declare type SystemDefinitionObj<T extends Theme, K extends string> = Record<K, SystemDefinition<T>>;
export {};
