'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0.5rem;\n    border-style: none;\n    border-radius: 2px;\n    &:focus {\n        outline: 0;\n    }\n    color: ', ';\n    font-size: ', ';\n    background-color: ', ';\n    width: ', ';\n    height: ', ';\n    ', ';\n'], ['\n    padding: 0.5rem;\n    border-style: none;\n    border-radius: 2px;\n    &:focus {\n        outline: 0;\n    }\n    color: ', ';\n    font-size: ', ';\n    background-color: ', ';\n    width: ', ';\n    height: ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
    return props.theme.color[props.fontColor] || props.fontColor;
}, function (props) {
    return props.theme.fontScale[props.fontScale] || props.fontScale;
}, function (props) {
    return props.theme.color[props.bgColor] || props.bgColor || 'transparent';
}, function (props) {
    return props.w;
}, function (props) {
    return props.h;
}, function (props) {
    return props.styles ? props.styles(props) : '';
});

exports.default = StyledButton;