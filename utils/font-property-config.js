import { arrayOfStringsOrString } from './prop-types';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'font-size',
        componentProperty: 'scale',
        scopedProperty: 'massivFontSize',
        themeProperty: 'fonts.scales',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'color',
        componentProperty: 'color',
        scopedProperty: 'massivColor',
        themeProperty: 'colors',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'letter-spacing',
        componentProperty: 'letterSpacing',
        scopedProperty: 'massivLetterSpacing',
        themeProperty: 'fonts.letterSpacings',
        propertyType,
        defaultProperty,
    },
];
