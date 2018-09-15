'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n'], ['\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n    ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    bgColor: _propTypes.string,
    fontColor: _propTypes.string,
    pos: _propTypes.string,
    top: _propTypes.string,
    bottom: _propTypes.string,
    left: _propTypes.string,
    right: _propTypes.string,
    w: _propTypes.string,
    h: _propTypes.string,
    boxDisplay: _propTypes.string,
    flexDirection: _propTypes.string,
    flexWrap: _propTypes.string,
    flexFlow: _propTypes.string,
    justifyContent: _propTypes.string,
    alignItems: _propTypes.string,
    alignContent: _propTypes.string,
    flexOrder: _propTypes.string,
    flexGrow: _propTypes.string,
    flexShrink: _propTypes.string,
    flexBasis: _propTypes.string,
    flex: _propTypes.string,
    alignSelf: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    bgColor: undefined,
    fontColor: undefined,
    pos: undefined,
    top: undefined,
    bottom: undefined,
    left: undefined,
    right: undefined,
    w: undefined,
    h: undefined,
    boxDisplay: undefined,
    flexDirection: undefined,
    flexWrap: undefined,
    flexFlow: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    alignContent: undefined,
    flexOrder: undefined,
    flexGrow: undefined,
    flexShrink: undefined,
    flexBasis: undefined,
    flex: undefined,
    alignSelf: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var Box = _styledComponents2.default.div(_templateObject, function (props) {
    return props.bgColor ? 'background-color: ' + (props.theme.color[props.bgColor] || props.bgColor) : undefined;
}, function (props) {
    return props.fontColor ? 'color: ' + (props.theme.color[props.fontColor] || props.fontColor) : undefined;
}, function (props) {
    return props.pos ? 'position: ' + props.pos : undefined;
}, function (props) {
    return props.top ? 'top: ' + (props.theme.scale[props.top] || props.top) : undefined;
}, function (props) {
    return props.bottom ? 'bottom: ' + (props.theme.scale[props.bottom] || props.bottom) : undefined;
}, function (props) {
    return props.left ? 'left: ' + (props.theme.scale[props.left] || props.left) : undefined;
}, function (props) {
    return props.right ? 'right: ' + (props.theme.scale[props.right] || props.right) : undefined;
}, function (props) {
    return props.w ? 'width: ' + (props.theme.scale[props.w] || props.w) : undefined;
}, function (props) {
    return props.h ? 'height: ' + (props.theme.scale[props.h] || props.h) : undefined;
}, function (props) {
    return props.boxDisplay ? 'display: ' + props.boxDisplay : undefined;
}, function (props) {
    return props.flexDirection ? 'flex-direction: ' + props.flexDirection : undefined;
}, function (props) {
    return props.flexWrap ? 'flex-wrap: ' + props.flexWrap : undefined;
}, function (props) {
    return props.flexFlow ? 'flex-flow: ' + props.flexFlow : undefined;
}, function (props) {
    return props.justifyContent ? 'justify-content: ' + props.justifyContent : undefined;
}, function (props) {
    return props.alignItems ? 'align-items: ' + props.alignItems : undefined;
}, function (props) {
    return props.alignContent ? 'align-content: ' + props.alignContent : undefined;
}, function (props) {
    return props.flexOrder ? 'order: ' + props.flexOrder : undefined;
}, function (props) {
    return props.flexGrow ? 'flex-grow: ' + props.flexGrow : undefined;
}, function (props) {
    return props.flexShrink ? 'flex-shrink: ' + props.flexShrink : undefined;
}, function (props) {
    return props.flexBasis ? 'flex-basis: ' + props.flexBasis : undefined;
}, function (props) {
    return props.flex ? 'flex: ' + props.flex : undefined;
}, function (props) {
    return props.alignSelf ? 'align-self: ' + props.alignSelf : undefined;
}, function (props) {
    return props.styles ? props.styles(props) : '';
});

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

exports.default = Box;