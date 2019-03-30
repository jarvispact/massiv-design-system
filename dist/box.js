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
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    position: ", ";\n    top: ", ";\n    left: ", ";\n    bottom: ", ";\n    right: ", ";\n    width: ", ";\n    height: ", ";\n    min-width: ", ";\n    min-height: ", ";\n    max-width: ", ";\n    max-height: ", ";\n    overflow: ", ";\n    overflow-x: ", ";\n    overflow-y: ", ";\n    flex-order: ", ";\n    flex-grow: ", ";\n    flex-shrink: ", ";\n    flex-basis: ", ";\n    flex: ", ";\n    align-self: ", ";\n    padding: ", ";\n    padding-top: ", ";\n    padding-left: ", ";\n    padding-bottom: ", ";\n    padding-right: ", ";\n    margin: ", ";\n    margin-top: ", ";\n    margin-left: ", ";\n    margin-bottom: ", ";\n    margin-right: ", ";\n    background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledBox = _styledComponents.default.div(_templateObject(), function (props) {
  return props.massivDisplay;
}, function (props) {
  return props.massivPosition;
}, function (props) {
  return props.massivTop;
}, function (props) {
  return props.massivLeft;
}, function (props) {
  return props.massivBottom;
}, function (props) {
  return props.massivRight;
}, function (props) {
  return props.massivWidth;
}, function (props) {
  return props.massivHeight;
}, function (props) {
  return props.massivMinWidth;
}, function (props) {
  return props.massivMinHeight;
}, function (props) {
  return props.massivMaxWidth;
}, function (props) {
  return props.massivMaxHeight;
}, function (props) {
  return props.massivOverflow;
}, function (props) {
  return props.massivOverflowX;
}, function (props) {
  return props.massivOverflowY;
}, function (props) {
  return props.massivFlexOrder;
}, function (props) {
  return props.massivFlexGrow;
}, function (props) {
  return props.massivFlexShrink;
}, function (props) {
  return props.massivFlexBasis;
}, function (props) {
  return props.massivFlex;
}, function (props) {
  return props.massivAlignSelf;
}, function (props) {
  return props.theme.spacing[props.massivP] || props.massivP;
}, function (props) {
  return props.theme.spacing[props.massivPt] || props.massivPt;
}, function (props) {
  return props.theme.spacing[props.massivPl] || props.massivPl;
}, function (props) {
  return props.theme.spacing[props.massivPb] || props.massivPb;
}, function (props) {
  return props.theme.spacing[props.massivPr] || props.massivPr;
}, function (props) {
  return props.theme.spacing[props.massivM] || props.massivM;
}, function (props) {
  return props.theme.spacing[props.massivMt] || props.massivMt;
}, function (props) {
  return props.theme.spacing[props.massivMl] || props.massivMl;
}, function (props) {
  return props.theme.spacing[props.massivMb] || props.massivMb;
}, function (props) {
  return props.theme.spacing[props.massivMr] || props.massivMr;
}, function (props) {
  return props.theme.colors[props.massivBg] || props.massivBg;
});

var Box = function Box(_ref) {
  var display = _ref.display,
      position = _ref.position,
      top = _ref.top,
      left = _ref.left,
      bottom = _ref.bottom,
      right = _ref.right,
      width = _ref.width,
      height = _ref.height,
      minWidth = _ref.minWidth,
      minHeight = _ref.minHeight,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      overflow = _ref.overflow,
      overflowX = _ref.overflowX,
      overflowY = _ref.overflowY,
      flexOrder = _ref.flexOrder,
      flexGrow = _ref.flexGrow,
      flexShrink = _ref.flexShrink,
      flexBasis = _ref.flexBasis,
      flex = _ref.flex,
      alignSelf = _ref.alignSelf,
      p = _ref.p,
      pt = _ref.pt,
      pl = _ref.pl,
      pb = _ref.pb,
      pr = _ref.pr,
      m = _ref.m,
      mt = _ref.mt,
      ml = _ref.ml,
      mb = _ref.mb,
      mr = _ref.mr,
      bg = _ref.bg,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["display", "position", "top", "left", "bottom", "right", "width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "overflow", "overflowX", "overflowY", "flexOrder", "flexGrow", "flexShrink", "flexBasis", "flex", "alignSelf", "p", "pt", "pl", "pb", "pr", "m", "mt", "ml", "mb", "mr", "bg", "children"]);

  return _react.default.createElement(StyledBox, _extends({
    massivDisplay: display,
    massivPosition: position,
    massivTop: top,
    massivLeft: left,
    massivBottom: bottom,
    massivRight: right,
    massivWidth: width,
    massivHeight: height,
    massivMinWidth: minWidth,
    massivMinHeight: minHeight,
    massivMaxWidth: maxWidth,
    massivMaxHeight: maxHeight,
    massivOverflow: overflow,
    massivOverflowX: overflowX,
    massivOverflowY: overflowY,
    massivFlexOrder: flexOrder,
    massivFlexGrow: flexGrow,
    massivFlexShrink: flexShrink,
    massivFlexBasis: flexBasis,
    massivFlex: flex,
    massivAlignSelf: alignSelf,
    massivP: p,
    massivPt: pt,
    massivPl: pl,
    massivPb: pb,
    massivPr: pr,
    massivM: m,
    massivMt: mt,
    massivMl: ml,
    massivMb: mb,
    massivMr: mr,
    massivBg: bg
  }, otherProps), children);
};

Box.propTypes = {
  display: _propTypes.string,
  position: _propTypes.string,
  top: _propTypes.string,
  left: _propTypes.string,
  bottom: _propTypes.string,
  right: _propTypes.string,
  width: _propTypes.string,
  height: _propTypes.string,
  minWidth: _propTypes.string,
  minHeight: _propTypes.string,
  maxWidth: _propTypes.string,
  maxHeight: _propTypes.string,
  overflow: _propTypes.string,
  overflowX: _propTypes.string,
  overflowY: _propTypes.string,
  flexOrder: _propTypes.string,
  flexGrow: _propTypes.string,
  flexShrink: _propTypes.string,
  flexBasis: _propTypes.string,
  flex: _propTypes.string,
  alignSelf: _propTypes.string,
  p: _propTypes.string,
  pt: _propTypes.string,
  pl: _propTypes.string,
  pb: _propTypes.string,
  pr: _propTypes.string,
  m: _propTypes.string,
  mt: _propTypes.string,
  ml: _propTypes.string,
  mb: _propTypes.string,
  mr: _propTypes.string,
  bg: _propTypes.string,
  children: _propTypes.node
};
Box.defaultProps = {
  display: undefined,
  position: undefined,
  top: undefined,
  left: undefined,
  bottom: undefined,
  right: undefined,
  width: undefined,
  height: undefined,
  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  overflow: undefined,
  overflowX: undefined,
  overflowY: undefined,
  flexOrder: undefined,
  flexGrow: undefined,
  flexShrink: undefined,
  flexBasis: undefined,
  flex: undefined,
  alignSelf: undefined,
  p: undefined,
  pt: undefined,
  pl: undefined,
  pb: undefined,
  pr: undefined,
  m: undefined,
  mt: undefined,
  ml: undefined,
  mb: undefined,
  mr: undefined,
  bg: undefined,
  children: undefined
};
var _default = Box;
exports.default = _default;