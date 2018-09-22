'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledInput = require('./StyledInput');

var _StyledInput2 = _interopRequireDefault(_StyledInput);

var _propTypes2 = require('../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _propTypes2.colorPropTypes, _propTypes2.spacingPropTypes, {
    type: _propTypes.string,
    name: _propTypes.string,
    value: _propTypes.string,
    onChange: _propTypes.func,
    disabled: _propTypes.bool,
    scale: _propTypes.string,
    width: _propTypes.string,
    height: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string
});

var defaultProps = _extends({}, _propTypes2.colorDefaultProps, _propTypes2.spacingDefaultProps, {
    p: '0', // override padding default
    type: 'text',
    name: undefined,
    value: '',
    onChange: undefined,
    disabled: undefined,
    scale: undefined,
    width: undefined,
    height: undefined,
    styles: undefined,
    className: undefined
});

var Input = function Input(_ref) {
    var type = _ref.type,
        name = _ref.name,
        value = _ref.value,
        onChange = _ref.onChange,
        disabled = _ref.disabled,
        color = _ref.color,
        scale = _ref.scale,
        bg = _ref.bg,
        width = _ref.width,
        height = _ref.height,
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
        className = _ref.className,
        styles = _ref.styles;
    return _react2.default.createElement(_StyledInput2.default, {
        type: type,
        name: name,
        value: value,
        onChange: onChange,
        disabled: disabled,
        fontColor: color,
        fontScale: scale,
        bgColor: bg,
        w: width,
        h: height,
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
        className: className,
        styles: styles
    });
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

exports.default = Input;