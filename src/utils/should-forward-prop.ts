import React from 'react';

const defaultPropertyBlacklist = ['color', 'width', 'height', 'spacing', 'display', 'fontFamily', 'fontSize'];

export const shouldForwardProp = (propertyBlackList: string[] = defaultPropertyBlacklist) => (
    prop: React.ReactText,
    defaultValidator: (p: React.ReactText) => boolean,
) => {
    return propertyBlackList.includes(prop as string) ? false : defaultValidator(prop);
};
