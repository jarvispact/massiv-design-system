import { Theme, ThemeScope } from '../theme/default-theme';
export declare type CssPropertyConfig = {
    cssProperty: string;
    componentProps: string[];
    themeScope: ThemeScope | null;
};
export declare const buildCss: <PropsWithTheme extends {
    theme: Theme;
}>(propertyConfigList: CssPropertyConfig[], propScope?: string | undefined) => (props: PropsWithTheme) => string | undefined;
