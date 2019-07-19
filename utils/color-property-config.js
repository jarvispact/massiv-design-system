import { arrayOfStringsOrString } from './prop-types';

const themeProperty = 'colors';
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'color',
        componentProperty: 'color',
        scopedProperty: 'massivColor',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'background-color',
        componentProperty: 'bg',
        scopedProperty: 'massivBg',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];
