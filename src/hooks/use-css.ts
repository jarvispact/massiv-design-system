import { css as _css, CSSInterpolation } from '@emotion/css';
import { Theme } from '../theme/default-theme';
import { useTheme } from '../theme/theme-provider';
import { buildCssObj } from '../utils/build-css-obj';
import { SystemDefinitionObj, SystemObj, systemDefinitions } from '../system/system';

export const useCSS = <T extends Theme>() => {
    const { theme } = useTheme<T>();
    const css = (obj: SystemObj<T>) => _css(buildCssObj<T>(theme, systemDefinitions as SystemDefinitionObj<Theme>, obj) as CSSInterpolation);
    return { css, theme };
};
