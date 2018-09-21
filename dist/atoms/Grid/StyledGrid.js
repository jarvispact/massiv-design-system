'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        box-sizing: border-box;\n    '], ['\n        box-sizing: border-box;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        box-sizing: border-box;\n        float: left;\n        width: ', '%;\n        padding: ', ';\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n    '], ['\n        box-sizing: border-box;\n        float: left;\n        width: ', '%;\n        padding: ', ';\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n        @media screen and (min-width: ', ') {\n            width: ', '%;\n        }\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mapRange = function mapRange(inMin, inMax, outMin, outMax) {
    return function (value) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
};
var mapToPercent = mapRange(0, 12, 0, 100);

var StyledGrid = {
    Row: _styledComponents2.default.div(_templateObject),
    Col: _styledComponents2.default.div(_templateObject2, function () {
        return mapToPercent(12);
    }, function (props) {
        return props.theme.spacing[props.gutter] || props.gutter;
    }, function (props) {
        return props.theme.settings.screen.s;
    }, function (props) {
        return mapToPercent(props.colS);
    }, function (props) {
        return props.theme.settings.screen.m;
    }, function (props) {
        return mapToPercent(props.colM);
    }, function (props) {
        return props.theme.settings.screen.l;
    }, function (props) {
        return mapToPercent(props.colL);
    }, function (props) {
        return props.theme.settings.screen.xl;
    }, function (props) {
        return mapToPercent(props.colXL);
    }, function (props) {
        return props.theme.settings.screen.xxl;
    }, function (props) {
        return mapToPercent(props.colXXL);
    })
};

exports.default = StyledGrid;