'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n'], ['\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents2.default.div(_templateObject, function (props) {
    return props.flex ? 'display: ' + props.flex : undefined;
}, function (props) {
    return props.flexDirection ? 'flex-direction: ' + props.flexDirection : undefined;
}, function (props) {
    return props.flexWrap ? 'flex-wrap: ' + props.flexWrap : undefined;
}, function (props) {
    return props.flexFlow ? 'flex-flow: ' + props.flexFlow : undefined;
}, function (props) {
    return props.justifyContent ? 'justify-content: ' + props.justifyContent : undefined;
}, function (props) {
    return props.alignItems ? 'align-items: ' + props.alignItems : undefined;
}, function (props) {
    return props.alignContent ? 'align-content: ' + props.alignContent : undefined;
}, function (props) {
    return props.bgColor ? 'background-color: ' + (props.theme.color[props.bgColor] || props.bgColor) : undefined;
}, function (props) {
    return props.w ? 'width: ' + (props.theme.scale[props.w] || props.w) : undefined;
}, function (props) {
    return props.h ? 'height: ' + (props.theme.scale[props.h] || props.h) : undefined;
});

exports.default = Box;