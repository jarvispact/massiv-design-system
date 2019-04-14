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

var _spacingPropertyConfig = _interopRequireDefault(require("../utils/spacing-property-config"));

var _widthPropertyConfig = _interopRequireDefault(require("../utils/width-property-config"));

var _heightPropertyConfig = _interopRequireDefault(require("../utils/height-property-config"));

var _colorPropertyConfig = _interopRequireDefault(require("../utils/color-property-config"));

var _borderPropertyConfig = _interopRequireDefault(require("../utils/border-property-config"));

var _setProperty = _interopRequireDefault(require("../utils/set-property"));

var _clone = _interopRequireDefault(require("../utils/clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &:focus { outline: 0; }\n    cursor: ", ";\n    opacity: ", ";\n    font-family: ", ";\n    ", "\n"]);

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
var buttonPropertyConfig = [{
  cssProperty: 'display',
  componentProperty: 'display',
  scopedProperty: 'massivDisplay',
  themeProperty: null,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'font-size',
  componentProperty: 'fontSize',
  scopedProperty: 'massivFontSize',
  themeProperty: 'fonts.scales',
  propertyType: propertyType,
  defaultProperty: 'm'
}, {
  cssProperty: 'font-weight',
  componentProperty: 'fontWeight',
  scopedProperty: 'massivFontWeight',
  themeProperty: 'fonts.h1.weights',
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'letter-spacing',
  componentProperty: 'letterSpacing',
  scopedProperty: 'massivLetterSpacing',
  themeProperty: 'fonts.letterSpacings',
  propertyType: propertyType,
  defaultProperty: defaultProperty
}];
var propertyConfig = [].concat(_toConsumableArray((0, _clone["default"])(_colorPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_spacingPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_widthPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_heightPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_borderPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(buttonPropertyConfig)));
(0, _setProperty["default"])('border-style', 'defaultProperty', 'none', propertyConfig);
(0, _setProperty["default"])('border-radius', 'defaultProperty', '2px', propertyConfig);
(0, _setProperty["default"])('padding', 'defaultProperty', '4px 8px', propertyConfig);

var StyledButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, function (props) {
  return props.disabled && '0.5';
}, function (props) {
  return props.theme.fonts.button.family;
}, (0, _buildCss["default"])(propertyConfig));

var Button = function Button(_props) {
  var children = _props.children,
      props = _objectWithoutProperties(_props, ["children"]);

  var scopedProps = (0, _buildScopedProps["default"])(propertyConfig, props);
  return _react["default"].createElement(StyledButton, scopedProps, children);
};

var defaultPropTypes = {
  propTypes: {
    children: _propTypes.node,
    type: _propTypes.string,
    disabled: _propTypes.bool,
    onClick: _propTypes.func.isRequired
  },
  defaultProps: {
    children: undefined,
    type: undefined,
    disabled: false
  }
};

var _buildPropTypes = (0, _buildPropTypes2["default"])(propertyConfig, defaultPropTypes),
    propTypes = _buildPropTypes.propTypes,
    defaultProps = _buildPropTypes.defaultProps;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
var _default = Button;
exports["default"] = _default;