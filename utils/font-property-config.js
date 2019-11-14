import { arrayOfStringsOrString } from './prop-types';

const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'font-size',
        componentProperty: 'fontSize',
        scopedProperty: 'massivFontSize',
        themeProperty: 'fontSizes',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'line-height',
        componentProperty: 'lineHeight',
        scopedProperty: 'massivLineHeight',
        themeProperty: 'lineHeights',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'font-weight',
        componentProperty: 'fontWeight',
        scopedProperty: 'massivFontWeight',
        themeProperty: 'fontWeights',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'letter-spacing',
        componentProperty: 'letterSpacing',
        scopedProperty: 'massivLetterSpacing',
        themeProperty: 'letterSpacings',
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
        cssProperty: 'text-shadow',
        componentProperty: 'textShadow',
        scopedProperty: 'massivTextShadow',
        themeProperty: 'textShadows',
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'white-space',
        componentProperty: 'whiteSpace',
        scopedProperty: 'massivWhiteSpace',
        themeProperty: null,
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
    {
        cssProperty: 'vertical-align',
        componentProperty: 'verticalAlign',
        scopedProperty: 'massivVerticalAlign',
        themeProperty: null,
        propertyType,
        defaultProperty,
    },
];
