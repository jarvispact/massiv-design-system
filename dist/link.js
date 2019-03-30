"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledLink = _styledComponents.default.a(_templateObject(), function (props) {
  return props.theme.fonts.link.family;
}, function (props) {
  return props.theme.fonts.link.weights[props.massivWeight] || props.massivWeight || props.theme.fonts.link.weights.m;
}, function (props) {
  return props.theme.fonts.scales[props.massivScale] || props.massivScale;
}, function (props) {
  return props.theme.colors[props.massivColor] || props.massivColor;
});

var Link = function Link(_ref) {
  var weight = _ref.weight,
      scale = _ref.scale,
      color = _ref.color,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["weight", "scale", "color", "children"]);

  return _react.default.createElement(StyledLink, _extends({
    massivWeight: weight,
    massivScale: scale,
    massivColor: color
  }, otherProps), children);
};

Link.propTypes = {
  weight: _propTypes.string,
  scale: _propTypes.string,
  color: _propTypes.string,
  children: _propTypes.node
};
Link.defaultProps = {
  weight: undefined,
  scale: undefined,
  color: undefined,
  children: undefined
};
var _default = Link;
exports.default = _default;