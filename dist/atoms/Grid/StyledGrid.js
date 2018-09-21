'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        box-sizing: border-box;\n        ', ';\n    '], ['\n        box-sizing: border-box;\n        ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        box-sizing: border-box;\n        float: left;\n        width: ', '%;\n        padding: ', ';\n        ', ';\n        ', ';\n        ', ';\n        ', ';\n        ', ';\n        ', ';\n    '], ['\n        box-sizing: border-box;\n        float: left;\n        width: ', '%;\n        padding: ', ';\n        ', ';\n        ', ';\n        ', ';\n        ', ';\n        ', ';\n        ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n                    @media screen and (min-width: ', ') {\n                        width: ', '%;\n                    }\n                '], ['\n                    @media screen and (min-width: ', ') {\n                        width: ', '%;\n                    }\n                ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable indent */


var mapRange = function mapRange(inMin, inMax, outMin, outMax) {
    return function (value) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
};
var mapToPercent = mapRange(0, 12, 0, 100);

var StyledGrid = {
    Row: _styledComponents2.default.div(_templateObject, function (props) {
        return props.styles && props.styles(props);
    }),
    Col: _styledComponents2.default.div(_templateObject2, function () {
        return mapToPercent(12);
    }, function (props) {
        return props.theme.spacing[props.gutter] || props.gutter;
    }, function (props) {
        if (props.colS) {
            return (0, _styledComponents.css)(_templateObject3, props.theme.settings.screen.s, mapToPercent(props.colS));
        }
    }, function (props) {
        if (props.colM) {
            return (0, _styledComponents.css)(_templateObject3, props.theme.settings.screen.m, mapToPercent(props.colM));
        }
    }, function (props) {
        if (props.colL) {
            return (0, _styledComponents.css)(_templateObject3, props.theme.settings.screen.l, mapToPercent(props.colL));
        }
    }, function (props) {
        if (props.colXL) {
            return (0, _styledComponents.css)(_templateObject3, props.theme.settings.screen.xl, mapToPercent(props.colXL));
        }
    }, function (props) {
        if (props.colXXL) {
            return (0, _styledComponents.css)(_templateObject3, props.theme.settings.screen.xxl, mapToPercent(props.colXXL));
        }
    }, function (props) {
        return props.styles && props.styles(props);
    })
};

exports.default = StyledGrid;