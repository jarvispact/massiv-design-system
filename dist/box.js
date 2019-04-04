"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _buildCss = _interopRequireDefault(require("../utils/build-css"));

var _positionPropertyConfig = _interopRequireDefault(require("../utils/position-property-config"));

var _spacingPropertyConfig = _interopRequireDefault(require("../utils/spacing-property-config"));

var _widthPropertyConfig = _interopRequireDefault(require("../utils/width-property-config"));

var _heightPropertyConfig = _interopRequireDefault(require("../utils/height-property-config"));

var _flexChildPropertyConfig = _interopRequireDefault(require("../utils/flex-child-property-config"));

var _colorPropertyConfig = _interopRequireDefault(require("../utils/color-property-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n"]);

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

var arrayOfStringsOrString = (0, _propTypes.oneOfType)([(0, _propTypes.arrayOf)(_propTypes.string), _propTypes.string]);
var boxPropertyConfig = [{
  cssProperty: 'overflow',
  componentProperty: 'overflow',
  scopedProperty: 'massivOverflow',
  themeProperty: null,
  propertyType: arrayOfStringsOrString,
  defaultProperty: undefined
}, {
  cssProperty: 'overflow-x',
  componentProperty: 'overflowX',
  scopedProperty: 'massivOverflowX',
  themeProperty: null,
  propertyType: arrayOfStringsOrString,
  defaultProperty: undefined
}, {
  cssProperty: 'overflow-y',
  componentProperty: 'overflowY',
  scopedProperty: 'massivOverflowY',
  themeProperty: null,
  propertyType: arrayOfStringsOrString,
  defaultProperty: undefined
}];
var propertyConfig = [].concat(_toConsumableArray(_positionPropertyConfig.default), _toConsumableArray(_spacingPropertyConfig.default), _toConsumableArray(_widthPropertyConfig.default), _toConsumableArray(_heightPropertyConfig.default), _toConsumableArray(_flexChildPropertyConfig.default), _toConsumableArray(_colorPropertyConfig.default), boxPropertyConfig);

var StyledBox = _styledComponents.default.div(_templateObject(), (0, _buildCss.default)(propertyConfig)); // const StyledBox = styled.div`
//     display: ${props => props.massivDisplay};
//     position: ${props => props.massivPosition};
//     top: ${props => props.massivTop};
//     left: ${props => props.massivLeft};
//     bottom: ${props => props.massivBottom};
//     right: ${props => props.massivRight};
//     width: ${props => props.massivWidth};
//     height: ${props => props.massivHeight};
//     min-width: ${props => props.massivMinWidth};
//     min-height: ${props => props.massivMinHeight};
//     max-width: ${props => props.massivMaxWidth};
//     max-height: ${props => props.massivMaxHeight};
//     overflow: ${props => props.massivOverflow};
//     overflow-x: ${props => props.massivOverflowX};
//     overflow-y: ${props => props.massivOverflowY};
//     flex-order: ${props => props.massivFlexOrder};
//     flex-grow: ${props => props.massivFlexGrow};
//     flex-shrink: ${props => props.massivFlexShrink};
//     flex-basis: ${props => props.massivFlexBasis};
//     flex: ${props => props.massivFlex};
//     align-self: ${props => props.massivAlignSelf};
//     padding: ${props => props.theme.spacing[props.massivP] || props.massivP};
//     padding-top: ${props => props.theme.spacing[props.massivPt] || props.massivPt};
//     padding-left: ${props => props.theme.spacing[props.massivPl] || props.massivPl};
//     padding-bottom: ${props => props.theme.spacing[props.massivPb] || props.massivPb};
//     padding-right: ${props => props.theme.spacing[props.massivPr] || props.massivPr};
//     margin: ${props => props.theme.spacing[props.massivM] || props.massivM};
//     margin-top: ${props => props.theme.spacing[props.massivMt] || props.massivMt};
//     margin-left: ${props => props.theme.spacing[props.massivMl] || props.massivMl};
//     margin-bottom: ${props => props.theme.spacing[props.massivMb] || props.massivMb};
//     margin-right: ${props => props.theme.spacing[props.massivMr] || props.massivMr};
//     background-color: ${props => props.theme.colors[props.massivBg] || props.massivBg};
// `;
// const Box = ({
//     display,
//     position,
//     top,
//     left,
//     bottom,
//     right,
//     width,
//     height,
//     minWidth,
//     minHeight,
//     maxWidth,
//     maxHeight,
//     overflow,
//     overflowX,
//     overflowY,
//     flexOrder,
//     flexGrow,
//     flexShrink,
//     flexBasis,
//     flex,
//     alignSelf,
//     p,
//     pt,
//     pl,
//     pb,
//     pr,
//     m,
//     mt,
//     ml,
//     mb,
//     mr,
//     bg,
//     children,
//     ...otherProps
// }) => (
//     <StyledBox
//         massivDisplay={display}
//         massivPosition={position}
//         massivTop={top}
//         massivLeft={left}
//         massivBottom={bottom}
//         massivRight={right}
//         massivWidth={width}
//         massivHeight={height}
//         massivMinWidth={minWidth}
//         massivMinHeight={minHeight}
//         massivMaxWidth={maxWidth}
//         massivMaxHeight={maxHeight}
//         massivOverflow={overflow}
//         massivOverflowX={overflowX}
//         massivOverflowY={overflowY}
//         massivFlexOrder={flexOrder}
//         massivFlexGrow={flexGrow}
//         massivFlexShrink={flexShrink}
//         massivFlexBasis={flexBasis}
//         massivFlex={flex}
//         massivAlignSelf={alignSelf}
//         massivP={p}
//         massivPt={pt}
//         massivPl={pl}
//         massivPb={pb}
//         massivPr={pr}
//         massivM={m}
//         massivMt={mt}
//         massivMl={ml}
//         massivMb={mb}
//         massivMr={mr}
//         massivBg={bg}
//         {...otherProps}
//     >
//         {children}
//     </StyledBox>
// );


var Box = function Box(_props) {
  var children = _props.children,
      props = _objectWithoutProperties(_props, ["children"]);

  var scopedProps = Object.keys(props).reduce(function (acc, key) {
    var config = propertyConfig.find(function (_ref) {
      var componentProperty = _ref.componentProperty;
      return componentProperty === key;
    });
    acc[config ? config.scopedProperty : key] = props[key];
    return acc;
  }, {});
  return _react.default.createElement(StyledBox, scopedProps, children);
};

var _propertyConfig$reduc = propertyConfig.reduce(function (acc, config) {
  acc.propTypes[config.componentProperty] = config.propertyType;
  acc.defaultProps[config.componentProperty] = config.defaultProperty;
  return acc;
}, {
  propTypes: {
    children: _propTypes.node
  },
  defaultProps: {
    children: undefined
  }
}),
    propTypes = _propertyConfig$reduc.propTypes,
    defaultProps = _propertyConfig$reduc.defaultProps;

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
var _default = Box;
exports.default = _default;