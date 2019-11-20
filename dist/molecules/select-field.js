"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _stack = _interopRequireDefault(require("../layout/stack"));

var _text = _interopRequireDefault(require("../atoms/text"));

var _icon = _interopRequireDefault(require("../atoms/icon"));

var _select = _interopRequireDefault(require("../atoms/select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SelectField = function SelectField(_ref) {
  var id = _ref.id,
      name = _ref.name,
      label = _ref.label,
      defaultLabel = _ref.defaultLabel,
      options = _ref.options,
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
      others = _objectWithoutProperties(_ref, ["id", "name", "label", "defaultLabel", "options", "value", "onChange", "onBlur", "disabled", "hint", "warning", "error", "wrapperProps", "labelProps", "hintProps", "warningProps", "errorProps"]);

  return _react["default"].createElement(_stack["default"], _extends({}, defaultWrapperProps, wrapperProps), label && _react["default"].createElement(_text["default"], _extends({
    as: "label",
    htmlFor: id || name
  }, defaultLabelProps, labelProps), label), _react["default"].createElement(_select["default"], {
    id: id || name,
    name: name,
    defaultLabel: defaultLabel,
    options: options,
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    disabled: disabled,
    buttonProps: _objectSpread({
      outlineColor: getOutlineColor(warning, error)
    }, others.buttonProps),
    iconProps: others.iconProps,
    dropdownProps: others.dropdownProps
  }), hint && !warning && !error && _react["default"].createElement(_text["default"], _extends({}, defaultHintProps, hintProps), _react["default"].createElement(_icon["default"], {
    name: "info",
    "aria-hidden": "true"
  }), ' ', hint), warning && !error && _react["default"].createElement(_text["default"], _extends({}, defaultWarningProps, warningProps), _react["default"].createElement(_icon["default"], {
    name: "warning",
    "aria-hidden": "true"
  }), ' ', warning), error && _react["default"].createElement(_text["default"], _extends({}, defaultErrorProps, errorProps), _react["default"].createElement(_icon["default"], {
    name: "error",
    "aria-hidden": "true"
  }), ' ', error));
};

SelectField.propTypes = {
  id: _propTypes.string,
  name: _propTypes.string.isRequired,
  label: _propTypes.string,
  defaultLabel: _propTypes.string,
  options: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    value: _propTypes.string.isRequired,
    label: _propTypes.string.isRequired
  })).isRequired,
  value: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.object, _propTypes.string, _propTypes.number, _propTypes.bool]),
  onChange: _propTypes.func,
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
SelectField.defaultProps = {
  id: undefined,
  label: undefined,
  defaultLabel: undefined,
  value: undefined,
  onChange: undefined,
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
var _default = SelectField;
exports["default"] = _default;