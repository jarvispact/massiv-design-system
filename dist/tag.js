"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _flex = _interopRequireDefault(require("./flex"));

var _text = _interopRequireDefault(require("./text"));

var _button = _interopRequireDefault(require("./button"));

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultWrapperProps = {
  inline: true,
  alignItems: 'center',
  bg: 'gray300',
  pl: '5px',
  pr: '5px',
  pt: '2px',
  pb: '2px',
  borderRadius: 's'
};
var defaultTextProps = {
  pr: '5px',
  scale: 'xs'
};
var defaultIconProps = {
  name: 'clear',
  pl: '5px',
  scale: 'xs'
};

var Tag = function Tag(_ref) {
  var name = _ref.name,
      children = _ref.children,
      onClose = _ref.onClose,
      wrapperProps = _ref.wrapperProps,
      textProps = _ref.textProps,
      iconProps = _ref.iconProps;
  return _react["default"].createElement(_flex["default"], _extends({}, defaultWrapperProps, wrapperProps), _react["default"].createElement(_text["default"], _extends({}, defaultTextProps, textProps), name || children), _react["default"].createElement(_button["default"], {
    bg: "transparent",
    p: "0",
    onClick: onClose
  }, _react["default"].createElement(_icon["default"], _extends({}, defaultIconProps, iconProps))));
};

Tag.propTypes = {
  name: _propTypes.string,
  children: _propTypes.node,
  onClose: _propTypes.func,
  wrapperProps: (0, _propTypes.shape)({}),
  textProps: (0, _propTypes.shape)({}),
  iconProps: (0, _propTypes.shape)({})
};
Tag.defaultProps = {
  name: undefined,
  children: undefined,
  onClose: undefined,
  wrapperProps: defaultWrapperProps,
  textProps: defaultTextProps,
  iconProps: defaultIconProps
};
var _default = Tag;
exports["default"] = _default;