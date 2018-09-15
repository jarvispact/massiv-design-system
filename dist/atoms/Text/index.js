'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledText = require('./StyledText');

var _StyledText2 = _interopRequireDefault(_StyledText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    color: _propTypes.string,
    scale: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
}; /* eslint-disable react/prop-types */


var defaultProps = {
    color: undefined,
    scale: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var H1 = function H1(_ref) {
    var color = _ref.color,
        scale = _ref.scale,
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledText2.default.H1,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H2 = function H2(_ref2) {
    var color = _ref2.color,
        scale = _ref2.scale,
        styles = _ref2.styles,
        className = _ref2.className,
        children = _ref2.children;
    return _react2.default.createElement(
        _StyledText2.default.H2,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H3 = function H3(_ref3) {
    var color = _ref3.color,
        scale = _ref3.scale,
        styles = _ref3.styles,
        className = _ref3.className,
        children = _ref3.children;
    return _react2.default.createElement(
        _StyledText2.default.H3,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H4 = function H4(_ref4) {
    var color = _ref4.color,
        scale = _ref4.scale,
        styles = _ref4.styles,
        className = _ref4.className,
        children = _ref4.children;
    return _react2.default.createElement(
        _StyledText2.default.H4,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H5 = function H5(_ref5) {
    var color = _ref5.color,
        scale = _ref5.scale,
        styles = _ref5.styles,
        className = _ref5.className,
        children = _ref5.children;
    return _react2.default.createElement(
        _StyledText2.default.H5,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H6 = function H6(_ref6) {
    var color = _ref6.color,
        scale = _ref6.scale,
        styles = _ref6.styles,
        className = _ref6.className,
        children = _ref6.children;
    return _react2.default.createElement(
        _StyledText2.default.H6,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var P = function P(_ref7) {
    var color = _ref7.color,
        scale = _ref7.scale,
        styles = _ref7.styles,
        className = _ref7.className,
        children = _ref7.children;
    return _react2.default.createElement(
        _StyledText2.default.P,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var Span = function Span(_ref8) {
    var color = _ref8.color,
        scale = _ref8.scale,
        styles = _ref8.styles,
        className = _ref8.className,
        children = _ref8.children;
    return _react2.default.createElement(
        _StyledText2.default.Span,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var Label = function Label(_ref9) {
    var color = _ref9.color,
        scale = _ref9.scale,
        styles = _ref9.styles,
        className = _ref9.className,
        children = _ref9.children;
    return _react2.default.createElement(
        _StyledText2.default.Label,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var A = function A(_ref10) {
    var color = _ref10.color,
        scale = _ref10.scale,
        styles = _ref10.styles,
        className = _ref10.className,
        children = _ref10.children;
    return _react2.default.createElement(
        _StyledText2.default.A,
        {
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var Text = { H1: H1, H2: H2, H3: H3, H4: H4, H5: H5, H6: H6, P: P, Span: Span, Label: Label, A: A };

Object.keys(Text).forEach(function (key) {
    var Component = Text[key];
    Component.propTypes = propTypes;
    Component.defaultProps = defaultProps;
});

exports.default = Text;