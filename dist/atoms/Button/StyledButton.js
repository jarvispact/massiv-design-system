'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    cursor: ', ';\n    background-color: ', ';\n    ', ';\n    ', ';\n    color: ', ';\n    font-size: ', ';\n    font-family: ', ';\n    padding: 0.5rem 1rem;\n    &:focus {\n        outline: 0;\n    }\n    ', ';\n'], ['\n    width: 100%;\n    cursor: ', ';\n    background-color: ', ';\n    ', ';\n    ', ';\n    color: ', ';\n    font-size: ', ';\n    font-family: ', ';\n    padding: 0.5rem 1rem;\n    &:focus {\n        outline: 0;\n    }\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledButton = _styledComponents2.default.button(_templateObject, function (props) {
    return props.disabled ? 'not-allowed' : 'pointer';
}, (0, _helpers.getBackgroundColor)(), (0, _helpers.getBorder)(), (0, _helpers.getShadow)(), (0, _helpers.getFontColor)(), function (props) {
    return props.theme.scale[props.scale] || props.scale;
}, function (props) {
    return props.theme.fonts.paragraph;
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledButton;