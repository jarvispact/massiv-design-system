'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    border-style: none;\n    border-radius: 2px\n    &:focus { outline: 0; }\n    cursor: ', ';\n    opacity: ', ';\n    font-family: ', ';\n    ', ';\n'], ['\n    ', ';\n    border-style: none;\n    border-radius: 2px\n    &:focus { outline: 0; }\n    cursor: ', ';\n    opacity: ', ';\n    font-family: ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _buildCss = require('../../build-css');

var _buildCss2 = _interopRequireDefault(_buildCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint-disable no-multi-spaces, comma-spacing */


var inputProperties = [{ cssProp: 'display', reactProp: 'inputDisplay', themeProp: null }, { cssProp: 'font-size', reactProp: 'fontScale', themeProp: 'fontScale' }, { cssProp: 'color', reactProp: 'fontColor', themeProp: 'color' }, { cssProp: 'background-color', reactProp: 'bgColor', themeProp: 'color' }, { cssProp: 'width', reactProp: 'w', themeProp: 'spacing' }, { cssProp: 'height', reactProp: 'h', themeProp: 'spacing' }, { cssProp: 'min-width', reactProp: 'minWidth', themeProp: 'spacing' }, { cssProp: 'min-height', reactProp: 'minHeight', themeProp: 'spacing' }, { cssProp: 'max-width', reactProp: 'maxWidth', themeProp: 'spacing' }, { cssProp: 'max-height', reactProp: 'maxHeight', themeProp: 'spacing' }, { cssProp: 'padding', reactProp: 'p', themeProp: 'spacing' }, { cssProp: 'padding-top', reactProp: 'pt', themeProp: 'spacing' }, { cssProp: 'padding-bottom', reactProp: 'pb', themeProp: 'spacing' }, { cssProp: 'padding-left', reactProp: 'pl', themeProp: 'spacing' }, { cssProp: 'padding-right', reactProp: 'pr', themeProp: 'spacing' }, { cssProp: 'margin', reactProp: 'm', themeProp: 'spacing' }, { cssProp: 'margin-top', reactProp: 'mt', themeProp: 'spacing' }, { cssProp: 'margin-bottom', reactProp: 'mb', themeProp: 'spacing' }, { cssProp: 'margin-left', reactProp: 'ml', themeProp: 'spacing' }, { cssProp: 'margin-right', reactProp: 'mr', themeProp: 'spacing' }];

var StyledInput = _styledComponents2.default.input(_templateObject, (0, _buildCss2.default)(inputProperties), function (props) {
    return props.disabled && 'not-allowed';
}, function (props) {
    return props.disabled && '0.5';
}, function (props) {
    return props.theme.settings.fonts.input;
}, function (props) {
    return props.styles && props.styles(props);
});

exports.default = StyledInput;