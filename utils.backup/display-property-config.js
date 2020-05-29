import { arrayOfStringsOrString } from './prop-types';

const themeProperty = 'display';
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'display',
        componentProperty: 'display',
        scopedProperty: 'massivDisplay',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'clip-path',
        componentProperty: 'clipPath',
        scopedProperty: 'massivClipPath',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'list-style',
        componentProperty: 'listStyle',
        scopedProperty: 'massivListStyle',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'text-decoration',
        componentProperty: 'textDecoration',
        scopedProperty: 'massivTextDecoration',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];
