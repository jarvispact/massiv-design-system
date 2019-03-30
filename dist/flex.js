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
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    flex-flow: ", ";\n    justify-content: ", ";\n    align-items: ", ";\n    align-content: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledFlex = _styledComponents.default.div(_templateObject(), function (props) {
  return props.massivDisplay;
}, function (props) {
  return props.massivDirection;
}, function (props) {
  return props.massivFlexWrap;
}, function (props) {
  return props.massivFlexFlow;
}, function (props) {
  return props.massivJustifyContent;
}, function (props) {
  return props.massivAlignItems;
}, function (props) {
  return props.massivAlignContent;
});

var Flex = function Flex(_ref) {
  var inline = _ref.inline,
      direction = _ref.direction,
      flexWrap = _ref.flexWrap,
      flexFlow = _ref.flexFlow,
      justifyContent = _ref.justifyContent,
      alignItems = _ref.alignItems,
      alignContent = _ref.alignContent,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["inline", "direction", "flexWrap", "flexFlow", "justifyContent", "alignItems", "alignContent", "children"]);

  return _react.default.createElement(StyledFlex, _extends({
    massivDisplay: inline ? 'inline-flex' : 'flex',
    massivDirection: direction,
    massivFlexWrap: flexWrap,
    massivFlexFlow: flexFlow,
    massivJustifyContent: justifyContent,
    massivAlignItems: alignItems,
    massivAlignContent: alignContent
  }, otherProps), children);
};

Flex.propTypes = {
  inline: _propTypes.bool,
  direction: _propTypes.string,
  flexWrap: _propTypes.string,
  flexFlow: _propTypes.string,
  justifyContent: _propTypes.string,
  alignItems: _propTypes.string,
  alignContent: _propTypes.string,
  children: _propTypes.node
};
Flex.defaultProps = {
  inline: false,
  direction: undefined,
  flexWrap: undefined,
  flexFlow: undefined,
  justifyContent: undefined,
  alignItems: undefined,
  alignContent: undefined,
  children: undefined
};
var _default = Flex;
exports.default = _default;