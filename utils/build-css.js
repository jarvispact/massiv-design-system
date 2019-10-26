import { css } from 'styled-components';
import path from './path';

const addValuesToList = (list, props) => list.map(configObj => ({
    ...configObj,
    values: Array.isArray(props[configObj.scopedProperty])
        ? props[configObj.scopedProperty]
        : [props[configObj.scopedProperty]],
}));

const hasNoMediaQueries = list => list.every(configObj => configObj.values.length < 2);

const getValue = (configObj, valueIndex, props) => {
    const { themeProperty, values } = configObj;
    const themePropertyPath = themeProperty ? themeProperty.split('.') : [];
    const { theme } = props;
    const value = values[valueIndex];

    const themeSection = path(themePropertyPath, theme) || {};
    return themeProperty && themeSection[value] ? themeSection[value] : value;
};

const getMediaQueryForBreakpoint = (breakpoint, cssArray) => {
    const mediaQuery = css`
        @media screen and (min-width: ${breakpoint}) {
            ${cssArray.join('\n')}
        }
    `;
    return mediaQuery.join('');
};

export default (propertyConfigList) => (props) => {
    const listWithValues = addValuesToList(propertyConfigList, props);
    const cssArray = [];

    listWithValues.forEach((configObj) => {
        const value = getValue(configObj, 0, props) || configObj.defaultProperty;
        if (value && configObj.cssProperty) cssArray.push(`${configObj.cssProperty}: ${value};`);
    });

    if (hasNoMediaQueries(listWithValues)) return cssArray.length > 0 ? cssArray.join('\n') : '';

    const { breakpoints } = props.theme;
    breakpoints.forEach((breakpoint, breakpointIndex) => {
        const cssArrayForMediaQueryBlock = [];

        listWithValues.forEach((configObj) => {
            const valueIndex = breakpointIndex + 1;
            if (configObj.values[valueIndex]) {
                const value = getValue(configObj, valueIndex, props) || configObj.defaultProperty;
                if (value && configObj.cssProperty) cssArrayForMediaQueryBlock.push(`${configObj.cssProperty}: ${value};`);
            }
        });

        if (cssArrayForMediaQueryBlock.length > 0) {
            cssArray.push(getMediaQueryForBreakpoint(breakpoint, cssArrayForMediaQueryBlock));
        }
    });

    return cssArray.length > 0 ? cssArray.join('\n') : undefined;
};
