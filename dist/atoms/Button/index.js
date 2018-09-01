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
    disabled: _propTypes.bool,
    onClick: _propTypes.func.isRequired,
    children: _propTypes.node.isRequired
};

var defaultProps = {
    disabled: undefined
};

var Button = function Button(_ref) {
    var disabled = _ref.disabled,
        onClick = _ref.onClick,
        children = _ref.children;
    return _react2.default.createElement(
        _StyledButton2.default,
        { type: 'button', disabled: disabled, onClick: onClick },
        children
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;