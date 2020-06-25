import * as styledComponents from 'styled-components';
import { Theme } from './default-theme';
declare const styled: styledComponents.ThemedStyledInterface<Theme>, css: styledComponents.ThemedCssFunction<Theme>, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, Theme>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, Theme>>[]) => styledComponents.GlobalStyleComponent<P, Theme>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes;
export { styled, css, createGlobalStyle, keyframes };
