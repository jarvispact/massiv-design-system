import { arrayOfStringsOrString } from './prop-types';

const themeProperty = 'shadows';
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'box-shadow',
        componentProperty: 'boxShadow',
        scopedProperty: 'massivBoxShadow',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];
