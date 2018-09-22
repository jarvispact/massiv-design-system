'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    border-style: none;\n    border-radius: 2px\n    &:focus {\n        outline: 0;\n    }\n    cursor: ', ';\n    opacity: ', ';\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    background-color: ', ';\n    width: ', ';\n    height: ', ';\n    padding: ', ';\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    ', ';\n'], ['\n    border-style: none;\n    border-radius: 2px\n    &:focus {\n        outline: 0;\n    }\n    cursor: ', ';\n    opacity: ', ';\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    background-color: ', ';\n    width: ', ';\n    height: ', ';\n    padding: ', ';\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents2.default.input(_templateObject, function (props) {
    return props.disabled && 'not-allowed';
}, function (props) {
    return props.disabled && '0.5';
}, function (props) {
    return props.theme.color[props.fontColor] || props.fontColor;
}, function (props) {
    return props.theme.settings.fonts.input;
}, function (props) {
    return props.theme.fontScale[props.fontScale] || props.fontScale;
}, function (props) {
    return props.theme.color[props.bgColor] || props.bgColor;
}, function (props) {
    return props.w;
}, function (props) {
    return props.h;
}, function (props) {
    return props.theme.spacing[props.p] || props.p;
}, function (props) {
    return props.theme.spacing[props.pt] || props.pt;
}, function (props) {
    return props.theme.spacing[props.pb] || props.pb;
}, function (props) {
    return props.theme.spacing[props.pl] || props.pl;
}, function (props) {
    return props.theme.spacing[props.pr] || props.pr;
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledInput;