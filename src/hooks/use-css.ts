import { css as _css, CSSInterpolation } from '@emotion/css';
import { Theme } from '../theme/default-theme';
import { useTheme } from '../theme/theme-provider';
import { buildCssObj } from '../utils/build-css-obj';
import { paddingDefinitions } from '../system/padding';
import { marginDefinitions } from '../system/margin';
import { CssObj } from '../system/system';

const definitions = {
    ...paddingDefinitions,
    ...marginDefinitions,
};

type Key = keyof typeof definitions;

export const useCSS = <T extends Theme>() => {
    const { theme } = useTheme<T>();
    const css = (obj: CssObj<Key, T>) => _css(buildCssObj<T>(theme, definitions as Definitions<Theme>, obj) as CSSInterpolation);
    return { css, theme };
};
