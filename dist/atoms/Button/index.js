'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    padding: 0.5rem 1rem;\n    border-style: none;\n    border-radius: 2px;\n    &:focus {\n        outline: 0;\n    }\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n'], ['\n    padding: 0.5rem 1rem;\n    border-style: none;\n    border-radius: 2px;\n    &:focus {\n        outline: 0;\n    }\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    bgColor: _propTypes.string,
    fontColor: _propTypes.string,
    w: _propTypes.string,
    h: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    bgColor: undefined,
    fontColor: undefined,
    w: undefined,
    h: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var Button = _styledComponents2.default.button(_templateObject, function (props) {
    return props.bgColor ? 'background-color: ' + (props.theme.color[props.bgColor] || props.bgColor) : 'background-color: transparent';
}, function (props) {
    return props.fontColor ? 'color: ' + (props.theme.color[props.fontColor] || props.fontColor) : undefined;
}, function (props) {
    return props.w ? 'width: ' + (props.theme.scale[props.w] || props.w) : undefined;
}, function (props) {
    return props.h ? 'height: ' + (props.theme.scale[props.h] || props.h) : undefined;
}, function (props) {
    return props.styles ? props.styles(props) : '';
});

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;