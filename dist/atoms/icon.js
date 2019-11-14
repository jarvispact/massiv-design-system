"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _buildCss = _interopRequireDefault(require("../../utils/build-css"));

var _buildScopedProps = _interopRequireDefault(require("../../utils/build-scoped-props"));

var _buildPropTypes2 = _interopRequireDefault(require("../../utils/build-prop-types"));

var _colorPropertyConfig = _interopRequireDefault(require("../../utils/color-property-config"));

var _spacingPropertyConfig = _interopRequireDefault(require("../../utils/spacing-property-config"));

var _clone = _interopRequireDefault(require("../../utils/clone"));

var _fontPropertyConfig = _interopRequireDefault(require("../../utils/font-property-config"));

var _positionPropertyConfig = _interopRequireDefault(require("../../utils/position-property-config"));

var _displayPropertyConfig = _interopRequireDefault(require("../../utils/display-property-config"));

var _flexChildPropertyConfig = _interopRequireDefault(require("../../utils/flex-child-property-config"));

var _borderPropertyConfig = _interopRequireDefault(require("../../utils/border-property-config"));

var _propTypes2 = require("../../utils/prop-types");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    vertical-align: ", ";\n    cursor: ", ";\n    opacity: ", ";\n    ", "\n"]);

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

var iconPropertyConfig = [{
  componentProperty: 'loading',
  scopedProperty: 'massivLoading',
  themeProperty: null,
  propertyType: _propTypes.bool,
  defaultProperty: false
}, {
  cssProperty: 'vertical-align',
  componentProperty: 'verticalAlign',
  scopedProperty: 'massivVerticalAlign',
  themeProperty: null,
  propertyType: _propTypes2.arrayOfStringsOrString,
  defaultProperty: undefined
}];
var propertyConfig = [].concat(_toConsumableArray((0, _clone["default"])(_positionPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_displayPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_colorPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_spacingPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_fontPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_borderPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(_flexChildPropertyConfig["default"])), _toConsumableArray((0, _clone["default"])(iconPropertyConfig)));

var getCursor = function getCursor(props) {
  if (props.massivLoading) return 'progress';
  if (props.disabled) return 'not-allowed';
  return undefined;
};

var StyledIcon = _styledComponents["default"].i.attrs(function (props) {
  return {
    className: props.theme.icons.className
  };
})(_templateObject(), function (props) {
  return props.theme.icons.verticalAlign || '-16%';
}, getCursor, function (props) {
  return props.disabled && '0.5';
}, (0, _buildCss["default"])(propertyConfig));

var Icon = function Icon(_props) {
  var children = _props.children,
      theme = _props.theme,
      name = _props.name,
      props = _objectWithoutProperties(_props, ["children", "theme", "name"]);

  var scopedProps = (0, _buildScopedProps["default"])(propertyConfig, props);
  return _react["default"].createElement(StyledIcon, scopedProps, name || children);
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

var _default = (0, _styledComponents.withTheme)(Icon);

exports["default"] = _default;