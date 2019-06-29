"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes2 = require("../utils/prop-types");

var _buildCss = _interopRequireDefault(require("../utils/build-css"));

var _buildScopedProps = _interopRequireDefault(require("../utils/build-scoped-props"));

var _buildPropTypes2 = _interopRequireDefault(require("../utils/build-prop-types"));

var _fontPropertyConfig = _interopRequireDefault(require("../utils/font-property-config"));

var _spacingPropertyConfig = _interopRequireDefault(require("../utils/spacing-property-config"));

var _clone = _interopRequireDefault(require("../utils/clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: ", ";\n    vertical-align: ", ";\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var propertyType = _propTypes2.arrayOfStringsOrString;
var defaultProperty = undefined;
var h4PropertyConfig = [{
  cssProperty: 'font-weight',
  componentProperty: 'weight',
  scopedProperty: 'massivFontWeight',
  themeProperty: 'fonts.h4.weights',
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'display',
  componentProperty: 'display',
  scopedProperty: 'massivDisplay',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'overflow',
  componentProperty: 'overflow',
  scopedProperty: 'massivOverflow',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'overflow-x',
  componentProperty: 'overflowX',
  scopedProperty: 'massivOverflowX',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'overflow-y',
  componentProperty: 'overflowY',
  scopedProperty: 'massivOverflowY',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'text-align',
  componentProperty: 'textAlign',
  scopedProperty: 'massivTextAlign',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'white-space',
  componentProperty: 'whiteSpace',
  scopedProperty: 'massivWhiteSpace',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'text-overflow',
  componentProperty: 'textOverflow',
  scopedProperty: 'massivTextOverflow',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}];
var propertyConfig = [].concat(_toConsumableArray((0, _clone["default"])(_spacingPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_fontPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(h4PropertyConfig)));

var StyledH4 = _styledComponents["default"].h4(_templateObject(), function (props) {
  return props.theme.fonts.h4.family;
}, function (props) {
  return props.theme.fonts.h4.verticalAlign || 'middle';
}, (0, _buildCss["default"])(propertyConfig));

var H4 = function H4(_props) {
  var children = _props.children,
      props = _objectWithoutProperties(_props, ["children"]);

  var scopedProps = (0, _buildScopedProps["default"])(propertyConfig, props);
  return _react["default"].createElement(StyledH4, scopedProps, children);
};

var defaultPropTypes = {
  propTypes: {
    children: _propTypes.node
  },
  defaultProps: {
    children: undefined
  }
};

var _buildPropTypes = (0, _buildPropTypes2["default"])(propertyConfig, defaultPropTypes),
    propTypes = _buildPropTypes.propTypes,
    defaultProps = _buildPropTypes.defaultProps;

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;
var _default = H4;
exports["default"] = _default;