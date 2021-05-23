/* eslint-disable prettier/prettier */
import { css as _css, CSSInterpolation } from '@emotion/css';
import { Theme } from '../theme/default-theme';
import { useTheme } from '../theme/theme-provider';
import { buildCssObj } from '../utils/build-css-obj';
import { SystemDefinitionObj, SystemObj, allSystemDefinitions } from '../system/system';

export const useCss = <T extends Theme>() => {
    const { theme } = useTheme<T>();
    const css = (obj: SystemObj<T>) => _css(buildCssObj<T>(theme, allSystemDefinitions as SystemDefinitionObj<Theme, keyof SystemObj<T>>, obj) as CSSInterpolation);
    return { css, theme };
};
