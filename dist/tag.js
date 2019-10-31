"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _flex = _interopRequireDefault(require("./flex"));

var _text = _interopRequireDefault(require("./text"));

var _invisibleButton = _interopRequireDefault(require("./invisible-button"));

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultWrapperProps = {
  inline: true,
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'gray300',
  p: '5px 3px 5px 3px',
  borderRadius: '2px'
};

var defaultTextProps = function defaultTextProps(onDelete) {
  return {
    pr: onDelete ? '10px' : undefined,
    fontSize: 'xs'
  };
};

var defaultIconProps = {
  name: 'clear',
  fontSize: 'xs'
};

var Tag = function Tag(_ref) {
  var name = _ref.name,
      children = _ref.children,
      onDelete = _ref.onDelete,
      wrapperProps = _ref.wrapperProps,
      textProps = _ref.textProps,
      iconProps = _ref.iconProps;
  return _react["default"].createElement(_flex["default"], _extends({}, defaultWrapperProps, wrapperProps), _react["default"].createElement(_text["default"], _extends({}, defaultTextProps(onDelete), textProps), name || children), onDelete && _react["default"].createElement(_invisibleButton["default"], {
    fontSize: "13px",
    onClick: onDelete
  }, _react["default"].createElement(_icon["default"], _extends({}, defaultIconProps, iconProps))));
};

Tag.propTypes = {
  name: _propTypes.string,
  children: _propTypes.node,
  onDelete: _propTypes.func,
  wrapperProps: (0, _propTypes.shape)({}),
  textProps: (0, _propTypes.shape)({}),
  iconProps: (0, _propTypes.shape)({})
};
Tag.defaultProps = {
  name: undefined,
  children: undefined,
  onDelete: undefined,
  wrapperProps: {},
  textProps: {},
  iconProps: {}
};
var _default = Tag;
exports["default"] = _default;