import { css } from 'styled-components';

const addValuesToList = (list, props) => list.map(configObj => Object.assign({}, configObj, { values: Array.isArray(props[configObj.reactProp]) ? props[configObj.reactProp] : [props[configObj.reactProp]] })); // eslint-disable-line max-len

const hasNoMediaQueries = list => list.every(configObj => configObj.values.length < 2);

const getValue = (configObj, valueIndex, props) => {
    const { themeProp, values } = configObj;
    const { theme } = props;
    const value = values[valueIndex];
    return themeProp && theme[themeProp][value] ? theme[themeProp][value] : value;
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
        const value = getValue(configObj, 0, props);
        if (value) cssArray.push(`${configObj.cssProp}: ${value};`);
    });

    if (hasNoMediaQueries(listWithValues)) return cssArray.length > 0 ? cssArray.join('\n') : undefined;

    const { breakpoints } = props.theme.settings;
    breakpoints.forEach((breakpoint, breakpointIndex) => {
        const cssArrayForMediaQueryBlock = [];

        listWithValues.forEach((configObj) => {
            const valueIndex = breakpointIndex + 1;
            if (configObj.values[valueIndex]) {
                const value = getValue(configObj, valueIndex, props);
                if (value) cssArrayForMediaQueryBlock.push(`${configObj.cssProp}: ${value};`);
            }
        });

        if (cssArrayForMediaQueryBlock.length > 0) {
            cssArray.push(getMediaQueryForBreakpoint(breakpoint, cssArrayForMediaQueryBlock));
        }
    });

    return cssArray.length > 0 ? cssArray.join('\n') : undefined;
};
