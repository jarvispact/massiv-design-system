import { arrayOfStringsOrString } from './prop-types';

const themeProperty = 'heights';
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'height',
        componentProperty: 'height',
        scopedProperty: 'massivHeight',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'min-height',
        componentProperty: 'minHeight',
        scopedProperty: 'massivMinHeight',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'max-height',
        componentProperty: 'maxHeight',
        scopedProperty: 'massivMaxHeight',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];
