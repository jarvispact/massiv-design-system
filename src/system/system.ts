import { Theme } from '../theme/default-theme';
import { paddingSystemDef, PaddingSystemObj } from '../system/padding';
import { marginSystemDef, MarginSystemObj } from '../system/margin';
import { typographySystemDef, TypographySystemObj } from '../system/typography';
import { ColorSystemObj, colorSystemDef } from './color';
import { BorderSystemObj, borderSystemDef } from './border';
import { FlexSystemObj, flexSystemDef } from './flex';
import { GridSystemObj, gridSystemDef } from './grid';
import { WidthSystemObj, widthSystemDef } from './width';
import { HeightSystemObj, heightSystemDef } from './height';
import { MiscSystemObj, miscSystemDef } from './misc';
import { AnimationSystemObj, animationSystemDef } from './animation';
import { TransitionSystemObj, transitionSystemDef } from './transition';
import { CSSProperties } from 'react';

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

export type NestedSystemObj<T extends Theme> = PaddingSystemObj<T> &
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

export type SystemObj<T extends Theme> = { [x: string]: NestedSystemObj<T> } | NestedSystemObj<T>;

// import { CSSProperties } from 'react';
// import { Theme } from '../theme/default-theme';
// import { paddingSystemDef, PaddingSystemObj } from '../system/padding';
// import { marginSystemDef, MarginSystemObj } from '../system/margin';
// import { typographySystemDef, TypographySystemObj } from '../system/typography';
// import { ColorSystemObj, colorSystemDef } from './color';
// import { BorderSystemObj, borderSystemDef } from './border';
// import { FlexSystemObj, flexSystemDef } from './flex';
// import { GridSystemObj, gridSystemDef } from './grid';
// import { WidthSystemObj, widthSystemDef } from './width';
// import { HeightSystemObj, heightSystemDef } from './height';
// import { MiscSystemObj, miscSystemDef } from './misc';
// import { LiteralUnion, UnpackThemeScope } from '../utils/types';
// import { AnimationSystemObj, animationSystemDef } from './animation';
// import { TransitionSystemObj, transitionSystemDef } from './transition';

// type BreakPointKey<T extends Theme> = keyof T['breakpoint'];

// export type CssValueObject<T extends Theme, V extends string | number> = { [x: string]: V } & Partial<{ [K in BreakPointKey<T>]: V }> & {
//         value?: V;
//         hover?: V;
//         focus?: V;
//         hocus?: V;
//     };

export type SystemDefinition<T extends Theme> = {
    themeScope: keyof T | null;
    getCSS: (value: string) => CSSProperties;
};

// export type ScopedThemeKeyOrStringValue<T extends Theme, S extends keyof T> =
//     | LiteralUnion<UnpackThemeScope<T, S>>
//     | CssValueObject<T, LiteralUnion<UnpackThemeScope<T, S>>>;

// type NotNil<T> = Exclude<T, null | undefined>;
// export type CssProperty<T extends Theme, K extends keyof CSSProperties> = NotNil<CSSProperties[K]> | CssValueObject<T, NotNil<CSSProperties[K]>>;

export type SystemDefinitionObj<T extends Theme, K extends string> = Record<K, SystemDefinition<T>>;

// export const systemDefinitions = {
//     ...paddingSystemDef,
//     ...marginSystemDef,
//     ...typographySystemDef,
//     ...colorSystemDef,
//     ...borderSystemDef,
//     ...flexSystemDef,
//     ...gridSystemDef,
//     ...widthSystemDef,
//     ...heightSystemDef,
//     ...miscSystemDef,
//     ...animationSystemDef,
//     ...transitionSystemDef,
// };

// // export type SystemObj<T extends Theme> = PaddingSystemObj<T> &
// //     MarginSystemObj<T> &
// //     TypographySystemObj<T> &
// //     ColorSystemObj<T> &
// //     BorderSystemObj<T> &
// //     FlexSystemObj<T> &
// //     GridSystemObj<T> &
// //     WidthSystemObj<T> &
// //     HeightSystemObj<T> &
// //     MiscSystemObj<T> &
// //     AnimationSystemObj<T> &
// //     TransitionSystemObj<T>;

// // export type ResponsiveThemedValue<T extends Theme, S extends keyof T> =
// //     | LiteralUnion<UnpackThemeScope<T, S>>
// //     | Array<LiteralUnion<UnpackThemeScope<T, S>>>
// //     | Partial<{ [K in BreakPointKey<T>]: LiteralUnion<UnpackThemeScope<T, S>> }>;

// export type AllSystemObj<T extends Theme> = PaddingSystemObj<T> &
//     MarginSystemObj<T> &
//     TypographySystemObj<T> &
//     ColorSystemObj<T> &
//     BorderSystemObj<T> &
//     FlexSystemObj<T> &
//     GridSystemObj<T> &
//     WidthSystemObj<T> &
//     HeightSystemObj<T> &
//     MiscSystemObj<T> &
//     AnimationSystemObj<T> &
//     TransitionSystemObj<T>;

// export type SystemObj<T extends Theme> = { [x: string]: AllSystemObj<T> } & AllSystemObj<T>;

// const test: SystemObj<Theme> = {
//     padding: 'l',
//     px: {},
//     '& > div': {
//         padding: '9xl',
//     },
// };
