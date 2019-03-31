"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border-style: none;\n    &:focus { outline: 0; }\n    padding: 0.4rem;\n    border-radius: 2px;\n    background-color: ", ";\n    cursor: ", ";\n    opacity: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInput = _styledComponents.default.input(_templateObject(), function (props) {
  return props.theme.colors[props.massivBg] || props.massivBg;
}, function (props) {
  return props.disabled && 'not-allowed';
}, function (props) {
  return props.disabled && '0.5';
}, function (props) {
  return props.theme.fonts.input.family;
}, function (props) {
  return props.theme.fonts.input.weights[props.massivFontWeight] || props.massivFontWeight || props.theme.fonts.input.weights.m;
}, function (props) {
  return props.theme.fonts.scales[props.massivFontScale] || props.massivFontScale;
}, function (props) {
  return props.theme.colors[props.massivFontColor] || props.massivFontColor;
});

var Input = function Input(_ref) {
  var type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      fontWeight = _ref.fontWeight,
      fontScale = _ref.fontScale,
      fontColor = _ref.fontColor,
      bg = _ref.bg,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["type", "id", "name", "value", "disabled", "onChange", "onBlur", "onFocus", "fontWeight", "fontScale", "fontColor", "bg", "children"]);

  return _react.default.createElement(StyledInput, _extends({
    type: type,
    id: id,
    name: name,
    value: value,
    disabled: disabled,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    massivFontWeight: fontWeight,
    massivFontScale: fontScale,
    massivFontColor: fontColor,
    massivBg: bg
  }, otherProps), children);
};

Input.propTypes = {
  type: _propTypes.string,
  id: _propTypes.string,
  name: _propTypes.string,
  value: _propTypes.string,
  disabled: _propTypes.bool,
  onChange: _propTypes.func,
  onBlur: _propTypes.func,
  onFocus: _propTypes.func,
  fontWeight: _propTypes.string,
  fontScale: _propTypes.string,
  fontColor: _propTypes.string,
  bg: _propTypes.string,
  children: _propTypes.node
};
Input.defaultProps = {
  type: 'text',
  id: undefined,
  name: undefined,
  value: undefined,
  disabled: false,
  onChange: undefined,
  onBlur: undefined,
  onFocus: undefined,
  fontWeight: undefined,
  fontScale: undefined,
  fontColor: undefined,
  bg: undefined,
  children: undefined
};
var _default = Input;
exports.default = _default;