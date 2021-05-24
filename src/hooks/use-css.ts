/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
import { css as _css, CSSInterpolation, cx, keyframes } from '@emotion/css';
import { Theme } from '../theme/default-theme';
import { useTheme } from '../theme/theme-provider';
import { buildCssObj } from '../utils/build-css-obj';
import { SystemDefinitionObj, SystemObj, allSystemDefinitions } from '../system/system';
import { objectKeys } from '../utils/object-keys';
import { LiteralUnion } from '../utils/types';

const commonPresetMap = {
    hover: '&:hover',
    focus: '&:hover',
};

type CommonPresetKey = keyof typeof commonPresetMap;

export const useCss = <T extends Theme>() => {
    const { theme } = useTheme<T>();

    const breakPointKeys = objectKeys(theme.breakpoint);
    type BreakpointKey = typeof breakPointKeys[number];
    type SelectorPreset = BreakpointKey | CommonPresetKey;

    const breakPointMap = breakPointKeys.reduce((accum, key) => {
        accum[key] = `@media(min-width: ${theme.breakpoint[key]})`;
        return accum;
    }, {} as Record<SelectorPreset, string>);

    const lookupMap = {...commonPresetMap, ...breakPointMap};

    // @ts-ignore
    const selector = (preset: LiteralUnion<SelectorPreset>) => `${lookupMap[preset] || preset}`;

    const css = (obj: SystemObj<T>) => _css(buildCssObj<T>(theme, allSystemDefinitions as SystemDefinitionObj<Theme, keyof SystemObj<T>>, obj) as CSSInterpolation);
    return { css, theme, selector, cx, keyframes };
};
