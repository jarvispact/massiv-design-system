'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledButton = require('./StyledButton');

var _StyledButton2 = _interopRequireDefault(_StyledButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    onClick: _propTypes.func.isRequired,
    type: _propTypes.string,
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
    className: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    type: undefined,
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
    className: undefined,
    children: undefined
};

var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        type = _ref.type,
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
        styles = _ref.styles,
        className = _ref.className,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledButton2.default,
        {
            onClick: onClick,
            type: type,
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
            styles: styles,
            className: className
        },
        children
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;