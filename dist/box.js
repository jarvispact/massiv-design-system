"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    position: ", ";\n    top: ", ";\n    left: ", ";\n    bottom: ", ";\n    right: ", ";\n    width: ", ";\n    height: ", ";\n    min-width: ", ";\n    min-height: ", ";\n    max-width: ", ";\n    max-height: ", ";\n    overflow: ", ";\n    overflow-x: ", ";\n    overflow-y: ", ";\n    padding: ", ";\n    padding-top: ", ";\n    padding-left: ", ";\n    padding-bottom: ", ";\n    padding-right: ", ";\n    margin: ", ";\n    margin-top: ", ";\n    margin-left: ", ";\n    margin-bottom: ", ";\n    margin-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents.default.div(_templateObject(), function (props) {
  return props.cssDisplay;
}, function (props) {
  return props.cssPosition;
}, function (props) {
  return props.cssTop;
}, function (props) {
  return props.cssLeft;
}, function (props) {
  return props.cssBottom;
}, function (props) {
  return props.cssRight;
}, function (props) {
  return props.cssWidth;
}, function (props) {
  return props.cssHeight;
}, function (props) {
  return props.cssMinWidth;
}, function (props) {
  return props.cssMinHeight;
}, function (props) {
  return props.cssMaxWidth;
}, function (props) {
  return props.cssMaxHeight;
}, function (props) {
  return props.cssOverflow;
}, function (props) {
  return props.cssOverflowX;
}, function (props) {
  return props.cssOverflowY;
}, function (props) {
  return props.cssPadding;
}, function (props) {
  return props.cssPaddingTop;
}, function (props) {
  return props.cssPaddingLeft;
}, function (props) {
  return props.cssPaddingBottom;
}, function (props) {
  return props.cssPaddingRight;
}, function (props) {
  return props.cssMargin;
}, function (props) {
  return props.cssMarginTop;
}, function (props) {
  return props.cssMarginLeft;
}, function (props) {
  return props.cssMarginBottom;
}, function (props) {
  return props.cssMarginRight;
});

Box.propTypes = {
  cssDisplay: _propTypes.string,
  cssPosition: _propTypes.string,
  cssTop: _propTypes.string,
  cssLeft: _propTypes.string,
  cssBottom: _propTypes.string,
  cssRight: _propTypes.string,
  cssWidth: _propTypes.string,
  cssHeight: _propTypes.string,
  cssMinWidth: _propTypes.string,
  cssMinHeight: _propTypes.string,
  cssMaxWidth: _propTypes.string,
  cssMaxHeight: _propTypes.string,
  cssOverflow: _propTypes.string,
  cssOverflowX: _propTypes.string,
  cssOverflowY: _propTypes.string,
  cssPadding: _propTypes.string,
  cssPaddingTop: _propTypes.string,
  cssPaddingLeft: _propTypes.string,
  cssPaddingBottom: _propTypes.string,
  cssPaddingRight: _propTypes.string,
  cssMargin: _propTypes.string,
  cssMarginTop: _propTypes.string,
  cssMarginLeft: _propTypes.string,
  cssMarginBottom: _propTypes.string,
  cssMarginRight: _propTypes.string
};
Box.defaultProps = {
  cssDisplay: undefined,
  cssPosition: undefined,
  cssTop: undefined,
  cssLeft: undefined,
  cssBottom: undefined,
  cssRight: undefined,
  cssWidth: undefined,
  cssHeight: undefined,
  cssMinWidth: undefined,
  cssMinHeight: undefined,
  cssMaxWidth: undefined,
  cssMaxHeight: undefined,
  cssOverflow: undefined,
  cssOverflowX: undefined,
  cssOverflowY: undefined,
  cssPadding: undefined,
  cssPaddingTop: undefined,
  cssPaddingLeft: undefined,
  cssPaddingBottom: undefined,
  cssPaddingRight: undefined,
  cssMargin: undefined,
  cssMarginTop: undefined,
  cssMarginLeft: undefined,
  cssMarginBottom: undefined,
  cssMarginRight: undefined
};
var _default = Box;
exports.default = _default;