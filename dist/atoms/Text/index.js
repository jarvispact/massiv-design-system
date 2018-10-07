'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledText = require('./StyledText');

var _StyledText2 = _interopRequireDefault(_StyledText);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/prop-types */
var propTypes = {
    display: _propTypes2.stringOrArray,
    color: _propTypes2.stringOrArray,
    scale: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    display: undefined,
    color: undefined,
    scale: undefined,
    styles: undefined,
    className: undefined,
    children: undefined
};

var H1 = function H1(_ref) {
    var display = _ref.display,
        color = _ref.color,
        scale = _ref.scale,
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledText2.default.H1,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H2 = function H2(_ref2) {
    var display = _ref2.display,
        color = _ref2.color,
        scale = _ref2.scale,
        styles = _ref2.styles,
        className = _ref2.className,
        children = _ref2.children;
    return _react2.default.createElement(
        _StyledText2.default.H2,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H3 = function H3(_ref3) {
    var display = _ref3.display,
        color = _ref3.color,
        scale = _ref3.scale,
        styles = _ref3.styles,
        className = _ref3.className,
        children = _ref3.children;
    return _react2.default.createElement(
        _StyledText2.default.H3,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H4 = function H4(_ref4) {
    var display = _ref4.display,
        color = _ref4.color,
        scale = _ref4.scale,
        styles = _ref4.styles,
        className = _ref4.className,
        children = _ref4.children;
    return _react2.default.createElement(
        _StyledText2.default.H4,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H5 = function H5(_ref5) {
    var display = _ref5.display,
        color = _ref5.color,
        scale = _ref5.scale,
        styles = _ref5.styles,
        className = _ref5.className,
        children = _ref5.children;
    return _react2.default.createElement(
        _StyledText2.default.H5,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var H6 = function H6(_ref6) {
    var display = _ref6.display,
        color = _ref6.color,
        scale = _ref6.scale,
        styles = _ref6.styles,
        className = _ref6.className,
        children = _ref6.children;
    return _react2.default.createElement(
        _StyledText2.default.H6,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var P = function P(_ref7) {
    var display = _ref7.display,
        color = _ref7.color,
        scale = _ref7.scale,
        styles = _ref7.styles,
        className = _ref7.className,
        children = _ref7.children;
    return _react2.default.createElement(
        _StyledText2.default.P,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var Span = function Span(_ref8) {
    var display = _ref8.display,
        color = _ref8.color,
        scale = _ref8.scale,
        styles = _ref8.styles,
        className = _ref8.className,
        children = _ref8.children;
    return _react2.default.createElement(
        _StyledText2.default.Span,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var Label = function Label(_ref9) {
    var display = _ref9.display,
        color = _ref9.color,
        scale = _ref9.scale,
        styles = _ref9.styles,
        className = _ref9.className,
        children = _ref9.children;
    return _react2.default.createElement(
        _StyledText2.default.Label,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className
        },
        children
    );
};

var A = function A(_ref10) {
    var display = _ref10.display,
        color = _ref10.color,
        scale = _ref10.scale,
        styles = _ref10.styles,
        className = _ref10.className,
        href = _ref10.href,
        rel = _ref10.rel,
        target = _ref10.target,
        download = _ref10.download,
        children = _ref10.children;
    return _react2.default.createElement(
        _StyledText2.default.A,
        {
            textDisplay: display,
            fontColor: color,
            fontScale: scale,
            styles: styles,
            className: className,
            href: href,
            rel: rel,
            target: target,
            download: download
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