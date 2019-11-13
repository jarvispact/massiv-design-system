"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _flex = _interopRequireDefault(require("../atoms/flex"));

var _box = _interopRequireDefault(require("../atoms/box"));

var _text = _interopRequireDefault(require("../atoms/text"));

var _icon = _interopRequireDefault(require("../atoms/icon"));

var _invisibleButton = _interopRequireDefault(require("../atoms/invisible-button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var WarningAlert = function WarningAlert(_ref) {
  var text = _ref.text,
      children = _ref.children,
      onClose = _ref.onClose,
      others = _objectWithoutProperties(_ref, ["text", "children", "onClose"]);

  return _react["default"].createElement(_flex["default"], _extends({
    bg: "warning300",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "warning700",
    p: "1.3rem",
    justifyContent: "flex-start",
    alignItems: "center",
    position: onClose ? 'relative' : undefined
  }, others), onClose && _react["default"].createElement(_box["default"], {
    position: "absolute",
    top: "5px",
    right: "5px"
  }, _react["default"].createElement(_invisibleButton["default"], {
    onClick: onClose
  }, _react["default"].createElement(_icon["default"], {
    name: "close",
    color: "warning700"
  }))), _react["default"].createElement(_icon["default"], {
    name: "warning",
    color: "warning700"
  }), text && !children && _react["default"].createElement(_text["default"], {
    color: "warning700",
    pl: "1rem"
  }, text), !text && children && _react["default"].createElement(_box["default"], {
    pl: "1rem"
  }, children));
};

WarningAlert.propTypes = {
  text: _propTypes.string,
  children: _propTypes.node,
  onClose: _propTypes.func,
  others: (0, _propTypes.shape)({})
};
WarningAlert.defaultProps = {
  text: undefined,
  children: undefined,
  onClose: undefined,
  others: undefined
};
var _default = WarningAlert;
exports["default"] = _default;