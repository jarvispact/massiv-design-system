'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _StyledIcon = require('./StyledIcon');

var _StyledIcon2 = _interopRequireDefault(_StyledIcon);

var _propTypes2 = require('../../prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    theme: (0, _propTypes.shape)({
        settings: (0, _propTypes.shape)({
            icons: _propTypes.object
        }).isRequired
    }).isRequired,
    name: _propTypes.string.isRequired,
    display: _propTypes2.stringOrArray,
    color: _propTypes2.stringOrArray,
    scale: _propTypes2.stringOrArray,
    loading: _propTypes.bool,
    styles: _propTypes.func,
    className: _propTypes.string
};

var defaultProps = {
    display: undefined,
    color: undefined,
    scale: undefined,
    loading: undefined,
    styles: undefined,
    className: undefined
};

var Icon = function Icon(_ref) {
    var theme = _ref.theme,
        name = _ref.name,
        display = _ref.display,
        color = _ref.color,
        scale = _ref.scale,
        loading = _ref.loading,
        className = _ref.className,
        styles = _ref.styles;
    return _react2.default.createElement(
        _StyledIcon2.default,
        {
            iconDisplay: display,
            fontColor: color,
            fontScale: scale,
            loading: loading,
            className: ((theme.settings.icons ? theme.settings.icons.className : '') + ' ' + (className || '')).trim(),
            styles: styles
        },
        loading ? 'settings' : name
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(Icon);