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

var Tag = function Tag(_ref) {
  var name = _ref.name,
      onClose = _ref.onClose,
      wrapperProps = _ref.wrapperProps,
      textProps = _ref.textProps,
      iconProps = _ref.iconProps;
  return _react["default"].createElement(_flex["default"], wrapperProps, _react["default"].createElement(_text["default"], textProps, name), _react["default"].createElement(_button["default"], {
    bg: "transparent",
    p: "0",
    onClick: onClose
  }, _react["default"].createElement(_icon["default"], iconProps)));
};

Tag.propTypes = {
  name: _propTypes.string.isRequired,
  onClose: _propTypes.func.isRequired,
  wrapperProps: (0, _propTypes.shape)({}),
  textProps: (0, _propTypes.shape)({}),
  iconProps: (0, _propTypes.shape)({})
};
Tag.defaultProps = {
  wrapperProps: {
    alignItems: 'center',
    bg: 'gray300',
    pl: '5px',
    pr: '5px',
    pt: '2px',
    pb: '2px',
    borderRadius: 's'
  },
  textProps: {
    pr: '5px',
    scale: 'xs'
  },
  iconProps: {
    name: 'clear',
    pl: '5px',
    scale: 'xs'
  }
};
var _default = Tag;
exports["default"] = _default;