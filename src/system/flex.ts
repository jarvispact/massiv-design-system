import { Theme } from '../theme/default-theme';
import { CssProperty } from './system';

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

export type FlexObj<T extends Theme> = Partial<{
    flexDirection: CssProperty<T, 'flexDirection'>;
    flexWrap: CssProperty<T, 'flexWrap'>;
    flexFlow: CssProperty<T, 'flexFlow'>;
    justifyContent: CssProperty<T, 'justifyContent'>;
    alignItems: CssProperty<T, 'alignItems'>;
    alignContent: CssProperty<T, 'alignContent'>;
    flexGrow: CssProperty<T, 'flexGrow'>;
    flexShrink: CssProperty<T, 'flexShrink'>;
    flexBasis: CssProperty<T, 'flexBasis'>;
    flex: CssProperty<T, 'flex'>;
    alignSelf: CssProperty<T, 'alignSelf'>;
}>;
