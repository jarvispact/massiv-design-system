'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _StyledIcon = require('./StyledIcon');

var _StyledIcon2 = _interopRequireDefault(_StyledIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    name: _propTypes.string.isRequired,
    color: _propTypes.string,
    scale: _propTypes.string,
    loading: _propTypes.bool,
    onClick: _propTypes.func,
    className: _propTypes.string,
    styles: _propTypes.func
};

var defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
    onClick: undefined,
    className: undefined,
    styles: undefined
};

var Icon = function Icon(_ref) {
    var name = _ref.name,
        color = _ref.color,
        scale = _ref.scale,
        loading = _ref.loading,
        onClick = _ref.onClick,
        className = _ref.className,
        styles = _ref.styles;

    var cssClassNames = 'material-icons ' + (className || '');
    return _react2.default.createElement(
        _StyledIcon2.default,
        {
            color: color,
            scale: scale,
            loading: loading,
            onClick: loading ? undefined : onClick,
            className: cssClassNames,
            styles: styles
        },
        loading ? 'settings' : name
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;