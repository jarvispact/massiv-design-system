'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        @media screen and (min-width: ', ') {\n            ', '\n        }\n    '], ['\n        @media screen and (min-width: ', ') {\n            ', '\n        }\n    ']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var addValuesToList = function addValuesToList(list, props) {
    return list.map(function (configObj) {
        return Object.assign({}, configObj, { values: Array.isArray(props[configObj.reactProp]) ? props[configObj.reactProp] : [props[configObj.reactProp]] });
    });
}; // eslint-disable-line max-len

var hasNoMediaQueries = function hasNoMediaQueries(list) {
    return list.every(function (configObj) {
        return configObj.values.length < 2;
    });
};

var getValue = function getValue(configObj, valueIndex, props) {
    var themeProp = configObj.themeProp,
        values = configObj.values;
    var theme = props.theme;

    var value = values[valueIndex];
    return themeProp && theme[themeProp][value] ? theme[themeProp][value] : value;
};

var getMediaQueryForBreakpoint = function getMediaQueryForBreakpoint(breakpoint, cssArray) {
    var mediaQuery = (0, _styledComponents.css)(_templateObject, breakpoint, cssArray.join('\n'));
    return mediaQuery.join('');
};

exports.default = function (propertyConfigList) {
    return function (props) {
        var listWithValues = addValuesToList(propertyConfigList, props);
        var cssArray = [];

        listWithValues.forEach(function (configObj) {
            var value = getValue(configObj, 0, props);
            if (value) cssArray.push(configObj.cssProp + ': ' + value + ';');
        });

        if (hasNoMediaQueries(listWithValues)) return cssArray.length > 0 ? cssArray.join('\n') : '';

        var breakpoints = props.theme.settings.breakpoints;

        breakpoints.forEach(function (breakpoint, breakpointIndex) {
            var cssArrayForMediaQueryBlock = [];

            listWithValues.forEach(function (configObj) {
                var valueIndex = breakpointIndex + 1;
                if (configObj.values[valueIndex]) {
                    var value = getValue(configObj, valueIndex, props);
                    if (value) cssArrayForMediaQueryBlock.push(configObj.cssProp + ': ' + value + ';');
                }
            });

            if (cssArrayForMediaQueryBlock.length > 0) {
                cssArray.push(getMediaQueryForBreakpoint(breakpoint, cssArrayForMediaQueryBlock));
            }
        });

        return cssArray.length > 0 ? cssArray.join('\n') : undefined;
    };
};