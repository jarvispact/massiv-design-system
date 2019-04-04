"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _buildCss = _interopRequireDefault(require("../utils/build-css"));

var _propTypes2 = require("../utils/prop-types");

var _buildScopedProps = _interopRequireDefault(require("../utils/build-scoped-props"));

var _buildPropTypes2 = _interopRequireDefault(require("../utils/build-prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var themeProperty = null;
var propertyType = _propTypes2.arrayOfStringsOrString;
var defaultProperty = undefined;
var propertyConfig = [{
  cssProperty: 'flex-direction',
  componentProperty: 'direction',
  scopedProperty: 'massivFlexDirection',
  themeProperty: themeProperty,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'flex-wrap',
  componentProperty: 'wrap',
  scopedProperty: 'massivFlexWrap',
  themeProperty: themeProperty,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'flex-flow',
  componentProperty: 'flow',
  scopedProperty: 'massivFlexFlow',
  themeProperty: themeProperty,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'justify-content',
  componentProperty: 'justifyContent',
  scopedProperty: 'massivJustifyContent',
  themeProperty: themeProperty,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'align-items',
  componentProperty: 'alignItems',
  scopedProperty: 'massivAlignItems',
  themeProperty: themeProperty,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}, {
  cssProperty: 'align-content',
  componentProperty: 'alignContent',
  scopedProperty: 'massivAlignContent',
  themeProperty: themeProperty,
  propertyType: propertyType,
  defaultProperty: defaultProperty
}];

var StyledFlex = _styledComponents.default.div(_templateObject(), function (props) {
  return props.inline ? 'inline-flex' : 'flex';
}, (0, _buildCss.default)(propertyConfig));

var Flex = function Flex(_props) {
  var children = _props.children,
      props = _objectWithoutProperties(_props, ["children"]);

  var scopedProps = (0, _buildScopedProps.default)(propertyConfig, props);
  return _react.default.createElement(StyledFlex, scopedProps, children);
};

var defaultPropTypes = {
  propTypes: {
    children: _propTypes.node
  },
  defaultProps: {
    children: undefined
  }
};

var _buildPropTypes = (0, _buildPropTypes2.default)(propertyConfig, defaultPropTypes),
    propTypes = _buildPropTypes.propTypes,
    defaultProps = _buildPropTypes.defaultProps;

Flex.propTypes = propTypes;
Flex.defaultProps = defaultProps;
var _default = Flex;
exports.default = _default;