/* eslint-disable @typescript-eslint/ban-ts-comment */

import { curry } from './curry';

type GenericObject = { [key: string]: unknown };

const omitImpl = (propertyList: string[], obj: GenericObject) => {
    const keys = Object.keys(obj);
    return keys.reduce((accum, key) => {
        // @ts-ignore
        if (!propertyList.includes(key)) accum[key] = obj[key];
        return accum;
    }, {});
};

export const omit = curry(omitImpl);
