"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _button = _interopRequireDefault(require("./button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getVariantProps = function getVariantProps(variant) {
  return {
    color: variant,
    outlineColor: variant
  };
};

var TertiaryButton = function TertiaryButton(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      others = _objectWithoutProperties(_ref, ["children", "variant"]);

  return _react["default"].createElement(_button["default"], _extends({
    bg: "transparent"
  }, variant ? getVariantProps(variant) : {}, others), children);
};

TertiaryButton.propTypes = {
  children: _propTypes.node,
  variant: (0, _propTypes.oneOf)(['error', 'warning', 'info', 'success']),
  others: (0, _propTypes.shape)({})
};
TertiaryButton.defaultProps = {
  children: undefined,
  variant: undefined,
  others: undefined
};
var _default = TertiaryButton;
exports["default"] = _default;