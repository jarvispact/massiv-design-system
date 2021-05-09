import { CSSProperties } from 'react';
import { Theme } from '../theme/default-theme';
import { paddingSystemDef, PaddingObj } from '../system/padding';
import { marginSystemDef, MarginObj } from '../system/margin';
import { typographySystemDef, TypographyObj } from '../system/typography';
import { ColorObj, colorSystemDef } from './color';
import { BorderObj, borderSystemDef } from './border';
import { FlexObj, flexSystemDef } from './flex';
import { GridObj, gridSystemDef } from './grid';
import { WidthObj, widthSystemDef } from './width';
import { HeightObj, heightSystemDef } from './height';
import { MiscObj, miscSystemDef } from './misc';
import { LiteralUnion, UnpackThemeScope } from '../utils/types';

type BreakPointKey<T extends Theme> = keyof T['breakpoint'];

export type CssValueObject<T extends Theme, V extends string | number> = Partial<{ [K in BreakPointKey<T>]: V }> & {
    value?: V;
    hover?: V;
    focus?: V;
    hocus?: V;
};

export type SystemDefinition<T extends Theme> = {
    themeScope: keyof T | null;
    getCSS: (value: string) => CSSProperties;
};

export type ScopedThemeKeyOrStringValue<T extends Theme, S extends keyof T> =
    | LiteralUnion<UnpackThemeScope<T, S>>
    | CssValueObject<T, LiteralUnion<UnpackThemeScope<T, S>>>;

type NotNil<T> = Exclude<T, null | undefined>;
export type CssProperty<T extends Theme, K extends keyof CSSProperties> = NotNil<CSSProperties[K]> | CssValueObject<T, NotNil<CSSProperties[K]>>;

export type SystemDefinitionObj<T extends Theme> = Record<string, SystemDefinition<T>>;

export const systemDefinitions = {
    ...paddingSystemDef,
    ...marginSystemDef,
    ...typographySystemDef,
    ...colorSystemDef,
    ...borderSystemDef,
    ...flexSystemDef,
    ...gridSystemDef,
    ...widthSystemDef,
    ...heightSystemDef,
    ...miscSystemDef,
};

export type SystemObj<T extends Theme> = PaddingObj<T> &
    MarginObj<T> &
    TypographyObj<T> &
    ColorObj<T> &
    BorderObj<T> &
    FlexObj<T> &
    GridObj<T> &
    WidthObj<T> &
    HeightObj<T> &
    MiscObj<T>;
