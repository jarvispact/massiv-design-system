'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledButton = require('./StyledButton');

var _StyledButton2 = _interopRequireDefault(_StyledButton);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _propTypes2.colorPropTypes, _propTypes2.spacingPropTypes, {
    onClick: _propTypes.func.isRequired,
    type: _propTypes.string,
    disabled: _propTypes.bool,
    display: _propTypes2.stringOrArray,
    scale: _propTypes2.stringOrArray,
    width: _propTypes2.stringOrArray,
    height: _propTypes2.stringOrArray,
    minWidth: _propTypes2.stringOrArray,
    minHeight: _propTypes2.stringOrArray,
    maxWidth: _propTypes2.stringOrArray,
    maxHeight: _propTypes2.stringOrArray,
    styles: _propTypes.func,
    className: _propTypes.string,
    children: _propTypes.node
});

var defaultProps = _extends({}, _propTypes2.colorDefaultProps, _propTypes2.spacingDefaultProps, {
    type: undefined,
    disabled: undefined,
    display: undefined,
    scale: undefined,
    bg: 'transparent',
    width: undefined,
    height: undefined,
    minWidth: undefined,
    minHeight: undefined,
    maxWidth: undefined,
    maxHeight: undefined,
    p: '0',
    styles: undefined,
    className: undefined,
    children: undefined
});

var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        type = _ref.type,
        disabled = _ref.disabled,
        display = _ref.display,
        color = _ref.color,
        scale = _ref.scale,
        bg = _ref.bg,
        width = _ref.width,
        height = _ref.height,
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
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledButton2.default,
        {
            onClick: onClick,
            type: type,
            disabled: disabled,
            buttonDisplay: display,
            fontColor: color,
            fontScale: scale,
            bgColor: bg,
            w: width,
            h: height,
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
        },
        children
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;