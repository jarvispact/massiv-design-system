import { arrayOfStringsOrString } from './prop-types';

const themeProperty = 'spacing';
const propertyType = arrayOfStringsOrString;
const defaultProperty = undefined;

export default [
    {
        cssProperty: 'padding',
        componentProperty: 'p',
        scopedProperty: 'massivP',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'padding-top',
        componentProperty: 'pt',
        scopedProperty: 'massivPt',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'padding-left',
        componentProperty: 'pl',
        scopedProperty: 'massivPl',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'padding-bottom',
        componentProperty: 'pb',
        scopedProperty: 'massivPb',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'padding-right',
        componentProperty: 'pr',
        scopedProperty: 'massivPr',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'margin',
        componentProperty: 'm',
        scopedProperty: 'massivM',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'margin-top',
        componentProperty: 'mt',
        scopedProperty: 'massivMt',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'margin-left',
        componentProperty: 'ml',
        scopedProperty: 'massivMl',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'margin-bottom',
        componentProperty: 'mb',
        scopedProperty: 'massivMb',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    {
        cssProperty: 'margin-right',
        componentProperty: 'mr',
        scopedProperty: 'massivMr',
        themeProperty,
        propertyType,
        defaultProperty,
    },
    // used in layout components like stack or inline
    // to prevent that styled-components will write 'spacing' to the dom
    {
        componentProperty: 'spacing',
        scopedProperty: 'massivSpacing',
        themeProperty,
        propertyType,
        defaultProperty,
    },
];
