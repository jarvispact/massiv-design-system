import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { paddingSystemDef, PaddingObj } from '../system/padding';
import { marginSystemDef, MarginObj } from '../system/margin';
import { typographySystemDef, TypographyObj } from '../system/typography';
import { ColorObj, colorSystemDef } from './color';
import { BorderObj, borderSystemDef } from './border';

type BreakPointKey<T extends Theme> = keyof T['breakpoint'];

export type CssValueObject<T extends Theme, V extends string> = Partial<{ [K in BreakPointKey<T>]: V }> & {
    value?: V;
    hover?: V;
    focus?: V;
    hocus?: V;
};

export type SystemDefinition<T extends Theme> = {
    themeScope: keyof T;
    getCSS: (value: string) => CSSProperties;
};

export type SystemDefinitionObj<T extends Theme> = Record<string, SystemDefinition<T>>;

export const systemDefinitions = {
    ...paddingSystemDef,
    ...marginSystemDef,
    ...typographySystemDef,
    ...colorSystemDef,
    ...borderSystemDef,
};

export type SystemObj<T extends Theme> = PaddingObj<T> | MarginObj<T> | TypographyObj<T> | ColorObj<T> | BorderObj<T>;
