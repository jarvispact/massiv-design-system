import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { Theme } from './theme/default-theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { default: styled, css, createGlobalStyle, keyframes } = styledComponents as ThemedStyledComponentsModule<Theme>;

export { styled, css, createGlobalStyle, keyframes };
