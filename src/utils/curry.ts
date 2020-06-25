/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const curry = (f: Function, ...args: any[]) =>
    args.length >= f.length ? f(...args) : (...next: any[]) => curry(f.bind(f, ...args), ...next);