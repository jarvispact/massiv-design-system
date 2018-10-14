'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledImage = require('./StyledImage');

var _StyledImage2 = _interopRequireDefault(_StyledImage);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _propTypes2.spacingPropTypes, {
    display: _propTypes2.stringOrArray,
    alt: _propTypes.string,
    src: _propTypes.string,
    width: _propTypes.string,
    height: _propTypes.string,
    cssWidth: _propTypes2.stringOrArray,
    cssHeight: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string
});

var defaultProps = _extends({}, _propTypes2.spacingDefaultProps, {
    display: undefined,
    alt: undefined,
    src: undefined,
    width: undefined,
    height: undefined,
    cssWidth: undefined,
    cssHeight: undefined,
    styles: undefined,
    className: undefined
});

var Image = function Image(_ref) {
    var display = _ref.display,
        alt = _ref.alt,
        src = _ref.src,
        width = _ref.width,
        height = _ref.height,
        cssWidth = _ref.cssWidth,
        cssHeight = _ref.cssHeight,
        minWidth = _ref.minWidth,
        minHeight = _ref.minHeight,
        maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight,
        p = _ref.p,
        pt = _ref.pt,
        pb = _ref.pb,
        pl = _ref.pl,
        pr = _ref.pr,
        m = _ref.m,
        mt = _ref.mt,
        mb = _ref.mb,
        ml = _ref.ml,
        mr = _ref.mr,
        styles = _ref.styles,
        className = _ref.className;
    return _react2.default.createElement(_StyledImage2.default, {
        imageDisplay: display,
        alt: alt,
        src: src,
        width: width,
        height: height,
        cssWidth: cssWidth,
        cssHeight: cssHeight,
        minWidth: minWidth,
        minHeight: minHeight,
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        p: p,
        pt: pt,
        pb: pb,
        pl: pl,
        pr: pr,
        m: m,
        mt: mt,
        mb: mb,
        ml: ml,
        mr: mr,
        styles: styles,
        className: className
    });
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

exports.default = Image;