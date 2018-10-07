'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        box-sizing: border-box;\n        ', ';\n    '], ['\n        box-sizing: border-box;\n        ', ';\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n        box-sizing: border-box;\n        float: left;\n        width: ', '%;\n        padding: ', ';\n        ', ';\n        ', ';\n    '], ['\n        box-sizing: border-box;\n        float: left;\n        width: ', '%;\n        padding: ', ';\n        ', ';\n        ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n                        @media screen and (min-width: ', ') {\n                            ', ';\n                            ', ';\n                        }\n                    '], ['\n                        @media screen and (min-width: ', ') {\n                            ', ';\n                            ', ';\n                        }\n                    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable indent, no-multi-spaces, comma-spacing */


var mapRange = function mapRange(inMin, inMax, outMin, outMax) {
    return function (value) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    };
};
var mapGridToPercent = mapRange(0, 12, 0, 100);

var StyledGrid = {
    Row: _styledComponents2.default.div(_templateObject, function (props) {
        return props.styles && props.styles(props);
    }),
    Col: _styledComponents2.default.div(_templateObject2, function (props) {
        return mapGridToPercent(props.columns[0]);
    }, function (props) {
        var theme = props.theme;

        var gutter = Array.isArray(props.gutter) ? props.gutter : [props.gutter];
        return gutter[0] ? theme.spacing[gutter[0]] : gutter[0];
    }, function (props) {
        var breakpoints = props.theme.settings.breakpoints;

        var gutter = Array.isArray(props.gutter) ? props.gutter : [props.gutter];
        var columns = Array.isArray(props.columns) ? props.columns : [props.columns];
        var cssArray = [];
        breakpoints.forEach(function (breakpoint, breakpointIndex) {
            var propIndex = breakpointIndex + 1;
            if (gutter[propIndex] || columns[propIndex]) {
                var breakpointCss = (0, _styledComponents.css)(_templateObject3, breakpoints[breakpointIndex], gutter[propIndex] ? 'padding: ' + (props.theme.spacing[gutter[propIndex]] || gutter[propIndex]) : '', columns[propIndex] ? 'width: ' + mapGridToPercent(columns[propIndex]) + '%' : '');
                cssArray.push(breakpointCss.join(''));
            }
        });
        return cssArray.join('\n');
    }, function (props) {
        return props.styles && props.styles(props);
    })
};

exports.default = StyledGrid;