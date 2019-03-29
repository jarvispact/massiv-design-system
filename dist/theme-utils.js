"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _themeContext = _interopRequireDefault(require("./theme-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  render: _propTypes.func,
  children: _propTypes.func
};
var defaultProps = {
  render: undefined,
  children: undefined
};

var ThemeUtils = function ThemeUtils(_ref) {
  var render = _ref.render,
      children = _ref.children;
  return _react.default.createElement(_themeContext.default.Consumer, null, function (ctx) {
    return render ? render(ctx) : children(ctx);
  });
};

ThemeUtils.propTypes = propTypes;
ThemeUtils.defaultProps = defaultProps;
var _default = ThemeUtils;
exports.default = _default;