import { arrayOfStringsOrString } from './prop-types';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default ({ type } = {}) => [
    {
        cssProperty: 'font-size',
        componentProperty: 'scale',
        scopedProperty: 'massivFontSize',
        themeProperty: 'fonts.scales',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'font-weight',
        componentProperty: 'fontWeight',
        scopedProperty: 'massivFontWeight',
        themeProperty: `fonts.${type}.weights`,
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
    {
        cssProperty: 'text-overflow',
        componentProperty: 'textOverflow',
        scopedProperty: 'massivTextOverflow',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'white-space',
        componentProperty: 'whiteSpace',
        scopedProperty: 'massivWhiteSpace',
        themeProperty: 'fonts.whiteSpacings',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'text-align',
        componentProperty: 'textAlign',
        scopedProperty: 'massivTextAlign',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
];
