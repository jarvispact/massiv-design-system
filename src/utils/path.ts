/* eslint-disable @typescript-eslint/ban-ts-comment */

import { curry } from './curry';
import { isNil } from './is-nil';

type GenericObject = { [key: string]: unknown };

// @ts-ignore
const reducer = (accum, pathKey) => {
    if (isNil(accum)) return undefined;
    return !isNil(accum[pathKey]) ? accum[pathKey] : undefined;
};

const pathImpl = (path: string[], obj: GenericObject = {}) => path.reduce(reducer, obj);

export const path = curry(pathImpl);
