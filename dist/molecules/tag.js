"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _flex = _interopRequireDefault(require("../atoms/flex"));

var _text = _interopRequireDefault(require("../atoms/text"));

var _iconButton = _interopRequireDefault(require("../atoms/icon-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultWrapperProps = {
  inline: true,
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'gray300',
  p: '8px',
  borderRadius: '2px'
};

var defaultTextProps = function defaultTextProps(onDelete) {
  return {
    pr: onDelete ? '10px' : undefined,
    fontSize: 'xs',
    lineHeight: 'xs'
  };
};

var defaultIconButtonProps = {
  name: 'clear',
  fontSize: 'xs',
  lineHeight: 'xs'
};

var Tag = function Tag(_ref) {
  var name = _ref.name,
      children = _ref.children,
      onRemove = _ref.onRemove,
      wrapperProps = _ref.wrapperProps,
      textProps = _ref.textProps,
      iconButtonProps = _ref.iconButtonProps;
  return _react["default"].createElement(_flex["default"], _extends({}, defaultWrapperProps, wrapperProps), _react["default"].createElement(_text["default"], _extends({}, defaultTextProps(onRemove), textProps), name || children), onRemove && _react["default"].createElement(_iconButton["default"], _extends({
    onClick: onRemove
  }, defaultIconButtonProps, iconButtonProps)));
};

Tag.propTypes = {
  name: _propTypes.string,
  children: _propTypes.node,
  onRemove: _propTypes.func,
  wrapperProps: (0, _propTypes.shape)({}),
  textProps: (0, _propTypes.shape)({}),
  iconButtonProps: (0, _propTypes.shape)({})
};
Tag.defaultProps = {
  name: undefined,
  children: undefined,
  onRemove: undefined,
  wrapperProps: undefined,
  textProps: undefined,
  iconButtonProps: undefined
};
var _default = Tag;
exports["default"] = _default;