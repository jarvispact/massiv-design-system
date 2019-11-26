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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Field = function Field(_ref) {
  var name = _ref.name,
      label = _ref.label,
      hint = _ref.hint,
      warning = _ref.warning,
      error = _ref.error,
      wrapperProps = _ref.wrapperProps,
      labelProps = _ref.labelProps,
      hintProps = _ref.hintProps,
      warningProps = _ref.warningProps,
      errorProps = _ref.errorProps,
      children = _ref.children;
  return _react["default"].createElement(_stack["default"], _extends({
    mb: "m",
    spacing: "xs"
  }, wrapperProps), label && _react["default"].createElement(_text["default"], _extends({
    as: "label",
    id: "".concat(name, "-label"),
    htmlFor: name,
    color: "gray700"
  }, labelProps), label), children, hint && !warning && !error && _react["default"].createElement(_text["default"], _extends({
    fontSize: "xs",
    lineHeight: "xs",
    color: "info"
  }, hintProps), _react["default"].createElement(_icon["default"], {
    name: "info",
    "aria-hidden": "true"
  }), ' ', hint), warning && !error && _react["default"].createElement(_text["default"], _extends({
    fontSize: "xs",
    lineHeight: "xs",
    color: "warning"
  }, warningProps), _react["default"].createElement(_icon["default"], {
    name: "warning",
    "aria-hidden": "true"
  }), ' ', warning), error && _react["default"].createElement(_text["default"], _extends({
    fontSize: "xs",
    lineHeight: "xs",
    color: "error"
  }, errorProps), _react["default"].createElement(_icon["default"], {
    name: "error",
    "aria-hidden": "true"
  }), ' ', error));
};

Field.propTypes = {
  name: _propTypes.string.isRequired,
  label: _propTypes.string,
  hint: _propTypes.string,
  warning: _propTypes.string,
  error: _propTypes.string,
  wrapperProps: (0, _propTypes.shape)({}),
  labelProps: (0, _propTypes.shape)({}),
  hintProps: (0, _propTypes.shape)({}),
  warningProps: (0, _propTypes.shape)({}),
  errorProps: (0, _propTypes.shape)({}),
  children: _propTypes.node.isRequired
};
Field.defaultProps = {
  label: undefined,
  hint: undefined,
  warning: undefined,
  error: undefined,
  wrapperProps: undefined,
  labelProps: undefined,
  hintProps: undefined,
  warningProps: undefined,
  errorProps: undefined
};
var _default = Field;
exports["default"] = _default;