'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    border-style: none;\n    border-radius: 2px;\n    &:focus {\n        outline: 0;\n    }\n    cursor: ', ';\n    opacity: ', ';\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    background-color: ', ';\n    width: ', ';\n    height: ', ';\n    min-width: ', ';\n    min-height: ', ';\n    max-width: ', ';\n    max-height: ', ';\n    padding: ', ';\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    margin: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n    margin-left: ', ';\n    margin-right: ', ';\n    ', ';\n'], ['\n    border-style: none;\n    border-radius: 2px;\n    &:focus {\n        outline: 0;\n    }\n    cursor: ', ';\n    opacity: ', ';\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    background-color: ', ';\n    width: ', ';\n    height: ', ';\n    min-width: ', ';\n    min-height: ', ';\n    max-width: ', ';\n    max-height: ', ';\n    padding: ', ';\n    padding-top: ', ';\n    padding-bottom: ', ';\n    padding-left: ', ';\n    padding-right: ', ';\n    margin: ', ';\n    margin-top: ', ';\n    margin-bottom: ', ';\n    margin-left: ', ';\n    margin-right: ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
    return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
    return props.disabled && '0.5';
}, function (props) {
    return props.theme.color[props.fontColor] || props.fontColor;
}, function (props) {
    return props.theme.settings.fonts.button;
}, function (props) {
    return props.theme.fontScale[props.fontScale] || props.fontScale;
}, function (props) {
    return props.theme.color[props.bgColor] || props.bgColor;
}, function (props) {
    return props.theme.spacing[props.w] || props.w;
}, function (props) {
    return props.theme.spacing[props.h] || props.h;
}, function (props) {
    return props.theme.spacing[props.minWidth] || props.minWidth;
}, function (props) {
    return props.theme.spacing[props.minHeight] || props.minHeight;
}, function (props) {
    return props.theme.spacing[props.maxWidth] || props.maxWidth;
}, function (props) {
    return props.theme.spacing[props.maxHeight] || props.maxHeight;
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
    return props.theme.spacing[props.m] || props.m;
}, function (props) {
    return props.theme.spacing[props.mt] || props.mt;
}, function (props) {
    return props.theme.spacing[props.mb] || props.mb;
}, function (props) {
    return props.theme.spacing[props.ml] || props.ml;
}, function (props) {
    return props.theme.spacing[props.mr] || props.mr;
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledButton;