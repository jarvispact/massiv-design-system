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

var _colorPropertyConfig = _interopRequireDefault(require("../utils/color-property-config"));

var _spacingPropertyConfig = _interopRequireDefault(require("../utils/spacing-property-config"));

var _clone = _interopRequireDefault(require("../utils/clone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    vertical-align: -16%;\n    cursor: ", ";\n    opacity: ", ";\n    ", "\n"]);

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
var iconPropertyConfig = [{
  cssProperty: 'font-size',
  componentProperty: 'scale',
  scopedProperty: 'massivFontSize',
  themeProperty: 'fonts.scales',
  propertyType: propertyType,
  defaultProperty: defaultProperty
}];
var propertyConfig = [].concat(_toConsumableArray((0, _clone["default"])(_colorPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_spacingPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(iconPropertyConfig)));

var getCursor = function getCursor(props) {
  if (props.disabled) return 'not-allowed';
  if (props.onClick) return 'pointer';
  return undefined;
};

var StyledIcon = _styledComponents["default"].i.attrs(function (props) {
  return {
    className: props.theme.fonts.iconClassName
  };
})(_templateObject(), getCursor, function (props) {
  return props.disabled && '0.5';
}, (0, _buildCss["default"])(propertyConfig));

var Icon = function Icon(_props) {
  var children = _props.children,
      props = _objectWithoutProperties(_props, ["children"]);

  var scopedProps = (0, _buildScopedProps["default"])(propertyConfig, props);
  if (scopedProps.onClick && scopedProps.disabled) scopedProps.onClick = undefined;
  return _react["default"].createElement(StyledIcon, scopedProps, scopedProps.name || children);
};

var defaultPropTypes = {
  propTypes: {
    children: _propTypes.node,
    disabled: _propTypes.bool,
    name: _propTypes.string
  },
  defaultProps: {
    children: undefined,
    disabled: false,
    name: undefined
  }
};

var _buildPropTypes = (0, _buildPropTypes2["default"])(propertyConfig, defaultPropTypes),
    propTypes = _buildPropTypes.propTypes,
    defaultProps = _buildPropTypes.defaultProps;

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
var _default = Icon;
exports["default"] = _default;