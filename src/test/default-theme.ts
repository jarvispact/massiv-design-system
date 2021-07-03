import { objectKeys } from '../utils/object-keys';

export type Theme = {
    breakpoint: unknown;
    color: unknown;
    spacing: unknown;
    width: unknown;
    height: unknown;
    fontFamily: unknown;
    fontSize: unknown;
    fontWeight: unknown;
    radii: unknown;
    boxShadow: unknown;
    zIndex: unknown;
};

const camelCaseToKebapCase = (str: string) =>
    str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());

const reduceToCssVariable = (scope: keyof Theme, scopedValues: Record<string, string>) =>
    objectKeys(scopedValues).reduce((accum, key) => {
        accum[key] = `var(--${camelCaseToKebapCase(scope)}-${camelCaseToKebapCase(key)})`;
        return accum;
    }, {} as Record<string, string>);

const reduceToCssVariableDefinition = (scope: keyof Theme, scopedValues: Record<string, string>) =>
    objectKeys(scopedValues).reduce((accum, key) => {
        accum[`--${camelCaseToKebapCase(scope)}-${camelCaseToKebapCase(key)}`] = scopedValues[key];
        return accum;
    }, {} as Record<string, string>);

export const createTheme = <S extends { [x: string]: any }>(scopes: Partial<S> = {}) => {
    const vars = {
        breakpoint: (scopes.breakpoint || {}) as Record<string, string>,
        color: reduceToCssVariable('color', scopes.color || {}),
        spacing: reduceToCssVariable('spacing', scopes.spacing || {}),
        width: reduceToCssVariable('width', scopes.width || {}),
        height: reduceToCssVariable('height', scopes.height || {}),
        fontFamily: reduceToCssVariable('fontFamily', scopes.fontFamily || {}),
        fontSize: reduceToCssVariable('fontSize', scopes.fontSize || {}),
        fontWeight: reduceToCssVariable('fontWeight', scopes.fontWeight || {}),
        radii: reduceToCssVariable('radii', scopes.radii || {}),
        boxShadow: reduceToCssVariable('boxShadow', scopes.boxShadow || {}),
        zIndex: reduceToCssVariable('zIndex', scopes.zIndex || {}),
    };

    const values = {
        ...reduceToCssVariableDefinition('color', scopes.color || {}),
        ...reduceToCssVariableDefinition('spacing', scopes.spacing || {}),
        ...reduceToCssVariableDefinition('width', scopes.width || {}),
        ...reduceToCssVariableDefinition('height', scopes.height || {}),
        ...reduceToCssVariableDefinition('fontFamily', scopes.fontFamily || {}),
        ...reduceToCssVariableDefinition('fontSize', scopes.fontSize || {}),
        ...reduceToCssVariableDefinition('fontWeight', scopes.fontWeight || {}),
        ...reduceToCssVariableDefinition('radii', scopes.radii || {}),
        ...reduceToCssVariableDefinition('boxShadow', scopes.boxShadow || {}),
        ...reduceToCssVariableDefinition('zIndex', scopes.zIndex || {}),
    };

    return [vars, values] as any as [{ [Key in keyof Theme]: S[Key] }, Record<string, string>];
};

export const createThemeVariant = <S extends { [K in keyof Theme]: S[K] }>(
    contract: S,
    scopes: Partial<{ [K in keyof S]: S[K] }>,
) => {
    const values = {
        ...reduceToCssVariableDefinition('color', scopes.color || {}),
        ...reduceToCssVariableDefinition('spacing', scopes.spacing || {}),
        ...reduceToCssVariableDefinition('width', scopes.width || {}),
        ...reduceToCssVariableDefinition('height', scopes.height || {}),
        ...reduceToCssVariableDefinition('fontFamily', scopes.fontFamily || {}),
        ...reduceToCssVariableDefinition('fontSize', scopes.fontSize || {}),
        ...reduceToCssVariableDefinition('fontWeight', scopes.fontWeight || {}),
        ...reduceToCssVariableDefinition('radii', scopes.radii || {}),
        ...reduceToCssVariableDefinition('boxShadow', scopes.boxShadow || {}),
        ...reduceToCssVariableDefinition('zIndex', scopes.zIndex || {}),
    };

    return values as Record<string, string>;
};
