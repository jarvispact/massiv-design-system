import { arrayOfStringsOrString } from './prop-types';

const themeProperty = 'widths';
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'width',
        componentProperty: 'width',
        scopedProperty: 'massivWidth',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'min-width',
        componentProperty: 'minWidth',
        scopedProperty: 'massivMinWidth',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'max-width',
        componentProperty: 'maxWidth',
        scopedProperty: 'massivMaxWidth',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];
