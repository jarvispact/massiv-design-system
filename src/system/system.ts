import { Theme } from '../theme/default-theme';
import { CustomPaddingSystemObj, paddingSystemDef, PaddingSystemObj } from '../system/padding';
import { CustomMarginSystemObj, marginSystemDef, MarginSystemObj } from '../system/margin';
import { CustomTypographySystemObj, typographySystemDef, TypographySystemObj } from '../system/typography';
import { ColorSystemObj, colorSystemDef, CustomColorSystemObj } from './color';
import { BorderSystemObj, borderSystemDef, CustomBorderSystemObj } from './border';
import { FlexSystemObj, flexSystemDef } from './flex';
import { GridSystemObj, gridSystemDef, CustomGridSystemObj } from './grid';
import { WidthSystemObj, widthSystemDef, CustomWidthSystemObj } from './width';
import { HeightSystemObj, heightSystemDef, CustomHeightSystemObj } from './height';
import { MiscSystemObj, miscSystemDef, CustomMiscSystemObj } from './misc';
import { AnimationSystemObj, animationSystemDef } from './animation';
import { TransitionSystemObj, transitionSystemDef } from './transition';
import { CSSProperties } from 'react';
import { objectKeys } from '../utils/object-keys';

export const allSystemDefinitions = {
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
    ...animationSystemDef,
    ...transitionSystemDef,
};

type SystemObject<T extends Theme> = PaddingSystemObj<T> &
    MarginSystemObj<T> &
    TypographySystemObj<T> &
    ColorSystemObj<T> &
    BorderSystemObj<T> &
    FlexSystemObj &
    GridSystemObj<T> &
    WidthSystemObj<T> &
    HeightSystemObj<T> &
    MiscSystemObj<T> &
    AnimationSystemObj &
    TransitionSystemObj;

export type CustomSelectorSystemObject<T extends Theme> = CustomPaddingSystemObj<T> &
    CustomMarginSystemObj<T> &
    CustomTypographySystemObj<T> &
    CustomColorSystemObj<T> &
    CustomBorderSystemObj<T> &
    FlexSystemObj &
    CustomGridSystemObj<T> &
    CustomWidthSystemObj<T> &
    CustomHeightSystemObj<T> &
    CustomMiscSystemObj<T> &
    AnimationSystemObj &
    TransitionSystemObj;

export type SystemObj<T extends Theme> = { customSelectors?: Record<string, CustomSelectorSystemObject<T>> } & SystemObject<T>;

export type SystemDefinition<T extends Theme> = {
    themeScope: keyof T | null;
    getCSS: (value: string) => CSSProperties;
};

export type SystemDefinitionObj<T extends Theme, K extends string> = Record<K, SystemDefinition<T>>;
