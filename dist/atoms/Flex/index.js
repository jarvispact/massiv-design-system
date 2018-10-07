'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledFlex = require('./StyledFlex');

var _StyledFlex2 = _interopRequireDefault(_StyledFlex);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var parentPropTypes = _extends({}, _propTypes2.colorPropTypes, _propTypes2.positionPropTypes, _propTypes2.spacingPropTypes, _propTypes2.borderPropTypes, {
    inline: _propTypes.bool,
    dir: _propTypes2.stringOrArray,
    wrap: _propTypes2.stringOrArray,
    flow: _propTypes2.stringOrArray,
    justifyContent: _propTypes2.stringOrArray,
    alignItems: _propTypes2.stringOrArray,
    alignContent: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
});

var parentDefaultProps = _extends({}, _propTypes2.colorDefaultProps, _propTypes2.positionDefaultProps, _propTypes2.spacingDefaultProps, _propTypes2.borderDefaultProps, {
    inline: undefined,
    dir: undefined,
    wrap: undefined,
    flow: undefined,
    justifyContent: undefined,
    alignItems: undefined,
    alignContent: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
});

var childPropTypes = _extends({}, _propTypes2.colorPropTypes, _propTypes2.positionPropTypes, _propTypes2.spacingPropTypes, _propTypes2.borderPropTypes, {
    order: _propTypes2.stringOrArray,
    grow: _propTypes2.stringOrArray,
    shrink: _propTypes2.stringOrArray,
    basis: _propTypes2.stringOrArray,
    flex: _propTypes2.stringOrArray,
    alignSelf: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
});

var childDefaultProps = _extends({}, _propTypes2.colorDefaultProps, _propTypes2.positionDefaultProps, _propTypes2.spacingDefaultProps, _propTypes2.borderDefaultProps, {
    order: undefined,
    grow: undefined,
    shrink: undefined,
    basis: undefined,
    flex: undefined,
    alignSelf: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
});

var Parent = function Parent(_ref) {
    var inline = _ref.inline,
        dir = _ref.dir,
        wrap = _ref.wrap,
        flow = _ref.flow,
        justifyContent = _ref.justifyContent,
        alignItems = _ref.alignItems,
        alignContent = _ref.alignContent,
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children,
        others = _objectWithoutProperties(_ref, ['inline', 'dir', 'wrap', 'flow', 'justifyContent', 'alignItems', 'alignContent', 'styles', 'className', 'children']);

    return _react2.default.createElement(
        _StyledFlex2.default.Parent,
        _extends({
            flexDisplay: inline ? 'inline-flex' : 'flex',
            flexDirection: dir,
            flexWrap: wrap,
            flexFlow: flow,
            justifyContent: justifyContent,
            alignItems: alignItems,
            alignContent: alignContent,
            styles: styles,
            className: className
        }, others),
        children
    );
};

var Child = function Child(_ref2) {
    var order = _ref2.order,
        grow = _ref2.grow,
        shrink = _ref2.shrink,
        basis = _ref2.basis,
        flex = _ref2.flex,
        alignSelf = _ref2.alignSelf,
        styles = _ref2.styles,
        className = _ref2.className,
        children = _ref2.children,
        others = _objectWithoutProperties(_ref2, ['order', 'grow', 'shrink', 'basis', 'flex', 'alignSelf', 'styles', 'className', 'children']);

    return _react2.default.createElement(
        _StyledFlex2.default.Child,
        _extends({
            flexOrder: order,
            flexGrow: grow,
            flexShrink: shrink,
            flexBasis: basis,
            flex: flex,
            alignSelf: alignSelf,
            styles: styles,
            className: className
        }, others),
        children
    );
};

var Flex = { Parent: Parent, Child: Child };

Flex.Parent.propTypes = parentPropTypes;
Flex.Parent.defaultProps = parentDefaultProps;

Flex.Child.propTypes = childPropTypes;
Flex.Child.defaultProps = childDefaultProps;

exports.default = Flex;