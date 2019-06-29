"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = require("styled-components");

var _box = _interopRequireDefault(require("./box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// if only one gutter value is passed we assume that it should be used for all breakpoints
// if more than one value is passed we try to match it with the index of the passed span values
var getGutter = function getGutter(gutters, index) {
  return gutters.length === 1 ? gutters[0] : gutters[index];
};

var getWidth = function getWidth(gutters) {
  return function (span, index) {
    return "calc(".concat(100 / 12 * span, "% - ").concat(span === 12 ? '0px' : getGutter(gutters, index), ")");
  };
};

var Col = function Col(_ref) {
  var theme = _ref.theme,
      gutter = _ref.gutter,
      span = _ref.span,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["theme", "gutter", "span", "children"]);

  var gutters = (Array.isArray(gutter) ? gutter : [gutter]).map(function (g) {
    return theme.spacing[g] || g;
  });
  var spans = Array.isArray(span) ? span : [span];
  return _react["default"].createElement(_box["default"], _extends({
    display: "inline-block",
    width: spans.map(getWidth(gutters))
  }, others), children);
};

Col.propTypes = {
  theme: (0, _propTypes.shape)({}).isRequired,
  gutter: (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.string), _propTypes.string]),
  span: (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.number), _propTypes.number]),
  children: _propTypes.node,
  others: (0, _propTypes.shape)({})
};
Col.defaultProps = {
  gutter: undefined,
  span: undefined,
  children: undefined,
  others: {}
};

var _default = (0, _styledComponents.withTheme)(Col);

exports["default"] = _default;