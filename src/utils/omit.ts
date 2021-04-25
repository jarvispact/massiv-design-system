export const omit = (propertyList: string[], obj: Record<string, unknown>) => {
    const keys = Object.keys(obj);
    return keys.reduce((accum, key) => {
        if (!propertyList.includes(key)) accum[key] = obj[key];
        return accum;
    }, {} as Record<string, unknown>);
};
