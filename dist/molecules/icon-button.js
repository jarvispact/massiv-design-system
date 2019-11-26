"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _tertiaryButton = _interopRequireDefault(require("../atoms/tertiary-button"));

var _icon = _interopRequireDefault(require("../atoms/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconButton = function IconButton(_ref) {
  var name = _ref.name,
      iconProps = _ref.iconProps,
      others = _objectWithoutProperties(_ref, ["name", "iconProps"]);

  return _react["default"].createElement(_tertiaryButton["default"], _extends({
    p: "0px"
  }, others), _react["default"].createElement(_icon["default"], _extends({
    name: name
  }, iconProps)));
};

IconButton.propTypes = {
  name: _propTypes.string.isRequired,
  iconProps: (0, _propTypes.shape)({}),
  others: (0, _propTypes.shape)({})
};
IconButton.defaultProps = {
  iconProps: undefined,
  others: undefined
};
var _default = IconButton;
exports["default"] = _default;