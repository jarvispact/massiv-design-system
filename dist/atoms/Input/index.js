'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledInput = require('./StyledInput');

var _StyledInput2 = _interopRequireDefault(_StyledInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    type: _propTypes.string,
    name: _propTypes.string,
    value: _propTypes.string,
    onChange: _propTypes.func,
    disabled: _propTypes.bool,
    color: _propTypes.string,
    scale: _propTypes.string,
    bg: _propTypes.string,
    width: _propTypes.string,
    height: _propTypes.string,
    p: _propTypes.string,
    pt: _propTypes.string,
    pb: _propTypes.string,
    pl: _propTypes.string,
    pr: _propTypes.string,
    styles: _propTypes.func,
    className: _propTypes.string
};

var defaultProps = {
    type: 'text',
    name: undefined,
    value: '',
    onChange: undefined,
    disabled: undefined,
    color: undefined,
    scale: undefined,
    bg: 'transparent',
    width: undefined,
    height: undefined,
    p: '0',
    pt: undefined,
    pb: undefined,
    pl: undefined,
    pr: undefined,
    styles: undefined,
    className: undefined
};

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
        className: className,
        styles: styles
    });
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

exports.default = Input;