"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _stack = _interopRequireDefault(require("../layout/stack"));

var _text = _interopRequireDefault(require("../atoms/text"));

var _textArea = _interopRequireDefault(require("../atoms/text-area"));

var _icon = _interopRequireDefault(require("../atoms/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var defaultWrapperProps = {
  mb: 'm',
  spacing: 'xs'
};
var defaultLabelProps = {
  color: 'gray700'
};
var defaultTextAreaProps = {
  bg: 'white'
};
var defaultHintProps = {
  fontSize: 'xs',
  lineHeight: 'xs',
  color: 'info'
};
var defaultWarningProps = {
  fontSize: 'xs',
  lineHeight: 'xs',
  color: 'warning'
};
var defaultErrorProps = {
  fontSize: 'xs',
  lineHeight: 'xs',
  color: 'error'
};

var getOutlineColor = function getOutlineColor(warning, error) {
  if (warning) return 'warning';
  if (error) return 'error';
  return undefined;
};

var TextAreaField = function TextAreaField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      disabled = _ref.disabled,
      hint = _ref.hint,
      warning = _ref.warning,
      error = _ref.error,
      wrapperProps = _ref.wrapperProps,
      labelProps = _ref.labelProps,
      hintProps = _ref.hintProps,
      warningProps = _ref.warningProps,
      errorProps = _ref.errorProps,
      others = _objectWithoutProperties(_ref, ["id", "name", "label", "value", "onChange", "onBlur", "disabled", "hint", "warning", "error", "wrapperProps", "labelProps", "hintProps", "warningProps", "errorProps"]);

  return _react["default"].createElement(_stack["default"], _extends({}, defaultWrapperProps, wrapperProps), label && _react["default"].createElement(_text["default"], _extends({
    as: "label",
    htmlFor: id || name
  }, defaultLabelProps, labelProps), label), _react["default"].createElement(_textArea["default"], _extends({
    rows: "6",
    id: id || name,
    name: name,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    outlineColor: getOutlineColor(warning, error)
  }, defaultTextAreaProps, others)), hint && !warning && !error && _react["default"].createElement(_text["default"], _extends({}, defaultHintProps, hintProps), _react["default"].createElement(_icon["default"], {
    name: "info"
  }), ' ', hint), warning && !error && _react["default"].createElement(_text["default"], _extends({}, defaultWarningProps, warningProps), _react["default"].createElement(_icon["default"], {
    name: "warning"
  }), ' ', warning), error && _react["default"].createElement(_text["default"], _extends({}, defaultErrorProps, errorProps), _react["default"].createElement(_icon["default"], {
    name: "error"
  }), ' ', error));
};

TextAreaField.propTypes = {
  id: _propTypes.string,
  name: _propTypes.string.isRequired,
  label: _propTypes.string,
  value: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.object, _propTypes.string, _propTypes.number, _propTypes.bool]),
  onChange: _propTypes.func.isRequired,
  onBlur: _propTypes.func,
  disabled: _propTypes.bool,
  hint: _propTypes.string,
  warning: _propTypes.string,
  error: _propTypes.string,
  wrapperProps: (0, _propTypes.shape)({}),
  labelProps: (0, _propTypes.shape)({}),
  hintProps: (0, _propTypes.shape)({}),
  warningProps: (0, _propTypes.shape)({}),
  errorProps: (0, _propTypes.shape)({})
};
TextAreaField.defaultProps = {
  id: undefined,
  label: undefined,
  value: '',
  onBlur: undefined,
  disabled: undefined,
  hint: undefined,
  warning: undefined,
  error: undefined,
  wrapperProps: undefined,
  labelProps: undefined,
  hintProps: undefined,
  warningProps: undefined,
  errorProps: undefined
};
var _default = TextAreaField;
exports["default"] = _default;