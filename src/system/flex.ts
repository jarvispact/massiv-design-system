import { CSSProperties } from 'react';

export const flexSystemDef = {
    flexDirection: { themeScope: null, getCSS: (v: string) => ({ flexDirection: v }) },
    flexWrap: { themeScope: null, getCSS: (v: string) => ({ flexWrap: v }) },
    flexFlow: { themeScope: null, getCSS: (v: string) => ({ flexFlow: v }) },
    justifyContent: { themeScope: null, getCSS: (v: string) => ({ justifyContent: v }) },
    alignItems: { themeScope: null, getCSS: (v: string) => ({ alignItems: v }) },
    alignContent: { themeScope: null, getCSS: (v: string) => ({ alignContent: v }) },
    flexGrow: { themeScope: null, getCSS: (v: string) => ({ flexGrow: v }) },
    flexShrink: { themeScope: null, getCSS: (v: string) => ({ flexShrink: v }) },
    flexBasis: { themeScope: null, getCSS: (v: string) => ({ flexBasis: v }) },
    flex: { themeScope: null, getCSS: (v: string) => ({ flex: v }) },
    alignSelf: { themeScope: null, getCSS: (v: string) => ({ alignSelf: v }) },
};

export type FlexSystemObj = Partial<{
    flexDirection: CSSProperties['flexDirection'];
    flexWrap: CSSProperties['flexWrap'];
    flexFlow: CSSProperties['flexFlow'];
    justifyContent: CSSProperties['justifyContent'];
    alignItems: CSSProperties['alignItems'];
    alignContent: CSSProperties['alignContent'];
    flexGrow: CSSProperties['flexGrow'];
    flexShrink: CSSProperties['flexShrink'];
    flexBasis: CSSProperties['flexBasis'];
    flex: CSSProperties['flex'];
    alignSelf: CSSProperties['alignSelf'];
}>;
