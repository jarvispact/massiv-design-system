'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    ', ';\n    ', ';\n'], ['\n    ', ';\n    ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propTypes = {
    theme: (0, _propTypes.shape)({}).isRequired,
    name: _propTypes.string.isRequired,
    color: _propTypes.string,
    scale: _propTypes.string,
    loading: _propTypes.bool,
    className: _propTypes.string,
    styles: _propTypes.func
};

var defaultProps = {
    color: undefined,
    scale: undefined,
    loading: undefined,
    className: undefined,
    styles: undefined
};

var StyledIcon = _styledComponents2.default.i(_templateObject, function (props) {
    return props.theme.components.Icon(props);
}, function (props) {
    return props.styles && props.styles(props);
});

var Icon = function Icon(_ref) {
    var theme = _ref.theme,
        name = _ref.name,
        color = _ref.color,
        scale = _ref.scale,
        loading = _ref.loading,
        className = _ref.className,
        styles = _ref.styles;
    return _react2.default.createElement(
        StyledIcon,
        {
            color: color,
            scale: scale,
            loading: loading,
            className: ((theme.settings.icons.className || '') + ' ' + (className || '')).trim(),
            styles: styles
        },
        loading ? 'settings' : name
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = (0, _styledComponents.withTheme)(Icon);