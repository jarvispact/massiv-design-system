import { ThemeScope, Theme } from '../theme';
export declare type CssPropertyConfig = {
    cssProperty: string;
    componentProps: string[];
    themeScope: ThemeScope | null;
};
export declare const buildCss: <PropsWithTheme extends {
    theme: Theme;
}>(propertyConfigList: CssPropertyConfig[]) => (props: PropsWithTheme) => string | undefined;
