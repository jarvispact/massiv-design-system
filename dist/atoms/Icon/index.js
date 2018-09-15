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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    theme: (0, _propTypes.shape)({
        settings: (0, _propTypes.shape)({
            icons: _propTypes.object
        }).isRequired
    }).isRequired,
    name: _propTypes.string.isRequired,
    fontColor: _propTypes.string,
    fontScale: _propTypes.string,
    loading: _propTypes.bool,
    styles: _propTypes.func,
    className: _propTypes.string
};

var defaultProps = {
    fontColor: undefined,
    fontScale: undefined,
    loading: undefined,
    styles: undefined,
    className: undefined
};

var Icon = function Icon(_ref) {
    var theme = _ref.theme,
        name = _ref.name,
        fontColor = _ref.fontColor,
        fontScale = _ref.fontScale,
        loading = _ref.loading,
        className = _ref.className,
        styles = _ref.styles;
    return _react2.default.createElement(
        _StyledIcon2.default,
        {
            fontColor: fontColor,
            fontScale: fontScale,
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