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
    type: (0, _propTypes.oneOf)(['submit', 'button']),
    flat: _propTypes.bool,
    raised: _propTypes.bool,
    border: _propTypes.bool,
    disabled: _propTypes.bool,
    color: _propTypes.string,
    fontColor: _propTypes.string,
    scale: _propTypes.string,
    className: _propTypes.string,
    children: _propTypes.node,
    onClick: _propTypes.func,
    styles: _propTypes.func
};

var defaultProps = {
    type: 'button',
    flat: undefined,
    raised: undefined,
    border: undefined,
    disabled: undefined,
    color: undefined,
    fontColor: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
    onClick: undefined,
    styles: undefined
};

var Button = function Button(_ref) {
    var type = _ref.type,
        flat = _ref.flat,
        raised = _ref.raised,
        border = _ref.border,
        disabled = _ref.disabled,
        color = _ref.color,
        fontColor = _ref.fontColor,
        scale = _ref.scale,
        className = _ref.className,
        children = _ref.children,
        onClick = _ref.onClick,
        styles = _ref.styles;
    return _react2.default.createElement(
        _StyledButton2.default,
        {
            type: type,
            flat: flat,
            raised: raised,
            border: border,
            disabled: disabled,
            color: color,
            fontColor: fontColor,
            scale: scale,
            className: className,
            onClick: onClick,
            styles: styles
        },
        children
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;