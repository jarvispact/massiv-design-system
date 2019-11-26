"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _flex = _interopRequireDefault(require("../atoms/flex"));

var _text = _interopRequireDefault(require("../atoms/text"));

var _iconButton = _interopRequireDefault(require("./icon-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Tag = function Tag(_ref) {
  var content = _ref.content,
      children = _ref.children,
      onRemove = _ref.onRemove,
      textProps = _ref.textProps,
      iconButtonProps = _ref.iconButtonProps,
      others = _objectWithoutProperties(_ref, ["content", "children", "onRemove", "textProps", "iconButtonProps"]);

  return _react["default"].createElement(_flex["default"], _extends({
    inline: true,
    alignItems: "center",
    justifyContent: "center",
    bg: "gray300",
    p: "8px",
    borderRadius: "2px"
  }, others), content && !children && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_text["default"], _extends({
    pr: onRemove ? '6px' : undefined,
    fontSize: "xs",
    lineHeight: "xs"
  }, textProps), content), onRemove && _react["default"].createElement(_iconButton["default"], _extends({
    name: "clear",
    fontSize: "xs",
    lineHeight: "xs",
    onClick: onRemove
  }, iconButtonProps))), !content && children && children);
};

Tag.propTypes = {
  content: _propTypes.string,
  children: _propTypes.node,
  onRemove: _propTypes.func,
  others: (0, _propTypes.shape)({}),
  textProps: (0, _propTypes.shape)({}),
  iconButtonProps: (0, _propTypes.shape)({})
};
Tag.defaultProps = {
  content: undefined,
  children: undefined,
  onRemove: undefined,
  others: undefined,
  textProps: undefined,
  iconButtonProps: undefined
};
var _default = Tag;
exports["default"] = _default;